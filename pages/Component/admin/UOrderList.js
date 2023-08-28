import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UOrderList = () => {
  const [orders, setOrders] = useState([]);
  const [editingOrder, setEditingOrder] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [reviewSuccessMessage, setReviewSuccessMessage] = useState(false);
  const [showDeleteSuccessMessage, setShowDeleteSuccessMessage] = useState(false);
  const [showReviewError, setShowReviewError] = useState(false);
  const [reviewErrorMessage, setReviewErrorMessage] = useState('');
  const [successMessages, setSuccessMessages] = useState({});




  const [showStatusModal, setShowStatusModal] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState('');
  const [reviewData, setReviewData] = useState({
    customer: 57, 
    order: orders.id,
    products: 8,
    Review: '',
    rating: 0,
    Date: new Date().toISOString(),
  });


  useEffect(() => {
    const fetchAllOrders = async () => {
      try {
        const response = await axios.get('http://localhost:3000/admin/getAllOrders');
        setOrders(response.data); // Assuming response.data is an array of orders
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    fetchAllOrders();
  }, []);


  const handleDeleteOrder = async (orderId, orderStatus) => {
    if (orderStatus === 'Pending') {
      // Prevent delete if order status is "Confirmed"
      console.log('Cannot delete order with "Confirmed" status');
      return;
    }
  
    try {
      const response = await axios.delete(`http://localhost:3000/customer/deleteorder/${orderId}`);
  
      if (response.status === 200) {
        setOrders((prevOrders) => prevOrders.filter((order) => order.id !== orderId));
        setShowDeleteSuccessMessage(true); // Show the delete success message
        setTimeout(() => {
          setShowDeleteSuccessMessage(false);
        }, 3000);
      } else {
        throw new Error('Failed to delete the order');
      }
    } catch (error) {
      console.error('Error deleting order:', error);
    }
  };



  const updateOrderStatus = async (orderId, newStatus) => {
    try {
      const response = await axios.put(
        `http://localhost:3000/customer/Updateorders/${orderId}`,
        { orderStatus: newStatus },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
  
      if (response.status === 200) {
        setOrders((prevOrders) =>
          prevOrders.map((order) =>
            order.id === orderId ? { ...order, orderStatus: newStatus } : order
          )
        );
  
        setSuccessMessages((prevSuccessMessages) => ({
          ...prevSuccessMessages,
          [orderId]: true,
        }));
  
        setTimeout(() => {
          setSuccessMessages((prevSuccessMessages) => ({
            ...prevSuccessMessages,
            [orderId]: false,
          }));
        }, 3000);
      } else {
        throw new Error('Failed to update the order status');
      }
    } catch (error) {
      console.error('Error updating order status:', error);
    }
  };
  
  const handleUpdateOrder = (orderId) => {
    setSelectedStatus('');
    setShowStatusModal(true);
    setEditingOrder(orderId);
  };

const handleAddReviewClick = (order) => {
  if (order.orderStatus === 'Delivered') {
    setReviewData({
      customer: 57,
      products: 8,
      order: order.id,
      Review: '',
      rating: 0,
      Date: new Date().toISOString(),
    });
    setShowReviewForm(true);
    setShowReviewError(false); // Reset error state
    setReviewErrorMessage(''); // Reset error message
  } else {
    setReviewErrorMessage('Your order is not Delivered, so you cannot add a review.');
    setShowReviewError(true); // Show the review error message
  }
};

const handleReviewInputChange = (event) => {
  const { name, value } = event.target;
  setReviewData((prevReviewData) => ({ ...prevReviewData, [name]: value }));
};

const handleSubmitReview = async () => {
  try {
    console.log('Review Data:', reviewData);
    const response = await axios.post(`http://localhost:3000/customer/addreviewbyorderid/${reviewData.order}`,
      reviewData
    );

    if (response.status === 201) {
      console.log('Review submitted successfully:', response.data);
      setReviewData({
        customer: 57,
        products: 8,
        order: null,
        Review: '',
        rating: 0,
        Date: new Date().toISOString(),
      });
      setShowReviewForm(false);
      setReviewSuccessMessage(true); // Set the review success message state
    } else {
      throw new Error('Failed to submit review');
    }
  } catch (error) {
    console.error('Error submitting review:', error);
  }
};

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Order List</h2>
      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <table className="w-full border">
          <thead>
            <tr>
              <th className="border">Order ID</th>
              <th className="border">Order Status</th>
              <th className="border">Total Amount</th>
              <th className="border">Order Date</th>
              <th className="border">Shipping Address</th>
              <th className="border">Action</th>
            </tr>
          </thead>
          <tbody>
          {orders.map((order) => (
                          <tr key={order.id}>
                <td className="border">{order.id}</td>
                <td className="border">{order.orderStatus}</td>
                <td className="border">{order.totalAmount}</td>
                <td className="border">{order.orderDate}</td>
                <td className="border">{order.shippingAddress}</td>
                <td className="border">
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded"
        onClick={() => handleUpdateOrder(order.id)}
      >
        Update Status
      </button>
      {successMessages[order.id] && (
        <p className="text-green-500">Order status updated successfully!</p>
      )}

                    <button
                       className="px-4 py-2 bg-red-500 text-white rounded"
                       onClick={() => handleDeleteOrder(order.id, order.orderStatus)}
                       disabled={order.orderStatus !== 'Pending'} // Disable the delete button if status is "Confirmed"
                    >
                    Delete
                   </button>
                  <button
                    className="px-4 py-2 bg-green-500 text-white rounded"
                    onClick={() => handleAddReviewClick(order)}
                    disabled={order.orderStatus !== 'Delivered'}
                  >
                    Add Review
                  </button>
                  {showReviewError && order.orderStatus !== 'Delivered' && (
                    <p className="text-red-500">{reviewErrorMessage}</p>
                  )}
                  {/* ... Delete button ... */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

{showStatusModal && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded">
            <h3 className="text-xl font-bold mb-4">Update Order Status</h3>
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="w-full border rounded"
            >
              <option value="">Select Status</option>
              <option value="Pending">Pending</option>
              <option value="Confirmed">Confirmed</option>
              <option value="Delivered">Delivered</option>
            </select>
            <div className="mt-4">
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded"
                onClick={() => {
                  if (selectedStatus) {
                    updateOrderStatus(editingOrder, selectedStatus);
                    setShowStatusModal(false);
                  }
                }}
              >
                Update
              </button>
              <button
                className="px-4 py-2 bg-red-500 text-white rounded ml-2"
                onClick={() => setShowStatusModal(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

{showReviewForm && (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="bg-white p-4 rounded">
          <h3 className="text-xl font-bold mb-2">Add Review</h3>
          <p>Order ID: {reviewData.order}</p>
          {/* <p>Product ID: {reviewData.productId}</p> */}
          <div className="mt-4">
            <label htmlFor="Review">Review:</label>
            <textarea
              id="Review"
              name="Review"
              value={reviewData.Review}
              onChange={handleReviewInputChange}
              className="w-full border rounded"
            />
          </div>
          <div className="mt-4">
            <label htmlFor="rating">Rating:</label>
            <input
              type="number"
              id="rating"
              name="rating"
              min="1"
              max="5"
              value={reviewData.rating}
              onChange={handleReviewInputChange}
              className="w-full border rounded"
            />
          </div>
          <div className="mt-4">
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded"
              onClick={handleSubmitReview}
            >
              Submit Review
            </button>
            <button
              className="px-4 py-2 bg-red-500 text-white rounded ml-2"
              onClick={() => {
                setShowReviewForm(false);
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    )}

         {/* Show success message */}
      {showSuccessMessage && (
        <div className="fixed inset-x-0 bottom-0 mb-4 flex justify-center items-center">
          <div className="bg-green-500 text-white py-2 px-4 rounded">
            Order updated successfully!
          </div>
        </div>
      )}

{reviewSuccessMessage && (
        <div className="fixed inset-x-0 bottom-0 mb-4 flex justify-center items-center">
          <div className="bg-green-500 text-white py-2 px-4 rounded">
            Your review was submitted successfully!
          </div>
        </div>
      )}

{showDeleteSuccessMessage && (
      <div className="fixed inset-x-0 bottom-0 mb-4 flex justify-center items-center">
        <div className="bg-green-500 text-white py-2 px-4 rounded">
          Your order was deleted successfully!
        </div>
      </div>
    )}
    </div>
  );
};

export default UOrderList;