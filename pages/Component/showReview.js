// // export default function defaultShowReview() {
// //     return (
// //       <div>
// //         <h1>hello</h1>
// //       </div>
// //     )
// //   }

  
//   // components/ReviewForm.js
// import React, { useState } from 'react';
// import ReviewItem from './ReviewItem';

// const ShowReview = () => {
//   const [reviews, setReviews] = useState([
//     { id: 1, name: 'John', review: 'Great product!' },
//     { id: 2, name: 'Alice', review: 'Highly recommended.' },
//     // Add more reviews as needed
//   ]);

//   const handleUpdateReview = (id, updatedReview) => {
//     setReviews((prevReviews) =>
//       prevReviews.map((review) =>
//         review.id === id ? { ...review, review: updatedReview } : review
//       )
//     );
//   };
//   const handleDeleteReview = (id) => {
//     setReviews((prevReviews) => prevReviews.filter((review) => review.id !== id));
//   };

//   return (
//     <div>
//       {reviews.map((review) => (
//         <ReviewItem
//           key={review.id}
//           review={review}
//           onUpdateReview={handleUpdateReview}
//           onDeleteReview={handleDeleteReview} // Make sure onDeleteReview is passed here
//         />
//       ))}
//     </div>
//   );
// };

// export default ShowReview;






// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const ShowReview = () => {
//   const [reviewsData, setReviewsData] = useState([]);

//   useEffect(() => {
//     const fetchReviews = async () => {
//       try {
//         const response = await axios.get('http://localhost:3000/customer/getreviewbycustomerid/57');
//         console.log('API Response:', response.data); // Add this line
//         setReviewsData(response.data.ProductReview);
//       } catch (error) {
//         console.error('Error fetching reviews:', error);
//       }
//     };
//     fetchReviews();
//   }, []);

//   console.log('reviewsData:', reviewsData); // Add this line

//   return (
//     <div className="p-4">
//       <h2 className="text-2xl font-bold mb-4">Review List</h2>      
//       <h2 className="text-2xl font-bold mb-4">Reviews</h2>
//       {reviewsData.length === 0 ? (
//         <p>No reviews found.</p>
//       ) : (
//         <table className="w-full border">
//             <thead>
//             <tr>
//               <th className="border">review ID</th>
//               <th className="border">review</th>
//               <th className="border">rating</th>
//               <th className="border"> Date</th>
//               <th className="border">Action</th>
//             </tr>
//           </thead>
//           <tbody>
//           {reviewsData[0].reviewsData.map((review) => (
//             <tr key={review.id}>
//               <td className="border px-4 py-2">{review.id}</td>
//               <td className="border px-4 py-2">{review.Review}</td>
//               <td className="border px-4 py-2">{review.rating}</td>
//               <td className="border px-4 py-2">{review.Date}</td>
//               <td className="border px-4 py-2">
//                 <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
//                   Delete
//                 </button>
//                 <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//                   Edit
//                 </button>
//               </td>
//             </tr>
//           ))}
//           </tbody>
//         </table>

//       )}
//     </div>
//   );
// };

// export default ShowReview;


import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ShowReview = () => {
  const [reviewsData, setReviewsData] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get('http://localhost:3000/customer/getreviewbycustomerid/57');
        console.log('API Response:', response.data);

        if (response.data.length > 0 && response.data[0].ProductReview) {
          console.log('ProductReview:', response.data[0].ProductReview);
          setReviewsData(response.data[0].ProductReview);
        } else {
          setReviewsData([]);
        }
      } catch (error) {
        console.error('Error fetching reviews:', error);
        setReviewsData([]);
      }
    };
    fetchReviews();
  }, []);

  const handleDeleteReview = async (reviewId) => {
    try {
      const response = await axios.delete(`http://localhost:3000/customer/delete_review/${reviewId}`);
      console.log('Review deleted:', response.data);
      // After successful deletion, you may want to update the reviewsData state to reflect the changes
      // You can fetch the updated reviewsData again or directly remove the review from the existing state
    } catch (error) {
      console.error('Error deleting review:', error);
    }
  };

  console.log('reviewsData:', reviewsData);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Review List</h2>
      <h2 className="text-2xl font-bold mb-4">Reviews</h2>
      {reviewsData.length === 0 ? (
        <p>No reviews found.</p>
      ) : (
        <table className="w-full border">
          <thead>
            <tr>
              <th className="border">Review ID</th>
              <th className="border">Review</th>
              <th className="border">Rating</th>
              <th className="border">Date</th>
              <th className="border">Action</th>
            </tr>
          </thead>
          <tbody>
            {reviewsData.map((review) => (
              <tr key={review.id}>
                <td className="border px-4 py-2">{review.id}</td>
                <td className="border px-4 py-2">{review.Review}</td>
                <td className="border px-4 py-2">{review.rating}</td>
                <td className="border px-4 py-2">{review.Date}</td>
                <td className="border px-4 py-2">
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => handleDeleteReview(review.id)}
                >
                Delete
                 </button>
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ShowReview;




// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const ShowReview = () => {
//   const [reviewsData, setReviewsData] = useState([]);
//   const [customerData, setCustomerData] = useState({});


//   useEffect(() => {
//     const fetchReviews = async () => {
//       try {
//         const response = await axios.get('http://localhost:3000/customer/getreviewbycustomerid/57');
//         console.log('API Response:', response.data);

//         if (response.data.length > 0 && response.data[0].ProductReview) {
//           console.log('ProductReview:', response.data[0].ProductReview);
//           setReviewsData(response.data[0].ProductReview);
//         } else {
//           setReviewsData([]);
//         }
//         setCustomerData(response.data);
//       } catch (error) {
//         console.error('Error fetching reviews:', error);
//         setReviewsData([]);
//         setCustomerData({});

//       }
//     };
//     fetchReviews();
//   }, []);

//   console.log('reviewsData:', reviewsData);
//   console.log('customerData:', customerData);

//   return (
//     <div className="p-4">
//       <h2 className="text-2xl font-bold mb-4">Review List</h2>
//       <h2 className="text-2xl font-bold mb-4">Reviews</h2>
//       {reviewsData.length === 0 ? (
//         <p>No reviews found.</p>
//       ) : (
//         <table className="w-full border">
//           <thead>
//             <tr>
//               <th className="border">FirstName</th>
//               <th className="border">Review ID</th>
//               <th className="border">Review</th>
//               <th className="border">Rating</th>
//               <th className="border">Date</th>
//               <th className="border">Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {reviewsData.map((review) => (
//               <tr key={review.id}>
//                 <td className="border px-4 py-2">{customerData[0].firstName}</td>
//                 <td className="border px-4 py-2">{review.id}</td>
//                 <td className="border px-4 py-2">{review.Review}</td>
//                 <td className="border px-4 py-2">{review.rating}</td>
//                 <td className="border px-4 py-2">{review.Date}</td>
//                 <td className="border px-4 py-2">
//                   <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
//                     Delete
//                   </button>
//                   <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//                     Edit
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

// export default ShowReview;