import React, { useState, useEffect } from 'react';

const OrderList = () => {
  const customerid = 20;
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch(`http://localhost:3000/customer/getorderss/${customerid}`);
        const data = await response.json();
        console.log('Response data:', data);
        setOrders(data);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    fetchOrders();
  }, [customerid]);

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
                <td className="border">{order.productId}</td>
                <td className="border">{order.orderStatus}</td>
                <td className="border">{order.totalAmount}</td>
                <td className="border">{order.orderDate}</td>
                <td className="border">{order.shippingAddress}</td>
                <td className="border">
                  {/* Buttons and actions */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default OrderList;
