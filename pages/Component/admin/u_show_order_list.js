import React, { useState, useEffect, useContext } from 'react';
import Link from 'next/link';
import { AuthContext } from './AuthContext';

const OrderList = () => {
  // Access the userToken from the AuthContext
  const { userToken } = useContext(AuthContext);

  // State to store the order data
  const [orders, setOrders] = useState([]);

  // useEffect hook to fetch order data (replace with your API endpoint)
  useEffect(() => {
    // Fetch orders from API only if the user is authenticated (has a valid token)
    if (userToken) {
      const fetchOrders = async () => {
        try {
          // Replace this with your actual API endpoint to fetch orders
          const response = await fetch('http://localhost:3000/customer/order', {
            headers: {
              Authorization: `Bearer ${userToken}`, // Send the user token in the request headers
            },
          });
          const data = await response.json();
          setOrders(data);
        } catch (error) {
          console.error('Error fetching orders:', error);
        }
      };

      fetchOrders();
    }
  }, [userToken]);

// Function to handle order deletion
const handleDeleteOrder = async (orderId) => {
    try {
      // Replace this with your actual API endpoint to delete the order
      await fetch(`http://localhost:3000/customer/order/${orderId}`, {
        method: 'DELETE',
      });
      // After successful deletion, update the orders state to remove the deleted order
      setOrders((prevOrders) => prevOrders.filter((order) => order.id !== orderId));
    } catch (error) {
      console.error('Error deleting order:', error);
    }
  };

  // Function to handle the update action
  const handleUpdateOrder = (order) => {
    // Set the selected order in the state
    setSelectedOrder(order);
  };

  return (
    <>
    <AuthProvider>
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Order List</h2>
      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <table className="w-full border">
          <thead>
            <tr>
              <th className="border">Order ID</th>
              <th className="border">Product</th>
              <th className="border">Quantity</th>
              <th className="border">Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td className="border">{order.id}</td>
                <td className="border">{order.productName}</td>
                <td className="border">{order.quantity}</td>
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
            {/* Your update form or content goes here */}
            <p>Edit Order: {selectedOrder.id}</p>
            <p>Product: {selectedOrder.productName}</p>
            <p>Quantity: {selectedOrder.quantity}</p>
            {/* Add more fields for updating the order */}
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded mt-4"
              onClick={() => {
                // Handle the update process here (e.g., submit the form to the API)
                // After successful update, close the modal and reset the selectedOrder state
                setSelectedOrder(null);
              }}
            >
              Save Changes
            </button>
            <button
              className="px-4 py-2 bg-red-500 text-white rounded mt-2"
              onClick={() => {
                // Close the modal without making any changes
                setSelectedOrder(null);
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      <Link href="/Component/addreview">Add Review</Link>
    </div>
    </AuthProvider>
    </>


  );

};


export default OrderList;
