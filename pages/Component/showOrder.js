// import React, { useState, useEffect } from 'react';
// import Link from 'next/link';

// const OrderList = () => {
//   // State to store the order data
//   const [orders, setOrders] = useState([]);
//   // State to keep track of the selected order for update
//   const [selectedOrder, setSelectedOrder] = useState(null);

//   // useEffect hook to fetch order data (replace with your API endpoint)
//   useEffect(() => {
//     // Fetch orders from API or use static data
//     const fetchOrders = async () => {
//       try {
//         // Replace this with your actual API endpoint to fetch orders
//         const response = await fetch('http://localhost:3000/customer/order');
//         const data = await response.json();
//         setOrders(data);
//       } catch (error) {
//         console.error('Error fetching orders:', error);
//       }
//     };

//     fetchOrders();
//   }, []);

//   // Function to handle order deletion
//   const handleDeleteOrder = async (orderId) => {
//     try {
//       // Replace this with your actual API endpoint to delete the order
//       await fetch(`http://localhost:3000/customer/order/${orderId}`, {
//         method: 'DELETE',
//       });
//       // After successful deletion, update the orders state to remove the deleted order
//       setOrders((prevOrders) => prevOrders.filter((order) => order.id !== orderId));
//     } catch (error) {
//       console.error('Error deleting order:', error);
//     }
//   };

//   // Function to handle the update action
//   const handleUpdateOrder = (order) => {
//     // Set the selected order in the state
//     setSelectedOrder(order);
//   };

//   return (
//     <div className="p-4">
//       <h2 className="text-2xl font-bold mb-4">Order List</h2>
//       {orders.length === 0 ? (
//         <p>No orders found.</p>
//       ) : (
//         <table className="w-full border">
//           <thead>
//             <tr>
//               <th className="border">Order ID</th>
//               <th className="border">Product</th>
//               <th className="border">Order Status</th>
//               <th className="border">Total Amount</th>
//               <th className="border">Order Date</th>
//               <th className="border">Shipping Address</th>
//               <th className="border">Action</th> 
//             </tr>
//           </thead>
//           <tbody>
//             {orders.map((order) => (
//               <tr key={order.id}>
//                 <td className="border">{order.id}</td>
//                 <td className="border">{order.products}</td>
//                 <td className="border">{order.orderStatus}</td>
//                 <td className="border">{order.totalAmount}</td>
//                 <td className="border">{order.orderDate}</td>
//                 <td className="border">{order.shippingAddress}</td>
//                 <td className="border">
//                   <button
//                     className="px-4 py-2 mr-2 bg-blue-500 text-white rounded"
//                     onClick={() => handleUpdateOrder(order)}
//                   >
//                     Update
//                   </button>
//                   <button
//                     className="px-4 py-2 bg-red-500 text-white rounded"
//                     onClick={() => handleDeleteOrder(order.id)}
//                   >
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}

//       {/* Modal to edit the selected order */}
//       {selectedOrder && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
//           <div className="bg-white p-4 rounded">
//             {/* Your update form or content goes here */}
//             <p>Edit Order: {selectedOrder.id}</p>
//             <p>Product: {selectedOrder.shippingAddress}</p>
//             <p>Quantity: {selectedOrder.quantity}</p>
//             {/* Add more fields for updating the order */}
//             <button
//               className="px-4 py-2 bg-blue-500 text-white rounded mt-4"
//               onClick={() => {
//                 // Handle the update process here (e.g., submit the form to the API)
//                 // After successful update, close the modal and reset the selectedOrder state
//                 setSelectedOrder(null);
//               }}
//             >
//               Save Changes
//             </button>
//             <button
//               className="px-4 py-2 bg-red-500 text-white rounded mt-2"
//               onClick={() => {
//                 // Close the modal without making any changes
//                 setSelectedOrder(null);
//               }}
//             >
//               Cancel
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default OrderList;


import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const OrderList = () => {
  // State to store the order data
  const [orders, setOrders] = useState([]);
  // State to keep track of the selected order for update
  const [selectedOrder, setSelectedOrder] = useState(null);
  // State to store the product data for the selected order
  const [selectedProduct, setSelectedProduct] = useState(null);
  // State to show/hide the review form
  const [showReviewForm, setShowReviewForm] = useState(false);
  // State to store the review data
  const [reviewData, setReviewData] = useState({
    orderId: null,
    productId: null,
    reviewText: '',
    rating: 0,
  });

  // useEffect hook to fetch order data (replace with my API endpoint)
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch('http://localhost:3000/customer/order');
        const data = await response.json();
        setOrders(data);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    fetchOrders();
  }, []);

  // Function to handle order deletion
  const handleDeleteOrder = async (orderId) => {
    try {
      await fetch(`http://localhost:3000/customer/order/${orderId}`, {
        method: 'DELETE',
      });
      // After successful deletion, update the orders state to remove the deleted order
      setOrders((prevOrders) => prevOrders.filter((order) => order.id !== orderId));
    } catch (error) {
      console.error('Error deleting order:', error);
    }
  };

  // State to store the elapsed time
  const [elapsedTime, setElapsedTime] = useState(0);                                             // State to store the elapsed time
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);                           // State to control the visibility of the success message

 // Function to handle the update action
 const handleUpdateOrder = (order) => {
  // Check if the elapsed time is within the allowed limit (30 minutes, represented in milliseconds)
  const timeLimit = 30 * 60 * 1000; // 30 minutes in milliseconds
  const lastUpdateTime = localStorage.getItem(`lastUpdateTime-${order.id}`);
  const currentTime = new Date().getTime();

  if (!lastUpdateTime || currentTime - lastUpdateTime > timeLimit) {
    setSelectedOrder(order);                                                                 // Set the selected order in the state
    setSelectedProduct(order.products);                                                     // Set the selected product in the state
    localStorage.setItem(`lastUpdateTime-${order.id}`, currentTime.toString());            // Store the current time in localStorage when the update action is first performed
  } else {
    alert('Your time to update this order has expired.');                                     // Show the time over message
  }
};                                                                           
                                                                                               // Function to handle changes in the edit form inputs
  const handleEditInputChange = (event) => {                                        
    const { name, value } = event.target;
    setSelectedOrder((prevOrder) => ({ ...prevOrder, [name]: value }));
  };

  // Function to submit the updated order data
  const handleSaveChanges = async () => {
    try {
      // Make the API call to update the order
      const response = await fetch(`http://localhost:3000/customer/Updateorders/${selectedOrder.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(selectedOrder),
      });

      if (!response.ok) {
        throw new Error('Failed to update the order');
      }
       setShowSuccessMessage(true);                                                                          // If the API call is successful, show the success message
      setSelectedOrder(null);                                                                                     // If the API call is successful, close the modal and reset the selected order state
    } catch (error) {
      console.error('Error updating order:', error);                                                                  // Handle any error states or error messages as needed
    }
  };

  // Effect hook to start the timer
  useEffect(() => {
    const timer = setInterval(() => {
      setElapsedTime((prevElapsedTime) => prevElapsedTime + 1000);
    }, 1000);

    // Clear the timer when the component is unmounted
    return () => clearInterval(timer);
  }, []);


  // Function to handle the "Add Review" button click
  const handleAddReviewClick = (orderId, productId) => {
    // Set the review data with the order ID and product ID
    setReviewData({ orderId, productId, reviewText: '', rating: 0 });
    // Show the review form
    setShowReviewForm(true);
  };

  // Function to handle changes in the review form inputs
  const handleReviewInputChange = (event) => {
    const { name, value } = event.target;
    setReviewData((prevReviewData) => ({ ...prevReviewData, [name]: value }));
  };

  // Function to submit the review form
  const handleSubmitReview = () => {
    // Here, you can submit the review data to the backend API for processing
    console.log('Review Data:', reviewData);
    // Reset the review data and hide the review form
    setReviewData({ orderId: null, productId: null, reviewText: '', rating: 0 });
    setShowReviewForm(false);
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
              <th className="border">Product ID</th>
              {/* <th className="border">Product Name</th> */}
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
                <td className="border">{order.products}</td>
                <td className="border">{order.orderStatus}</td>
                <td className="border">{order.totalAmount}</td>
                <td className="border">{order.orderDate}</td>
                <td className="border">{order.shippingAddress}</td>
                <td className="border">
                  <button
                    className="px-4 py-2 mr-2 bg-blue-500 text-white rounded"
                    onClick={() => handleUpdateOrder(order)}
                  >
                    Update
                  </button>
                  <button
                    className="px-4 py-2 bg-red-500 text-white rounded"
                    onClick={() => handleDeleteOrder(order.id)}
                  >
                    Delete
                  </button>
                  <button
                    className="px-4 py-2 bg-green-500 text-white rounded"
                    onClick={() => handleAddReviewClick(order.id, order.productId)}
                  >
                    Add Review
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

   
      {/* Modal to edit the selected order */}
      {selectedOrder && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-4 rounded">
          <p>Order updated successfully!</p>
            {/* Your update form or content goes here */}
            <p>Edit Order: {selectedOrder.id}</p>
            <div className="mt-4">
              <label htmlFor="shippingAddress">Shipping Address:</label>
              <input
                type="text"
                id="shippingAddress"
                name="shippingAddress"
                value={selectedOrder.shippingAddress}
                onChange={handleEditInputChange}
                className="w-full border rounded"
              />
            </div>
            {/* Add more input fields for updating the order */}
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded mt-4"
              onClick={handleSaveChanges}
            >
              Save Changes
            </button>
            <button
              className="px-4 py-2 bg-red-500 text-white rounded mt-2"
              onClick={() => {
                setShowSuccessMessage(false);
                // Close the modal without making any changes
                setSelectedOrder(null);
              }}
           
            >
              Cancel
            </button>
          </div>
        </div>
      )}



      {/* Review Form */}
      {showReviewForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-4 rounded">
            <h3 className="text-xl font-bold mb-2">Add Review</h3>
            <p>Order ID: {reviewData.orderId}</p>
            <p>Product ID: {reviewData.productId}</p>
            <div className="mt-4">
              <label htmlFor="reviewText">Review:</label>
              <textarea
                id="reviewText"
                name="reviewText"
                value={reviewData.reviewText}
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
                  // Close the review form without making any changes
                  setShowReviewForm(false);
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderList;

