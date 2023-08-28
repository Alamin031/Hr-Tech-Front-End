import React, { useState } from 'react';
import { format } from 'date-fns'; // Used for date formatting
import dynamic from 'next/dynamic'


const Title = dynamic(() => import('../Layout/title'), {
  ssr: false
})

const ReviewForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [rating, setRating] = useState('');
  const [review, setReview] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform the form submission or other actions here
    // For simplicity, we will just log the form data
    console.log({
      name,
      email,
      rating,
      review,
      date: format(new Date(), 'MMMM d, yyyy HH:mm'), // Format the date and time
    });
    // Reset form fields after submission
    setName('');
    setEmail('');
    setRating('');
    setReview('');
  };

  return (
    <> 
            <Title page="Add Review"></Title>


    <form className="space-y-4" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>
      <div>
        <label htmlFor="rating">Rating:</label>
        <input
          type="number"
          id="rating"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          min="1"
          max="5"
          required
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>
      <div>
        <label htmlFor="review">Review:</label>
        <textarea
          id="review"
          value={review}
          onChange={(e) => setReview(e.target.value)}
          required
          className="w-full h-32 px-4 py-2 border rounded-md resize-none focus:outline-none focus:ring focus:border-blue-300"
        ></textarea>
      </div>
      <button
        type="submit"
        className="px-6 py-3 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
      >
        Submit
      </button>
    </form>
    </>
  );
};

export default ReviewForm;
