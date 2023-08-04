// components/SignUp.js
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Header from '../Layout/header';
import Layout from '../Layout/layout';
import axios from 'axios';

const SignUp = () => {
  const [formData, setFormData] = useState({
    profilePicture: null,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value,  } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
   
    
      const myform= new FormData();
      myform.append('profilePicture', formData.profilePicture);
      console.log("file data "+ formData.profilePicture)
      
      try {
      
        console.log(formData);
        const response = await axios.post('http://localhost:3000/customer/registerCustomer', myform,{
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }); 
        if (response.status === 200) {
          console.log('Form submitted successfully:', response.data);
          alert('Thanks for signing up! You will receive an email shortly.');
          console.log(response);
          router.push('/login'); 
        } else {
          // API call failed
          console.log(response);
          console.log('Form submission error:', response.data);
          alert('Form submission failed. Please try again later.');
        }
        
      } catch (error) {
        console.log(error);
        // Error occurred while making the API call
        console.error('Form submission error:', error);
        alert('An error occurred. Please try again later.');
      }
    
  };

  const validateForm = (data) => {
    let errors = {};

    if (!data.profilePicture) {
      errors.profilePicture = 'Profile picture cannot be empty';
    }

    return errors;
  };

  

  return (
    <div className="">
                <Layout>

        
    <div className="flex items-center justify-center min-h-screen bg-gray-100">

      <form onSubmit={handleSubmit} encType="multipart/form-data" className='bg-white shadow-md rounded-lg px-8 pt-14 pb-8 mb-4 mt-4'>
      <h2 className="mb-4 text-2xl font-semibold text-center">Sign Up</h2>  

        {/* File upload input for profile picture */}
        <div className="form-group">
          <label>Profile Picture</label>
          <input
            type="file"
            name="profilePicture"
            id="profilePicture"
            // value={formData.profilePicture}

            onChange={handleChange}
            className="w-full py-2 mt-2 focus:outline-none"
          />
          {errors.profilePicture && (
            <span className="text-red-500 text-sm mt-1">{errors.profilePicture}</span>
          )}
        </div>

        <button
          type="submit"
          className="w-full px-4 py-2 mt-4 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none"
        >
          Sign Up
        </button>
      </form>
    </div>
    </Layout>
    </div>

  );
};

export default SignUp;
