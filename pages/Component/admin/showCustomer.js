// import React, { useState, useEffect } from 'react';

// const CustomerList = () => {
//   const [customers, setCustomers] = useState([]);
//   const [selectedCustomer, setSelectedCustomer] = useState(null);
//   const [customerReviews, setCustomerReviews] = useState([]);
//   const [editedData, setEditedData] = useState({
//     id: null,
//     name: '',
//     email: '',
//     phoneNumber: '',
//     dateOfBirth: '',
//   });

//   const [isEditModalOpen, setIsEditModalOpen] = useState(false);
//   const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
//   const [showReviewsTab, setShowReviewsTab] = useState(false);

//   useEffect(() => {
//     // Fetch customers from API or use static data
//     const fetchCustomers = async () => {
//       try {
//         // Replace this with your actual API endpoint to fetch customers
//         const response = await fetch('http://localhost:3000/admin/showallcustomer');
//         const data = await response.json();
//         setCustomers(data);
//       } catch (error) {
//         console.error('Error fetching customers:', error);
//       }
//     };

//     fetchCustomers();
//   }, []);

//   const handleEditCustomer = (CustomerEntity) => {
//     setSelectedCustomer(CustomerEntity);
//     setEditedData({
//       id: CustomerEntity.customerid,
//       name: CustomerEntity.firstName,
//       email: CustomerEntity.email,
//       phoneNumber: CustomerEntity.PhoneNumber,
//       dateOfBirth: CustomerEntity.dateOfBirth,
//     });
//     setIsEditModalOpen(true);
//   };

//   const handleEditInputChange = (event) => {
//     const { name, value } = event.target;
//     setEditedData((prevData) => ({ ...prevData, [name]: value }));
//   };

//   const handleSaveChanges = async () => {
//     try {
//       // Make the API call to update the customer
//       const response = await fetch(`http://localhost:3000/admin/customer_update_profile_info/${editedData.id}`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           firstName: editedData.name,
//           email: editedData.email,
//           PhoneNumber: editedData.phoneNumber,
//           dateOfBirth: editedData.dateOfBirth,
//           // Add more properties as needed
//         }),
//       });

//       if (!response.ok) {
//         throw new Error('Failed to update the customer');
//       }

//       // If the API call is successful, close the modal and update the customer data
//       const updatedCustomers = customers.map((CustomerEntity) =>
//         CustomerEntity.customerid === editedData.id
//           ? {
//               ...CustomerEntity,
//               firstName: editedData.name,
//               email: editedData.email,
//               PhoneNumber: editedData.phoneNumber,
//               dateOfBirth: editedData.dateOfBirth,
//               // Update other properties as needed
//             }
//           : CustomerEntity
//       );

//       setCustomers(updatedCustomers);
//       setSelectedCustomer(null);
//       setEditedData({
//         id: null,
//         name: '',
//         email: '',
//         phoneNumber: '',
//         dateOfBirth: '',
//       });

//       // Show a success alert
//       alert('Customer updated successfully!');
//       setIsEditModalOpen(false);
//     } catch (error) {
//       console.error('Error updating customer:', error);
//     }
//   };

//   const handleDeleteCustomer = async (customerId) => {
//     try {
//       const response = await fetch(`http://localhost:3000/admin/customer_delete_profile/${customerId}`, {
//         method: 'DELETE',
//       });

//       if (!response.ok) {
//         throw new Error('Failed to delete the customer');
//       }

//       // Update the customers state by removing the deleted customer
//       setCustomers((prevCustomers) => prevCustomers.filter((CustomerEntity) => CustomerEntity.customerid !== customerId));
//     } catch (error) {
//       console.error('Error deleting customer:', error);
//     }
//   };

//   const handleCloseReviewModal = () => {
//     setIsReviewModalOpen(false);
//     setCustomerReviews([]);
//     setSelectedCustomer(null);
//     setShowReviewsTab(false);
//   };

//   const handleShowReviews = async (customerId) => {
//     try {
//       const response = await fetch(`http://localhost:3000/customer/getreviewbycustomerid/${customerId}`);

//       if (!response.ok) {
//         throw new Error('Failed to fetch customer reviews');
//       }

//       const data = await response.json();
//       const reviews = data[0]?.ProductReview || [];
//       setCustomerReviews(reviews);
//       setSelectedCustomer(customerId);
//       setShowReviewsTab(true);
//       setIsReviewModalOpen(true);
//     } catch (error) {
//       console.error('Error fetching customer reviews:', error);
//     }
//   };

//   return (
//     <div className="p-4">
//       <h2 className="text-2xl font-bold mb-4">Customer List</h2>
//       {customers.length === 0 ? (
//         <p>No customers found.</p>
//       ) : (
//         <table className="w-full border">
//           <thead>
//             <tr>
//               <th className="border">Row</th>
//               <th className="border">Customer ID</th>
//               <th className="border">Customer Name</th>
//               <th className="border">Email</th>
//               <th className="border">Phone</th>
//               <th className="border">Date of Birth</th>
//               <th className="border">Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {customers.map((CustomerEntity, index) => (
//               <tr key={CustomerEntity.customerid}>
//                 <td className="border">{index + 1}</td>
//                 <td className="border">{CustomerEntity.customerid}</td>
//                 <td className="border">{CustomerEntity.firstName}</td>
//                 <td className="border">{CustomerEntity.email}</td>
//                 <td className="border">{CustomerEntity.PhoneNumber}</td>
//                 <td className="border">{CustomerEntity.dateOfBirth}</td>
//                 <td className="border">
//                   <button
//                     className="px-2 py-1 bg-blue-500 text-white rounded"
//                     onClick={() => handleEditCustomer(CustomerEntity)}
//                   >
//                     Edit
//                   </button>
//                   <button
//                     className="px-2 py-1 bg-red-500 text-white rounded ml-2"
//                     onClick={() => handleDeleteCustomer(CustomerEntity.customerid)}
//                   >
//                     Delete
//                   </button>
//                   <button
//                     className="px-2 py-1 bg-green-500 text-white rounded ml-2"
//                     onClick={() => handleShowReviews(CustomerEntity.customerid)}
//                   >
//                     Show Review
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}

//       {isEditModalOpen && selectedCustomer && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
//           <div className="bg-white p-4 rounded">
//             <h3 className="text-xl font-bold mb-2">Edit Customer</h3>
//             <p>Edit customer: {editedData.id}</p>

//             <div className="mt-2">
//               <label htmlFor="name">Name:</label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 value={editedData.name}
//                 onChange={handleEditInputChange}
//                 className="w-full border rounded"
//               />
//             </div>
//             <div className="mt-2">
//               <label htmlFor="email">Email:</label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 value={editedData.email}
//                 onChange={handleEditInputChange}
//                 className="w-full border rounded"
//               />
//             </div>
//             <div className="mt-2">
//               <label htmlFor="phoneNumber">Phone Number:</label>
//               <input
//                 type="tel"
//                 id="phoneNumber"
//                 name="phoneNumber"
//                 value={editedData.phoneNumber}
//                 onChange={handleEditInputChange}
//                 className="w-full border rounded"
//               />
//             </div>
//             <div className="mt-2">
//               <label htmlFor="dateOfBirth">Date of Birth:</label>
//               <input
//                 type="date"
//                 id="dateOfBirth"
//                 name="dateOfBirth"
//                 value={editedData.dateOfBirth}
//                 onChange={handleEditInputChange}
//                 className="w-full border rounded"
//               />
//             </div>
//             <div className="mt-4">
//               <button
//                 className="px-4 py-2 bg-blue-500 text-white rounded"
//                 onClick={handleSaveChanges}
//               >
//                 Save Changes
//               </button>
//               <button
//                 className="px-4 py-2 bg-red-500 text-white rounded ml-2"
//                 onClick={() => {
//                   setSelectedCustomer(null);
//                   setEditedData({
//                     id: null,
//                     name: '',
//                     email: '',
//                     phoneNumber: '',
//                     dateOfBirth: '',
//                   });
//                   setIsEditModalOpen(false);
//                 }}
//               >
//                 Cancel
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {isReviewModalOpen && selectedCustomer && showReviewsTab && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
//           <div className="bg-white p-4 rounded">
//             <h3 className="text-xl font-bold mb-2">Customer Reviews</h3>
//             {customerReviews.length > 0 ? (
//               <ul>
//                 {customerReviews.map((ProductReview) => (
//                   <li key={ProductReview.id}>{ProductReview.id}{ProductReview.Review}{ProductReview.Date}</li>
//                 ))}
//               </ul>
//             ) : (
//               <p>No reviews available.</p>
//             )}
//             <button
//               className="px-4 py-2 bg-red-500 text-white rounded mt-2"
//               onClick={handleCloseReviewModal}
//             >
//               Close Reviews
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CustomerList;


import React, { useState, useEffect } from 'react';

const CustomerList = () => {
  const [customers, setCustomers] = useState([]);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [customerReviews, setCustomerReviews] = useState([]);
  const [editedData, setEditedData] = useState({
    id: null,
    name: '',
    email: '',
    phoneNumber: '',
    dateOfBirth: '',
  });

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [showReviewsTab, setShowReviewsTab] = useState(false);
  const [customerOrders, setCustomerOrders] = useState([]);


  useEffect(() => {
    // Fetch customers from API or use static data
    const fetchCustomers = async () => {
      try {
        // Replace this with your actual API endpoint to fetch customers
        const response = await fetch('http://localhost:3000/admin/showallcustomer');
        const data = await response.json();
        setCustomers(data);
      } catch (error) {
        console.error('Error fetching customers:', error);
      }
    };

    fetchCustomers();
  }, []);

  const handleEditCustomer = (CustomerEntity) => {
    setSelectedCustomer(CustomerEntity);
    setEditedData({
      id: CustomerEntity.customerid,
      name: CustomerEntity.firstName,
      email: CustomerEntity.email,
      phoneNumber: CustomerEntity.PhoneNumber,
      dateOfBirth: CustomerEntity.dateOfBirth,
    });
    setIsEditModalOpen(true);
  };

  const handleEditInputChange = (event) => {
    const { name, value } = event.target;
    setEditedData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSaveChanges = async () => {
    try {
      // Make the API call to update the customer
      const response = await fetch(`http://localhost:3000/admin/customer_update_profile_info/${editedData.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: editedData.name,
          email: editedData.email,
          PhoneNumber: editedData.phoneNumber,
          dateOfBirth: editedData.dateOfBirth,
          // Add more properties as needed
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to update the customer');
      }

      // If the API call is successful, close the modal and update the customer data
      const updatedCustomers = customers.map((CustomerEntity) =>
        CustomerEntity.customerid === editedData.id
          ? {
              ...CustomerEntity,
              firstName: editedData.name,
              email: editedData.email,
              PhoneNumber: editedData.phoneNumber,
              dateOfBirth: editedData.dateOfBirth,
              // Update other properties as needed
            }
          : CustomerEntity
      );

      setCustomers(updatedCustomers);
      setSelectedCustomer(null);
      setEditedData({
        id: null,
        name: '',
        email: '',
        phoneNumber: '',
        dateOfBirth: '',
      });

      // Show a success alert
      alert('Customer updated successfully!');
      setIsEditModalOpen(false);
    } catch (error) {
      console.error('Error updating customer:', error);
    }
  };

  const handleDeleteCustomer = async (customerId) => {
    try {
      const response = await fetch(`http://localhost:3000/admin/customer_delete_profile/${customerId}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete the customer');
      }

      // Update the customers state by removing the deleted customer
      setCustomers((prevCustomers) => prevCustomers.filter((CustomerEntity) => CustomerEntity.customerid !== customerId));
    } catch (error) {
      console.error('Error deleting customer:', error);
    }
  };

  const handleCloseReviewModal = () => {
    setIsReviewModalOpen(false);
    setCustomerReviews([]);
    setSelectedCustomer(null);
    setShowReviewsTab(false);
  };

  const handleShowReviews = async (customerId) => {
    try {
      const response = await fetch(`http://localhost:3000/customer/getreviewbycustomerid/${customerId}`);

      if (!response.ok) {
        throw new Error('Failed to fetch customer reviews');
      }

      const data = await response.json();
      const reviews = data[0]?.ProductReview || [];
      setCustomerReviews(reviews);
      setSelectedCustomer(customerId);
      setShowReviewsTab(true);
      setIsReviewModalOpen(true);
    } catch (error) {
      console.error('Error fetching customer reviews:', error);
    }
  };


 const handleShowOrders = async (customerId) => {
  try {
    const response = await fetch(`http://localhost:3000/customer/getorderss/${customerId}`);

    if (!response.ok) {
      throw new Error('Failed to fetch customer orders');
    }

    const data = await response.json();
    console.log("response data:", data); // Log the parsed JSON data

    const orders = data[0]?.orders || []; // Access the orders array correctly

    setCustomerOrders(orders);
  } catch (error) {
    console.error('Error fetching customer orders:', error);
  }
};

  
  return (
    <div className="container p-4">
      <h2 className="text-2xl font-bold mb-4">Customer List</h2>
      {customers.length === 0 ? (
        <p>No customers found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border">
            <thead>
               <tr>
              <th className="border">Row</th>
              <th className="border">Customer ID</th>
              <th className="border">Customer Name</th>
              <th className="border">Email</th>
              <th className="border">Phone</th>
              <th className="border">Date of Birth</th>
              <th className="border">Action</th>
            </tr>
            </thead>
            <tbody>
              {customers.map((CustomerEntity, index) => (
                <tr key={CustomerEntity.customerid}>
                <td className="border">{index + 1}</td>
                <td className="border">{CustomerEntity.customerid}</td>
                <td className="border">{CustomerEntity.firstName}</td>
                <td className="border">{CustomerEntity.email}</td>
                <td className="border">{CustomerEntity.PhoneNumber}</td>
                <td className="border">{CustomerEntity.dateOfBirth}</td>                
                <td className="border">
                  <th>
                    <button
                      className="btn bg-blue-500 text-white rounded md:ml-2 lg:ml-0"
                      onClick={() => handleEditCustomer(CustomerEntity)}
                    >
                      Edit
                    </button>
                    </th>
                    <th>
                    <button
                      className="btn bg-red-500 text-white rounded md:ml-2 lg:ml-0"
                      onClick={() => handleDeleteCustomer(CustomerEntity.customerid)}
                    >
                      Delete
                    </button>
                    </th>
                    <th>
                    <button
                      className="btn bg-green-500 text-white rounded md:ml-2 lg:ml-0"
                      onClick={() => handleShowReviews(CustomerEntity.customerid)}
                    >
                      Show Review
                    </button>
                    <button
  className="btn bg-purple-500 text-white rounded md:ml-2 lg:ml-0"
  onClick={() => handleShowOrders(CustomerEntity.customerid)}
>
  Show Orders
</button>                  

                    </th>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {isEditModalOpen && selectedCustomer && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-4 rounded">
            <h3 className="text-xl font-bold mb-2">Edit Customer</h3>
            <p>Edit customer: {editedData.id}</p>

            <div className="mt-2">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={editedData.name}
                onChange={handleEditInputChange}
                className="w-full border rounded"
              />
            </div>
            <div className="mt-2">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={editedData.email}
                onChange={handleEditInputChange}
                className="w-full border rounded"
              />
            </div>
            <div className="mt-2">
              <label htmlFor="phoneNumber">Phone Number:</label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={editedData.phoneNumber}
                onChange={handleEditInputChange}
                className="w-full border rounded"
              />
            </div>
            <div className="mt-2">
              <label htmlFor="dateOfBirth">Date of Birth:</label>
              <input
                type="date"
                id="dateOfBirth"
                name="dateOfBirth"
                value={editedData.dateOfBirth}
                onChange={handleEditInputChange}
                className="w-full border rounded"
              />
            </div>
            <div className="mt-4">
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded"
                onClick={handleSaveChanges}
              >
                Save Changes
              </button>
              <button
                className="px-4 py-2 bg-red-500 text-white rounded ml-2"
                onClick={() => {
                  setSelectedCustomer(null);
                  setEditedData({
                    id: null,
                    name: '',
                    email: '',
                    phoneNumber: '',
                    dateOfBirth: '',
                  });
                  setIsEditModalOpen(false);
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {isReviewModalOpen && selectedCustomer && showReviewsTab && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-4 rounded">
            <h3 className="text-xl font-bold mb-2">Customer Reviews</h3>
            {customerReviews.length > 0 ? (
              <ul>
                {customerReviews.map((ProductReview) => (
                  <li key={ProductReview.id}>{ProductReview.id}{ProductReview.Review}{ProductReview.Date}</li>
                ))}
              </ul>
            ) : (
              <p>No reviews available.</p>
            )}
            <button
              className="px-4 py-2 bg-red-500 text-white rounded mt-2"
              onClick={handleCloseReviewModal}
            >
              Close Reviews
            </button>
          </div>
        </div>
      )}
{customerOrders.length > 0 && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
    <div className="bg-white p-4 rounded">
      <h3 className="text-xl font-bold mb-2">Customer Orders</h3>
      <ul>
        {customerOrders.map((order) => (
          <li key={order.id}>
            Order ID: {order.id}, Total Amount: {order.totalAmount}, Order Status: {order.orderStatus}
          </li>
        ))}
      </ul>
      <button
        className="px-4 py-2 bg-red-500 text-white rounded mt-2"
        onClick={() => setCustomerOrders([])}
      >
        Close Orders
      </button>
    </div>
  </div>
)}



    </div>
  );
};

export default CustomerList;
