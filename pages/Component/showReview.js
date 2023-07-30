// export default function defaultShowReview() {
//     return (
//       <div>
//         <h1>hello</h1>
//       </div>
//     )
//   }

  
  // components/ReviewForm.js
import React, { useState } from 'react';
import ReviewItem from './ReviewItem';

const ShowReview = () => {
  const [reviews, setReviews] = useState([
    { id: 1, name: 'John', review: 'Great product!' },
    { id: 2, name: 'Alice', review: 'Highly recommended.' },
    // Add more reviews as needed
  ]);

  const handleUpdateReview = (id, updatedReview) => {
    setReviews((prevReviews) =>
      prevReviews.map((review) =>
        review.id === id ? { ...review, review: updatedReview } : review
      )
    );
  };
  const handleDeleteReview = (id) => {
    setReviews((prevReviews) => prevReviews.filter((review) => review.id !== id));
  };

  return (
    <div>
      {reviews.map((review) => (
        <ReviewItem
          key={review.id}
          review={review}
          onUpdateReview={handleUpdateReview}
          onDeleteReview={handleDeleteReview} // Make sure onDeleteReview is passed here
        />
      ))}
    </div>
  );
};

export default ShowReview;
