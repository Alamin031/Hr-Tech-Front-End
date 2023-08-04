// components/SignUp.js
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Header from '../Layout/header';
import Layout from '../Layout/layout';
import axios from 'axios';

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    dateOfBirth: '',
    PhoneNumber: '',
    email: '',
    password: '',
    confirmPassword: '',
    gender: '',
    interests: [],
    country: '',
    profilePicture: null,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === 'checkbox') {
      const isChecked = checked;
      const updatedInterests = isChecked
        ? [...formData.interests, value]
        : formData.interests.filter((interest) => interest !== value);
      setFormData((prevFormData) => ({
        ...prevFormData,
        interests: updatedInterests,
      }));
    
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    }
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    setErrors(validationErrors);
  
    if (Object.keys(validationErrors).length === 0) {
      const myform= new FormData();
      myform.append('firstName',formData.firstName);
      myform.append('lastName',formData.lastName);
      myform.append('username',formData.username);
      myform.append('dateOfBirth',formData.dateOfBirth);
      myform.append('PhoneNumber',formData.PhoneNumber);
      myform.append('email',formData.email);
      myform.append('password',formData.password);
      myform.append('confirmPassword',formData.confirmPassword);
      myform.append('profilePicture', document.querySelector('#profilePicture').files[0]);

      console.log("file"+ myform.profilePicture)
      // myform.append('profilePic', formData.profilePic); // Use the profilePicture from formData


      myform.append('gender', formData.gender);
      myform.append('interests', JSON.stringify(formData.interests)); // Convert interests array to JSON string
      myform.append('country', formData.country);
      
      try {
        console.log(formData);
        const response = await axios.post('http://localhost:3000/customer/registration', myform,{
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }); 
        if (response.status === 200) {
          // API call was successful
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

        if (error.response) {
          console.error('Server Response Data:', error.response.data);
  
          if (error.response.status === 404) {
            alert('The server returned a "Not Found" error. Please try again later.');
          } else if (error.response.status === 500) {
            alert('The server encountered an internal error. Please try again later.');
          } else {
            alert('An error occurred. Please try again later.');
          }
        } else if (error.request) {
          // The request was made, but no response was received from the server
          console.error('No Response Received:', error.request);
          alert('No response received from the server. Please check your internet connection.');
        } else {
          // Something happened in setting up the request that triggered an error
          console.error('Request Setup Error:', error.message);
          alert('An error occurred. Please try again later.');
        }
      }
    }
  };



  const validateForm = (data) => {
    let errors = {};

    if (!data.firstName.trim()) {
      errors.firstName = 'First Name cannot be empty';
    }
    if (!data.lastName.trim()) {
      errors.lastName = 'Last Name cannot be empty';
    }
    if (!data.username.trim()) {
      errors.username = 'User Name cannot be empty';
    }
    if (!data.dateOfBirth.trim()) {
      errors.dateOfBirth = 'Date of birth cannot be empty';
    }
    if (!data.PhoneNumber.trim()) {
      errors.PhoneNumber = 'PhoneNumber cannot be empty';
    }
    if (!data.email.trim()) {
      errors.email = 'Email cannot be empty';
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = 'Looks like this is not an email';
    }

    if (!data.password.trim()) {
      errors.password = 'Password cannot be empty';
    } else if (data.password.length < 8) {
      errors.password = 'Password must be at least 6 characters long';
    }

    if (data.password !== data.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }
    if (!data.gender) {
      errors.gender = 'Gender cannot be empty';
    }

    if (data.interests.length === 0) {
      errors.interests = 'Select at least one interest';
    }

    if (!data.country) {
      errors.country = 'Country cannot be empty';
    }

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

        <div className="form-group ">
          <label>First Name</label>
          <input
            type="text"
            placeholder={errors.firstName ? "" : "First Name"}
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none"
          />
          {errors.firstName && <span className="text-red-500 text-sm mt-1">{errors.firstName}</span>}

        </div>
        <div className="form-group ">
          <label>Last Name</label>
          <input
            type="text"
            placeholder={errors.lastName ? "" : "Last Name"}

            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none"
          />
          {errors.lastName && <span className="text-red-500 text-sm mt-1">{errors.lastName}</span>}

        </div>
        <div className="form-group ">
          <label>User name</label>
          <input
            type="text"
            placeholder={errors.username ? "" : "User name"}

            name="username"
            value={formData.username}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none"
          />
          {errors.username && <span className="text-red-500 text-sm mt-1">{errors.username}</span>}

        </div>

        <div className="form-group ">
          <label>Date Of Birth</label>
          <input
            type="date"
            placeholder={errors.dateOfBirth ? "" : "Date Of Birth"}

            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none"
          />
          {errors.dateOfBirth && <span className="text-red-500 text-sm mt-1">{errors.dateOfBirth}</span>}

        </div>
        <div className="form-group ">
          <label>Phone Number</label>
          <input
            type="test"
            placeholder={errors.PhoneNumber ? "" : "PhoneNumber"}

            name="PhoneNumber"
            value={formData.PhoneNumber}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none"
          />
          {errors.PhoneNumber && <span className="text-red-500 text-sm mt-1">{errors.PhoneNumber}</span>}

        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none"
          />
          {errors.email && <span className="text-red-500 text-sm mt-1">{errors.email}</span>}
        </div>


        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none"
          />
          {errors.password && <span className="text-red-500 text-sm mt-1">{errors.password}</span>}
        </div>
        <div className="form-group">
          <label>Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none"
          />
          {errors.confirmPassword && <span className="text-red-500 text-sm mt-1">{errors.confirmPassword}</span>}
        </div>
        {/* Radio buttons for gender */}
        <div className="form-group">
          <label>Gender</label>
          <div className="flex items-center mt-2">
            <label className="mr-4">
              <input
                type="radio"
                name="gender"
                value="male"
                checked={formData.gender === 'male'}
                onChange={handleChange}
              />
              <span className="ml-2">Male</span>
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="female"
                checked={formData.gender === 'female'}
                onChange={handleChange}
              />
              <span className="ml-2">Female</span>
            </label>
          </div>
          {errors.gender && <span className="text-red-500 text-sm mt-1">{errors.gender}</span>}
        </div>

        {/* Checkboxes for interests */}
        <div className="form-group">
          <label>Interests</label>
          <div className="mt-2">
            <label className="mr-4">
              <input
                type="checkbox"
                name="interests"
                value="sports"
                checked={formData.interests.includes('sports')}
                onChange={handleChange}
              />
              <span className="ml-2">Sports</span>
            </label>
            <label className="mr-4">
              <input
                type="checkbox"
                name="interests"
                value="music"
                checked={formData.interests.includes('music')}
                onChange={handleChange}
              />
              <span className="ml-2">Music</span>
            </label>
            {/* Add more checkboxes as needed */}
          </div>
          {errors.interests && <span className="text-red-500 text-sm mt-1">{errors.interests}</span>}
        </div>

        {/* Select dropdown for country */}
        <div className="form-group">
          <label>Country</label>
          <select
            name="country"
            value={formData.country}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none"
          >
            <option value="">Select a country</option>
            <option value="usa">USA</option>
            <option value="canada">Canada</option>
            <option value="uk">UK</option>
            {/* Add more countries as needed */}
          </select>
          {errors.country && <span className="text-red-500 text-sm mt-1">{errors.country}</span>}
        </div>

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
        <p className="mt-4 text-sm text-center">
          Already have an account?{' '}
          <Link href="/Component/LoginForm" className="text-blue-500 underline">
            Login
          </Link>
        </p>
      </form>
    </div>
    </Layout>
    </div>

  );
};

export default SignUp;
