
// export default function showOrder() {
//   return (
//     <div>
//         <h1>hello</h1>
      
//     </div>
//   )
// }
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const OrderList = () => {
  // State to store the order data
  const [orders, setOrders] = useState([]);

  // useEffect hook to fetch order data (replace with your API endpoint)
  useEffect(() => {
    // Fetch orders from API or use static data
    const fetchOrders = async () => {
      try {
        // Replace this with your actual API endpoint to fetch orders
        const response = await fetch('https://example-api.com/orders');
        const data = await response.json();
        setOrders(data);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div>
      <h2>Order List</h2>
      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <ul>
          {orders.map((order) => (
            <li key={order.id}>
              {/* Render order details here */}
              <p>Order ID: {order.id}</p>
              <p>Product: {order.productName}</p>
              <p>Quantity: {order.quantity}</p>
              {/* Add more order details as needed */}
            </li>
          ))}
        </ul>
      )}
            <Link href="/Component/addreview">addreview</Link>

    </div>
  );
};

export default OrderList;

