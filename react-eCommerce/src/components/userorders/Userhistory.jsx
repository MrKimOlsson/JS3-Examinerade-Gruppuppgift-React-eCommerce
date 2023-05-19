import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Userhistories() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const token = localStorage.getItem('token');
        console.log(token); // Log the JWT token
        const response = await axios.get('http://localhost:9999/api/order', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setOrders(response.data.orders);
      } catch (error) {
        console.log(error); // Handle error
      }
    };

    fetchOrders();
  }, [localStorage.getItem('token')]);

  return (
    <div>
      <h1>User Order Histories</h1>
      {orders.map((order) => (
        <div key={order._id}>
          <p>Order ID: {order._id}</p>
          {/* Display other order details */}
        </div>
      ))}
    </div>
  );
}

export default Userhistories;
