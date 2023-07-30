// components/ReviewItem.js
import React, { useState } from 'react';

const ReviewItem = ({ review, onUpdateReview, onDeleteReview }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedReview, setUpdatedReview] = useState(review.review);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
    setUpdatedReview(review.review);
  };

  const handleUpdateClick = () => {
    onUpdateReview(review.id, updatedReview);
    setIsEditing(false);
  };

  const handleDeleteClick = () => {
    onDeleteReview(review.id);
  };

  return (
    <div className="border p-4 mb-4">
      <p className="font-bold">Name: {review.name}</p>
      {isEditing ? (
        <textarea
          value={updatedReview}
          onChange={(e) => setUpdatedReview(e.target.value)}
          className="w-full h-32 p-2 border rounded"
        />
      ) : (
        <p>{review.review}</p>
      )}
      <div className="mt-2">
        {isEditing ? (
          <>
            <button
              onClick={handleUpdateClick}
              className="px-4 py-2 bg-green-500 text-white rounded mr-2"
            >
              Update
            </button>
            <button
              onClick={handleCancelClick}
              className="px-4 py-2 bg-red-500 text-white rounded"
            >
              Cancel
            </button>
          </>
        ) : (
          <>
            <button
              onClick={handleEditClick}
              className="px-4 py-2 bg-blue-500 text-white rounded mr-2"
            >
              Edit
            </button>
            <button
              onClick={handleDeleteClick}
              className="px-4 py-2 bg-red-500 text-white rounded"
            >
              Delete
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default ReviewItem;
