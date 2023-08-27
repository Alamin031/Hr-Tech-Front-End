import React, { useState } from 'react';
import axios from 'axios';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/router';
import CustomerNavbar from './customerNavbar';
import Footer from '../Layout/Footer';

const SindForm = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const [error, setError] = useState('');

  const formik = useFormik({
    initialValues: {
      Product_Name: '',
      Problem: '',
      Date: '',
      Address: '',
      profilePicture: null,
      customer: 57, // Set the customer ID to 57
    },
    validationSchema: Yup.object({
      Product_Name: Yup.string()
        .trim()
        .matches(/^[A-Za-z\s]+$/, 'Product Name can only contain letters and spaces')
        .required('Product Name is required'),
      Problem: Yup.string()
        .trim()
        .matches(/^[A-Za-z\s]+$/, 'Problem can only contain letters and spaces')
        .required('Problem is required'),
      Date: Yup.date().required('Problem Date is required'),
      Address: Yup.string().required('Address is required'),
      profilePicture: Yup.mixed().test(
        'fileType',
        'Unsupported file type',
        (value) => value && ['image/jpeg', 'image/png'].includes(value.type)
      ),
    }),
    onSubmit: async (values) => {
      setError('');
      setLoading(true);

      try {
        const formData = new FormData();
        Object.keys(values).forEach((key) => {
          formData.append(key, values[key]);
        });

        const response = await axios.post(
          'http://localhost:3000/customer/add_assign_product',
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          }
        );

        console.log('Product Send successful', response.data);
        alert('Thanks for sending your product! You will receive an email shortly.');
        setLoading(false);
        router.push('/Component/UserDashbord');
      } catch (error) {
        console.error(error);

        if (error.response) {
          console.error('Server Response Data:', error.response.data);
        }
        setLoading(false);
      }
    },
  });
  return (
    <div className="">
      <CustomerNavbar/>
    <div className="flex items-center justify-center min-h-screen bg-gray-100">

    <div className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md">
      <form onSubmit={formik.handleSubmit} encType="multipart/form-data">
      <h2 className="mb-4 text-2xl font-semibold text-center">Send Product</h2>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Your Product_Name:</label>
          <input
            type="text"
            {...formik.getFieldProps('Product_Name')}
            className="mt-1 block w-full py-2 px-3 border rounded-md focus:ring focus:ring-opacity-50"
          />
          {formik.touched.Product_Name && formik.errors.Product_Name && (
            <div className="text-red-600 text-sm">{formik.errors.Product_Name}</div>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Problem:</label>
          <input
            type="text"
            {...formik.getFieldProps('Problem')}
            className="mt-1 block w-full py-2 px-3 border rounded-md focus:ring focus:ring-opacity-50"
          />
          {formik.touched.Problem && formik.errors.Problem && (
            <div className="text-red-600 text-sm">{formik.errors.Problem}</div>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Problem Date:</label>
          <input
            type="date"
            {...formik.getFieldProps('Date')}
            className="mt-1 block w-full py-2 px-3 border rounded-md focus:ring focus:ring-opacity-50"
          />
          {formik.touched.Date && formik.errors.Date && (
            <div className="text-red-600 text-sm">{formik.errors.Date}</div>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Your Address:</label>
          <input
            type="text"
            {...formik.getFieldProps('Address')}
            className="mt-1 block w-full py-2 px-3 border rounded-md focus:ring focus:ring-opacity-50"
          />
          {formik.touched.Address && formik.errors.Address && (
            <div className="text-red-600 text-sm">{formik.errors.Address}</div>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Product Photo:</label>
          <input
            type="file"
            accept="image/jpeg,image/png"
            onChange={(event) => formik.setFieldValue('profilePicture', event.currentTarget.files[0])}
            className="mt-1 block w-full py-2 px-3 border rounded-md focus:ring focus:ring-opacity-50"
          />
          {formik.touched.profilePicture && formik.errors.profilePicture && (
            <div className="text-red-600 text-sm">{formik.errors.profilePicture}</div>
          )}
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 mt-4 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none"
          disabled={loading}
        >
          {loading ? 'Sending Up...' : 'Send'}
        </button>
        {error && <p className="mt-2 text-red-600 text-sm">{error}</p>}
       
      </form>
    </div>
    
    </div>
    <Footer/>
    </div>

  );
};

export default SindForm;
