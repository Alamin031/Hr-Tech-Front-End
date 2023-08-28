// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const OrderList = () => {
//   const [orders, setOrders] = useState([]);
//   const [editingOrder, setEditingOrder] = useState(null);
//   const [updatedShippingAddress, setUpdatedShippingAddress] = useState('');
//   const [showSuccessMessage, setShowSuccessMessage] = useState(false);
//   const [showReviewForm, setShowReviewForm] = useState(false);
//   const [reviewSuccessMessage, setReviewSuccessMessage] = useState(false);
//   const [showDeleteSuccessMessage, setShowDeleteSuccessMessage] = useState(false);
//   const [showReviewError, setShowReviewError] = useState(false);
//   const [reviewErrorMessage, setReviewErrorMessage] = useState('');
//   const [showUpdateError, setShowUpdateError] = useState(false); // Define this state
//   const [updateErrorMessage, setUpdateErrorMessage] = useState(''); // Define this state

//   const [reviewData, setReviewData] = useState({
//     customer: 57, 
//     order: orders.id,
//     products: 8,
//     Review: '',
//     rating: 0,
//     Date: new Date().toISOString(),
//   });


//   useEffect(() => {
//     const fetchOrders = async () => {
//       try {
//         const response = await axios.get('http://localhost:3000/customer/getorderss/57');
//         setOrders(response.data); // Assuming response.data is an array of orders
//       } catch (error) {
//         console.error('Error fetching orders:', error);
//       }
//     };

//     fetchOrders();
//   }, []);


//   const handleDeleteOrder = async (orderId, orderStatus) => {
//     if (orderStatus === 'Pending') {
//       // Prevent delete if order status is "Confirmed"
//       console.log('Cannot delete order with "Confirmed" status');
//       return;
//     }
  
//     try {
//       const response = await axios.delete(`http://localhost:3000/customer/deleteorder/${orderId}`);
  
//       if (response.status === 200) {
//         setOrders((prevOrders) => prevOrders.filter((order) => order.id !== orderId));
//         setShowDeleteSuccessMessage(true); // Show the delete success message
//         setTimeout(() => {
//           setShowDeleteSuccessMessage(false);
//         }, 3000);
//       } else {
//         throw new Error('Failed to delete the order');
//       }
//     } catch (error) {
//       console.error('Error deleting order:', error);
//     }
//   };



//   const handleUpdateOrder = (order) => {
//     if (order.orderStatus === 'Pending') {
//       setEditingOrder(order);
//       setUpdatedShippingAddress(order.shippingAddress);
//     } else {
//       setUpdateErrorMessage('You can only update orders with a Pending status.');
//       setShowUpdateError(true);
//     }
//   };

//   const handleShippingAddressChange = (event) => {
//     setUpdatedShippingAddress(event.target.value);
//   };

//   const saveUpdatedOrder = async () => {
//     try {
//       const response = await axios.put(`http://localhost:3000/customer/Updateorders/${editingOrder.id}`,
//       { shippingAddress: updatedShippingAddress },
//       {
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       }
//     );

//     if (response.status !== 200) {
//       throw new Error('Failed to update the order');
//     }

//     setOrders((prevOrders) =>
//       prevOrders.map((order) =>
//         order.id === editingOrder.id ? { ...order, shippingAddress: updatedShippingAddress } : order
//       )
//     );

//     setEditingOrder(null);
//     setShowSuccessMessage(true); // Set the success message state to true

//     // Hide the success message after a few seconds
//     setTimeout(() => {
//       setShowSuccessMessage(false);
//     }, 3000);
//   } catch (error) {
//     console.error('Error updating order:', error);
//   }
// };

// const handleAddReviewClick = (order) => {
//   if (order.orderStatus === 'Delivered') {
//     setReviewData({
//       customer: 57,
//       products: 8,
//       order: order.id,
//       Review: '',
//       rating: 0,
//       Date: new Date().toISOString(),
//     });
//     setShowReviewForm(true);
//     setShowReviewError(false); // Reset error state
//     setReviewErrorMessage(''); // Reset error message
//   } else {
//     setReviewErrorMessage('Your order is not Delivered, so you cannot add a review.');
//     setShowReviewError(true); // Show the review error message
//   }
// };

// const handleReviewInputChange = (event) => {
//   const { name, value } = event.target;
//   setReviewData((prevReviewData) => ({ ...prevReviewData, [name]: value }));
// };

// const handleSubmitReview = async () => {
//   try {
//     console.log('Review Data:', reviewData);
//     const response = await axios.post(`http://localhost:3000/customer/addreviewbyorderid/${reviewData.order}`,
//       reviewData
//     );

//     if (response.status === 201) {
//       console.log('Review submitted successfully:', response.data);
//       setReviewData({
//         customer: 57,
//         products: 8,
//         order: null,
//         Review: '',
//         rating: 0,
//         Date: new Date().toISOString(),
//       });
//       setShowReviewForm(false);
//       setReviewSuccessMessage(true); // Set the review success message state
//     } else {
//       throw new Error('Failed to submit review');
//     }
//   } catch (error) {
//     console.error('Error submitting review:', error);
//   }
// };

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
//               <th className="border">Order Status</th>
//               <th className="border">Total Amount</th>
//               <th className="border">Order Date</th>
//               <th className="border">Shipping Address</th>
//               <th className="border">Action</th>
//             </tr>
//           </thead>
//           <tbody>
//           {orders[0].orders.map((order) => (
//               <tr key={order.id}>
//                 <td className="border">{order.id}</td>
//                 <td className="border">{order.orderStatus}</td>
//                 <td className="border">{order.totalAmount}</td>
//                 <td className="border">{order.orderDate}</td>
//                 <td className="border">{order.shippingAddress}</td>
//                 <td className="border">
//                 <button
//                     className="px-4 py-2 bg-blue-500 text-white rounded"
//                     onClick={() => handleUpdateOrder(order)}
//                     disabled={order.orderStatus !== 'Pending'}
//                   >
//                     Update
//                   </button>
//                   {showUpdateError && order.orderStatus !== 'Pending' && (
//                     <p className="text-red-500">{updateErrorMessage}</p>
//                   )}
//                     <button
//                        className="px-4 py-2 bg-red-500 text-white rounded"
//                        onClick={() => handleDeleteOrder(order.id, order.orderStatus)}
//                        disabled={order.orderStatus !== 'Pending'} // Disable the delete button if status is "Confirmed"
//                     >
//                     Delete
//                    </button>
//                   <button
//                     className="px-4 py-2 bg-green-500 text-white rounded"
//                     onClick={() => handleAddReviewClick(order)}
//                     disabled={order.orderStatus !== 'Delivered'}
//                   >
//                     Add Review
//                   </button>
//                   {showReviewError && order.orderStatus !== 'Delivered' && (
//                     <p className="text-red-500">{reviewErrorMessage}</p>
//                   )}
//                   {/* ... Delete button ... */}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}

// {editingOrder && (
//   <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
//     <div className="bg-white p-4 rounded">
//       <p>Edit Order: {editingOrder.id}</p>
//       <div className="mt-4">
//         <label htmlFor="updatedShippingAddress">Updated Shipping Address:</label>
//         <input
//           type="text"
//           id="updatedShippingAddress"
//           name="updatedShippingAddress"
//           value={updatedShippingAddress}
//           onChange={handleShippingAddressChange}
//           className="w-full border rounded"
//         />
//       </div>
//       {/* Add more input fields for other order details */}
//       <button
//         className="px-4 py-2 bg-blue-500 text-white rounded mt-4"
//         onClick={saveUpdatedOrder}
//       >
//         Save Changes
//       </button>
//       <button
//         className="px-4 py-2 bg-red-500 text-white rounded mt-2"
//         onClick={() => {
//           setEditingOrder(null);
//         }}
//       >
//         Cancel
//         </button>
//         </div>
//         </div>
//         )}

// {showReviewForm && (
//       <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
//         <div className="bg-white p-4 rounded">
//           <h3 className="text-xl font-bold mb-2">Add Review</h3>
//           <p>Order ID: {reviewData.order}</p>
//           {/* <p>Product ID: {reviewData.productId}</p> */}
//           <div className="mt-4">
//             <label htmlFor="Review">Review:</label>
//             <textarea
//               id="Review"
//               name="Review"
//               value={reviewData.Review}
//               onChange={handleReviewInputChange}
//               className="w-full border rounded"
//             />
//           </div>
//           <div className="mt-4">
//             <label htmlFor="rating">Rating:</label>
//             <input
//               type="number"
//               id="rating"
//               name="rating"
//               min="1"
//               max="5"
//               value={reviewData.rating}
//               onChange={handleReviewInputChange}
//               className="w-full border rounded"
//             />
//           </div>
//           <div className="mt-4">
//             <button
//               className="px-4 py-2 bg-blue-500 text-white rounded"
//               onClick={handleSubmitReview}
//             >
//               Submit Review
//             </button>
//             <button
//               className="px-4 py-2 bg-red-500 text-white rounded ml-2"
//               onClick={() => {
//                 setShowReviewForm(false);
//               }}
//             >
//               Cancel
//             </button>
//           </div>
//         </div>
//       </div>
//     )}

//          {/* Show success message */}
//       {showSuccessMessage && (
//         <div className="fixed inset-x-0 bottom-0 mb-4 flex justify-center items-center">
//           <div className="bg-green-500 text-white py-2 px-4 rounded">
//             Order updated successfully!
//           </div>
//         </div>
//       )}

// {reviewSuccessMessage && (
//         <div className="fixed inset-x-0 bottom-0 mb-4 flex justify-center items-center">
//           <div className="bg-green-500 text-white py-2 px-4 rounded">
//             Your review was submitted successfully!
//           </div>
//         </div>
//       )}

// {showDeleteSuccessMessage && (
//       <div className="fixed inset-x-0 bottom-0 mb-4 flex justify-center items-center">
//         <div className="bg-green-500 text-white py-2 px-4 rounded">
//           Your order was deleted successfully!
//         </div>
//       </div>
//     )}
//     </div>
//   );
// };

// export default OrderList;





import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useAuth } from '../utils/authcontext';
import CustomerNavbar from './customerNavbar';
import dynamic from 'next/dynamic'


const Title = dynamic(() => import('../Layout/title'), {
  ssr: false
})

const OrderList = () => {
  const [orders, setOrders] = useState([]);
  const [editingOrder, setEditingOrder] = useState(null);
  const [updatedShippingAddress, setUpdatedShippingAddress] = useState('');
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [reviewSuccessMessage, setReviewSuccessMessage] = useState(false);
  const [showDeleteSuccessMessage, setShowDeleteSuccessMessage] = useState(false);
  const [showReviewError, setShowReviewError] = useState(false);
  const [reviewErrorMessage, setReviewErrorMessage] = useState('');
  const [showUpdateError, setShowUpdateError] = useState(false); // Define this state
  const [updateErrorMessage, setUpdateErrorMessage] = useState(''); // Define this state

  const [reviewData, setReviewData] = useState({
    customer: 57, 
    order: orders.id,
    products: 8,
    Review: '',
    rating: 0,
    Date: new Date().toISOString(),
  });

  


    const { user } = useAuth();
    const { checkUser } = useAuth();
    const router = useRouter();


      useEffect(() => {
      if (!checkUser()) 
  {
      router.push('/Component/LoginForm');
  }
  else {
    fetchOrders();
  }
}, []);

// useEffect(() => {
//   fetchOrders();
// }, []);

    const fetchOrders = async () => {
      try {
          const userEmail = user.email;
          console.log("User Email:", userEmail);
          const response =await axios.get(`http://localhost:3000/customer/getorderss/57`, {
          withCredentials: true, 
      });
        setOrders(response.data); // Assuming response.data is an array of orders

      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };


const handleDeleteOrder = async (orderId, orderStatus) => {
  if (orderStatus === 'Pending') {
    try {
      const response = await axios.delete(`http://localhost:3000/customer/orders/${orderId}`);
  
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
  } else {
    console.log('Cannot delete order with status other than "Pending"');
  }
};


  const handleUpdateOrder = (order) => {
    if (order.orderStatus === 'Pending') {
      setEditingOrder(order);
      setUpdatedShippingAddress(order.shippingAddress);
    } else {
      setUpdateErrorMessage('You can only update orders with a Pending status.');
      setShowUpdateError(true);
    }
  };

  const handleShippingAddressChange = (event) => {
    setUpdatedShippingAddress(event.target.value);
  };

  const saveUpdatedOrder = async () => {
    try {
      const response = await axios.put(`http://localhost:3000/customer/Updateorders/${editingOrder.id}`,
      { shippingAddress: updatedShippingAddress },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    if (response.status !== 200) {
      throw new Error('Failed to update the order');
    }

    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === editingOrder.id ? { ...order, shippingAddress: updatedShippingAddress } : order
      )
    );

    setEditingOrder(null);
    setShowSuccessMessage(true); // Set the success message state to true

    // Hide the success message after a few seconds
    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 3000);
  } catch (error) {
    console.error('Error updating order:', error);
  }
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
    <> 
    <Title page="Show Order"></Title>
    <CustomerNavbar />
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
          {orders[0].orders.map((order) => (
              <tr key={order.id}>
                <td className="border">{order.id}</td>
                <td className="border">{order.orderStatus}</td>
                <td className="border">{order.totalAmount}</td>
                <td className="border">{order.orderDate}</td>
                <td className="border">{order.shippingAddress}</td>
                <td className="border">
                <button
                    className="px-4 py-2 bg-blue-500 text-white rounded"
                    onClick={() => handleUpdateOrder(order)}
                    disabled={order.orderStatus !== 'Pending'}
                  >
                    Update
                  </button>
                  {showUpdateError && order.orderStatus !== 'Pending' && (
                    <p className="text-red-500">{updateErrorMessage}</p>
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

{editingOrder && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
    <div className="bg-white p-4 rounded">
      <p>Edit Order: {editingOrder.id}</p>
      <div className="mt-4">
        <label htmlFor="updatedShippingAddress">Updated Shipping Address:</label>
        <input
          type="text"
          id="updatedShippingAddress"
          name="updatedShippingAddress"
          value={updatedShippingAddress}
          onChange={handleShippingAddressChange}
          className="w-full border rounded"
        />
      </div>
      {/* Add more input fields for other order details */}
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded mt-4"
        onClick={saveUpdatedOrder}
      >
        Save Changes
      </button>
      <button
        className="px-4 py-2 bg-red-500 text-white rounded mt-2"
        onClick={() => {
          setEditingOrder(null);
        }}
      >
        Cancel
        </button>
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
    </>
  );
};

export default OrderList;

