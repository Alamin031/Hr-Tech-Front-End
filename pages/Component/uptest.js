import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as Yup from 'yup';
import { useFormik } from 'formik';

const UserProfile = () => {
    const customerid = 52; // Replace this with the actual user ID (i can get it from the logged-in user or from URL parameters)

  const [userProfile, setUserProfile] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/admin/CustomerById/${customerid}`);
        setUserProfile(response.data);
      } catch (error) {
        console.error('Error fetching user profile:', error);
      }
    };

    fetchUserProfile();
  }, []);

  const validationSchema = Yup.object({
    firstName: Yup.string()
      .matches(/^[A-Za-z ]+$/, 'First name can only contain letters')
      .required('First name is required'),
    lastName: Yup.string()
      .matches(/^[A-Za-z ]+$/, 'Last name can only contain letters')
      .required('Last name is required'),
    username: Yup.string()
    .required('Username is required')
    .matches(/[0-9]/, 'Username must contain at least one number'), 
    dateOfBirth: Yup.date()
    .required('Date of birth is required')
    .test('is-adult', 'You must be at least 18 years old', (value) => {
      if (!value) return false;

      const today = new Date();
      const birthDate = new Date(value);
      const age = today.getFullYear() - birthDate.getFullYear();

      if (age > 18 || (age === 18 && today.getMonth() >= birthDate.getMonth() && today.getDate() >= birthDate.getDate())) {
        return true;
      }
      return false;
    }),
    PhoneNumber: Yup.string()
    .required('Phone number is required')
    .matches(/^[0-9]{11}$/, 'Phone number must be exactly 11 digits'),      
    email: Yup.string().email('Invalid email address').required('Email is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm password is required'),
    gender: Yup.string().required('Gender is required'),
    interests: Yup.array().min(1, 'Select at least one interest'),
    country: Yup.string().required('Country is required'),
    profilePicture: Yup.mixed().test(
        'fileType',
        'Unsupported file type',
        (value) => value && ['image/jpeg', 'image/png'].includes(value.type)
      ),
    // Add other fields' validation rules here
  });



  const formik = useFormik({
    initialValues: {
        firstName: userProfile ? userProfile.firstName : '',
        lastName: userProfile ? userProfile.lastName : '',
        username: userProfile ? userProfile.username : '',
        dateOfBirth: userProfile ? userProfile.dateOfBirth : '',
        PhoneNumber: userProfile ? userProfile.PhoneNumber : '',
        email: userProfile ? userProfile.email : '',
        password: userProfile ? userProfile.password : '',
        confirmPassword: userProfile ? userProfile.confirmPassword : '',
        gender: userProfile ? userProfile.gender : '',
        interests: userProfile ? userProfile.interests : [],
        country: userProfile ? userProfile.country : '',
        profilePicture: null,
      // Initialize other fields' values
    },
    validationSchema,
    onSubmit: (values) => {
      // Handle form submission here
      console.log('Form submitted with values:', values);
      setIsEditing(false);
    },
  });

  const handleEditClick = () => {
    formik.setValues({
      firstName: userProfile.firstName,
      lastName: userProfile.lastName,
      // Set other field values here
    });
    setIsEditing(true);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
    formik.resetForm(); // Reset form values to the initial state
  };

  const handleAddAddressClick = () => {
    // Handle "Add Address" button click here
    console.log('Add Address clicked');
  };

  if (!userProfile) {
    return <div>Loading...</div>;
  }

  return (
    <div className="mx-auto max-w-md p-4 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-4">User Profile</h2>
      {isEditing ? (
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-4">
            <label htmlFor="firstName" className="block font-medium text-gray-700">
              First Name:
            </label>
            <input
              type="text"
              id="firstName"
              {...formik.getFieldProps('firstName')}
              className="mt-1 block w-full py-2 px-3 border rounded-md focus:ring focus:ring-opacity-50"
            />
            {formik.touched.firstName && formik.errors.firstName && (
              <div className="text-red-600 text-sm">{formik.errors.firstName}</div>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="lastName" className="block font-medium text-gray-700">
              Last Name:
            </label>
            <input
              type="text"
              id="lastName"
              {...formik.getFieldProps('lastName')}
              className="mt-1 block w-full py-2 px-3 border rounded-md focus:ring focus:ring-opacity-50"
            />
            {formik.touched.lastName && formik.errors.lastName && (
              <div className="text-red-600 text-sm">{formik.errors.lastName}</div>
            )}
          </div>


          <div className="mb-4">
                        <label htmlFor="username" className="block font-medium text-gray-700">
                            Username:
                        </label>
                        <input
                            type="text"
                            id="username"
                            {...formik.getFieldProps('username')}
                            className="mt-1 block w-full py-2 px-3 border rounded-md focus:ring focus:ring-opacity-50"
                        />
                        {formik.touched.username && formik.errors.username && (
                            <div className="text-red-600 text-sm">{formik.errors.username}</div>
                        )}
                    </div>

          <div className="mb-4">
            <label htmlFor="lastName" className="block font-medium text-gray-700">
            dateOfBirth:
            </label>
            <input
              type="date"
              id="dateOfBirth"
              {...formik.getFieldProps('dateOfBirth')}
              className="mt-1 block w-full py-2 px-3 border rounded-md focus:ring focus:ring-opacity-50"
            />
            {formik.touched.dateOfBirth && formik.errors.dateOfBirth && (
              <div className="text-red-600 text-sm">{formik.errors.dateOfBirth}</div>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="lastName" className="block font-medium text-gray-700">
              Last Name:
            </label>
            <input
              type="text"
              id="lastName"
              {...formik.getFieldProps('lastName')}
              className="mt-1 block w-full py-2 px-3 border rounded-md focus:ring focus:ring-opacity-50"
            />
            {formik.touched.lastName && formik.errors.lastName && (
              <div className="text-red-600 text-sm">{formik.errors.lastName}</div>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="lastName" className="block font-medium text-gray-700">
              Last Name:
            </label>
            <input
              type="text"
              id="lastName"
              {...formik.getFieldProps('lastName')}
              className="mt-1 block w-full py-2 px-3 border rounded-md focus:ring focus:ring-opacity-50"
            />
            {formik.touched.lastName && formik.errors.lastName && (
              <div className="text-red-600 text-sm">{formik.errors.lastName}</div>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="lastName" className="block font-medium text-gray-700">
              Last Name:
            </label>
            <input
              type="text"
              id="lastName"
              {...formik.getFieldProps('lastName')}
              className="mt-1 block w-full py-2 px-3 border rounded-md focus:ring focus:ring-opacity-50"
            />
            {formik.touched.lastName && formik.errors.lastName && (
              <div className="text-red-600 text-sm">{formik.errors.lastName}</div>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="lastName" className="block font-medium text-gray-700">
              Last Name:
            </label>
            <input
              type="text"
              id="lastName"
              {...formik.getFieldProps('lastName')}
              className="mt-1 block w-full py-2 px-3 border rounded-md focus:ring focus:ring-opacity-50"
            />
            {formik.touched.lastName && formik.errors.lastName && (
              <div className="text-red-600 text-sm">{formik.errors.lastName}</div>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="lastName" className="block font-medium text-gray-700">
              Last Name:
            </label>
            <input
              type="text"
              id="lastName"
              {...formik.getFieldProps('lastName')}
              className="mt-1 block w-full py-2 px-3 border rounded-md focus:ring focus:ring-opacity-50"
            />
            {formik.touched.lastName && formik.errors.lastName && (
              <div className="text-red-600 text-sm">{formik.errors.lastName}</div>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="lastName" className="block font-medium text-gray-700">
              Last Name:
            </label>
            <input
              type="text"
              id="lastName"
              {...formik.getFieldProps('lastName')}
              className="mt-1 block w-full py-2 px-3 border rounded-md focus:ring focus:ring-opacity-50"
            />
            {formik.touched.lastName && formik.errors.lastName && (
              <div className="text-red-600 text-sm">{formik.errors.lastName}</div>
            )}
          </div>



        <div className="mb-4">
          <span className="block text-sm font-medium text-gray-700">Profile Picture:</span>
          {userProfile.profilePicture ? (
            <img
              src={userProfile.profilePicture} // Assuming the API provides the image URL
              alt="Profile"
              className="mt-1 border rounded-md"
              style={{ maxWidth: '100px', maxHeight: '100px' }}
            />
          ) : (
            <span className="mt-1 block text-gray-800">No profile picture available</span>
          )}
        </div>
          {/* Add other fields' input elements here */}
          <div className="space-x-2">
            <button
              type="submit"
              className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none"
            >
              Update
            </button>
            <button
              type="button"
              onClick={handleCancelClick}
              className="px-4 py-2 text-white bg-gray-500 rounded-md hover:bg-gray-600 focus:outline-none"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleAddAddressClick}
              className="px-4 py-2 text-white bg-green-500 rounded-md hover:bg-green-600 focus:outline-none"
            >
              Add Address
            </button>
          </div>
        </form>
      ) : (
        <div>
          <p className="mb-2">
            <span className="font-medium">First Name:</span> {userProfile.firstName}
          </p>
          <p className="mb-4">
            <span className="font-medium">Last Name:</span> {userProfile.lastName}
          </p>
          {/* Display other fields */}
          <div className="space-x-2">
            <button
              type="button"
              onClick={handleEditClick}
              className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none"
            >
              Edit
            </button>
            <button
              type="button"
              onClick={handleAddAddressClick}
              className="px-4 py-2 text-white bg-green-500 rounded-md hover:bg-green-600 focus:outline-none"
            >
              Add Address
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserProfile;