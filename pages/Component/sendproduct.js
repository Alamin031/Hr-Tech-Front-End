import React, { useState } from 'react';
import Link from 'next/link';
import Header from '../Layout/header';
import Layout from '../Layout/layout';

const SendProductPage = () => {
  const [formData, setFormData] = useState({
    productname: '',
    Address: '',
    Problem: '',
    Date: '',
    ProblemPicture: null,
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
    } else if (type === 'file') {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: files[0],
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





  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // Form submission logic here (e.g., API call)
      console.log('Form submitted successfully:', formData);
    }
  };

  const validateForm = (data) => {
    let errors = {};

    if (!data.productname.trim()) {
      errors.productname = 'Product Name cannot be empty';
    }

    if (!data.Address.trim()) {
      errors.Address = 'Address cannot be empty';
    } 

    if (!data.Problem.trim()) {
      errors.Problem = 'Problem cannot be empty';
    } 
    if (!data.Date.trim()) {
        errors.Date = 'Date cannot be empty';
      } 

    if (!data.ProblemPicture) {
      errors.ProblemPicture = 'Profile picture cannot be empty';
    }

    return errors;
  };

  

  return (
    <div className="">
                <Layout>


    <div className="flex items-center justify-center min-h-screen bg-gray-100">

      <form onSubmit={handleSubmit} className='bg-white shadow-md rounded-lg px-8 pt-14 pb-8 mb-4 mt-4'>
      <h2 className="mb-4 text-2xl font-semibold text-center">Send Product Up</h2>

        <div className="form-group ">
          <label>Product Name</label>
          <input
            type="text"
            placeholder={errors.productname ? "" : "Product Name"}

            name="productname"
            value={formData.productname}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none"
          />
          {errors.productname && <span className="text-red-500 text-sm mt-1">{errors.productname}</span>}

        </div>


        <div className="form-group">
          <label>Address</label>
          <input
            type="Address"
            name="Address"
            value={formData.Address}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none"
          />
          {errors.Address && <span className="text-red-500 text-sm mt-1">{errors.Address}</span>}
        </div>


        <div className="form-group">
          <label>Problem </label>
          <input
            type="Problem"
            name="Problem"
            value={formData.Problem}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none"
          />
          {errors.Problem && <span className="text-red-500 text-sm mt-1">{errors.Problem}</span>}
        </div>
        <div className="form-group">
          <label>Problem Date</label>
          <input
            type="Date"
            name="Date"
            value={formData.Date}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none"
          />
          {errors.Date && <span className="text-red-500 text-sm mt-1">{errors.Date}</span>}
        </div>

        {/* File upload input for profile picture */}
        <div className="form-group">
          <label>Problem Picture</label>
          <input
            type="file"
            name="ProblemPicture"
            onChange={handleChange}
            className="w-full py-2 mt-2 focus:outline-none"
          />
          {errors.ProblemPicture && (
            <span className="text-red-500 text-sm mt-1">{errors.ProblemPicture}</span>
          )}
        </div>

        <button
          type="submit"
          className="w-full px-4 py-2 mt-4 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none"
        >
          submission
        </button>
      </form>
    </div>
    </Layout>
    </div>

  );
};

export default SendProductPage;
