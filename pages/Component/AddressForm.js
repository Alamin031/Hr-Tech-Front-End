import React, { useState } from 'react';
import axios from 'axios';
import Layout from '../Layout/layout';
import SideNavbar from './SideNavbar';



const AddressForm = () => {
    const initialFormData = {
      city: '',
      country: '',
      postalCode: '',
    };
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Perform any logic you want with the form data here, such as submitting to a backend API.
//     console.log('Form Data:', formData);
//   };
const [formData, setFormData] = useState(initialFormData);
const [isSubmitting, setIsSubmitting] = useState(false);
const [submissionError, setSubmissionError] = useState(null);
const [submissionSuccess, setSubmissionSuccess] = useState(false);

const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionError(null);
    setSubmissionSuccess(false);

    // Send the form data to the backend API using Axios
    axios
      .post('https://example-api.com/submit-address', formData)
      .then((response) => {
        console.log('Form Data Submitted:', response.data);
        setIsSubmitting(false);
        setSubmissionSuccess(true);
      })
      .catch((error) => {
        console.error('Error Submitting Form Data:', error);
        setIsSubmitting(false);
        setSubmissionError('An error occurred while submitting the form.');
      });
  };

  return (
    <div className="">
        <Layout>
        <SideNavbar/>
{/* 
        <div className=" p-8 -mt-96">
      <div className="max-w-md mx-auto bg-white rounded p-8 shadow-md -mt-96 "> */}

            <div className="max-w-md mx-auto rounded  p-24 -mt-96">
    <form onSubmit={handleSubmit} className='max-w-md mx-auto bg-white rounded p-8 shadow-md -mt-96 '>

      <div>
        <label>City:</label>
        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md focus:outline-none"

          required
        />
      </div>
      <div>
        <label>State:</label>
        <input
          type="text"
          name="state"
          value={formData.state}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md focus:outline-none"
          required
        />
      </div>
      <div>
        <label>Postal Code:</label>
        <input
          type="text"
          name="postalCode"
          value={formData.postalCode}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md focus:outline-none"
          required
        />
      </div>
      <div>
        <label>Country:</label>
        <input
          type="text"
          name="country"
          value={formData.country}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md focus:outline-none"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full px-4 py-2 mt-4 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Submitting...' : 'Submit'}
      </button>
      {submissionError && (
        <div className="text-red-500 mt-2">{submissionError}</div>
      )}
      {submissionSuccess && (
        <div className="text-green-500 mt-2">Form submitted successfully!</div>
      )}  
        </form>
        </div>
        </Layout>
        </div>

  );
};

export default AddressForm;






