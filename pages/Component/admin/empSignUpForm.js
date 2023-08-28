import React, { useState } from 'react';
import axios from 'axios';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Link from 'next/link';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import Layout from '../../Layout/layout';
import AdminNavbar from '../../Layout/AdminNavbar';


// const Title = dynamic(() => import('../Layout/title'), {
//   ssr: false,
// });

const SignUpForm = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const [error, setError] = useState('');

  const formik = useFormik({
    initialValues: {
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
      userType: '', // New field for user type
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .trim()
        .matches(/^[A-Za-z\s]+$/, 'First name can only contain letters and spaces')
        .required('First name is required'),
      lastName: Yup.string()
        .trim()
        .matches(/^[A-Za-z\s]+$/, 'Last name can only contain letters and spaces')
        .required('Last name is required'),
      username: Yup.string()
        .required('Username is required')
        .matches(/[0-9]/, 'Username must contain at least one number'),
      dateOfBirth: Yup.date()
        .required('Date of birth is required')
        .test('is-adult', 'You must be at least 18 years old', (value) => {
          // Date of birth validation logic
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
      userType: Yup.string().required('User type is required'), // Validation for user type
    }),
    onSubmit: async (values) => {
      setError('');
      setLoading(true);

      try {
        const formData = new FormData();
        Object.keys(values).forEach((key) => {
          formData.append(key, values[key]);
        });

        const userType = values.userType; 

        let apiUrl = '';
        if (userType === 'manager') {
          apiUrl = 'http://localhost:3000/manager/registration';
        } else if (userType === 'supplier') {
          apiUrl = 'http://localhost:3000/supplier/registration';
        } else if (userType === 'delivery') {
          apiUrl = 'http://localhost:3000/delivery/registration';
        }

        const response = await axios.post(apiUrl, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        console.log('Registration successful', response.data);
        alert('Thanks for signing up! You will receive an email shortly.');
        setLoading(false);
        router.push('/Component/LoginForm'); // Redirect to login page after successful sign-up
    }catch (error) {
        console.error(error);

        if (error.response) {
          console.error('Server Response Data:', error.response.data);

          if (error.response.status === 403) {
            if (error.response.data.email) {
              alert('Email is already registered. Please use a different email.');
              setError('Email is already registered. Please use a different email.');
            } else if (error.response.data.username) {
              alert('Username is already taken. Please choose a different username.');
              setError('Username is already taken. Please choose a different username.');
            } else {
              alert('Email or username is already registered. Please use a different email or username.');
              setError('Email or username is already registered. Please use a different email or username.');
            }
          } else if (error.response.status === 406) {
            alert('Username is already taken. Please choose a different username.');
            setError('Username is already taken. Please choose a different username.');
          } else if (error.response.status === 400) {
            alert('Email is already associated with an existing account.');
            setError('Email is already associated with an existing account.');
          } else {
            alert('An error occurred. Please try again later.');
            setError('An error occurred. Please try again later.');
          }
        } else {
          alert('An error occurred. Please try again later.');
          setError('An error occurred. Please try again later.');
        }

        setLoading(false);
      }
    },
  });

  return (
    <div className="">
      {/* <Title page="SignUp" /> */}
      <AdminNavbar />

        <div className="flex items-center justify-center min-h-screen bg-gray-100">
          <div className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md">
            <form onSubmit={formik.handleSubmit} encType="multipart/form-data">
              <h2 className="mb-4 text-2xl font-semibold text-center">Sign Up</h2>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">User Type:</label>
                <div className="mt-1 space-x-4">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="userType"
                      value="manager"
                      checked={formik.values.userType === 'manager'}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className="text-blue-500 border-gray-300 rounded focus:ring focus:ring-opacity-50"
                    />
                    <span className="ml-2">Manager</span>
                  </label>

                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="userType"
                      value="supplier"
                      checked={formik.values.userType === 'supplier'}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className="text-blue-500 border-gray-300 rounded focus:ring focus:ring-opacity-50"
                    />
                    <span className="ml-2">Supplier</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="userType"
                      value="deliveryman"
                      checked={formik.values.userType === 'deliveryman'}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className="text-blue-500 border-gray-300 rounded focus:ring focus:ring-opacity-50"
                    />
                    <span className="ml-2">Delivery Man</span>
                  </label>
                </div>
                {formik.touched.userType && formik.errors.userType && (
                  <div className="text-red-600 text-sm">{formik.errors.userType}</div>
                )}
              </div>

              {/* Other form fields */}
              {/* Replace with your other form fields */}
              {/* Example: */}
              <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">First Name:</label>
          <input
            type="text"
            {...formik.getFieldProps('firstName')}
            className="mt-1 block w-full py-2 px-3 border rounded-md focus:ring focus:ring-opacity-50"
          />
          {formik.touched.firstName && formik.errors.firstName && (
            <div className="text-red-600 text-sm">{formik.errors.firstName}</div>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Last Name:</label>
          <input
            type="text"
            {...formik.getFieldProps('lastName')}
            className="mt-1 block w-full py-2 px-3 border rounded-md focus:ring focus:ring-opacity-50"
          />
          {formik.touched.lastName && formik.errors.lastName && (
            <div className="text-red-600 text-sm">{formik.errors.lastName}</div>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Username:</label>
          <input
            type="text"
            {...formik.getFieldProps('username')}
            className="mt-1 block w-full py-2 px-3 border rounded-md focus:ring focus:ring-opacity-50"
          />
          {formik.touched.username && formik.errors.username && (
            <div className="text-red-600 text-sm">{formik.errors.username}</div>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Date of Birth:</label>
          <input
            type="date"
            {...formik.getFieldProps('dateOfBirth')}
            className="mt-1 block w-full py-2 px-3 border rounded-md focus:ring focus:ring-opacity-50"
          />
          {formik.touched.dateOfBirth && formik.errors.dateOfBirth && (
            <div className="text-red-600 text-sm">{formik.errors.dateOfBirth}</div>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Phone Number:</label>
          <input
            type="text"
            {...formik.getFieldProps('PhoneNumber')}
            className="mt-1 block w-full py-2 px-3 border rounded-md focus:ring focus:ring-opacity-50"
          />
          {formik.touched.PhoneNumber && formik.errors.PhoneNumber && (
            <div className="text-red-600 text-sm">{formik.errors.PhoneNumber}</div>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Email:</label>
          <input
            type="email"
            {...formik.getFieldProps('email')}
            className="mt-1 block w-full py-2 px-3 border rounded-md focus:ring focus:ring-opacity-50"
          />
          {formik.touched.email && formik.errors.email && (
            <div className="text-red-600 text-sm">{formik.errors.email}</div>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Password:</label>
          <input
            type="password"
            {...formik.getFieldProps('password')}
            className="mt-1 block w-full py-2 px-3 border rounded-md focus:ring focus:ring-opacity-50"
          />
          {formik.touched.password && formik.errors.password && (
            <div className="text-red-600 text-sm">{formik.errors.password}</div>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Confirm Password:</label>
          <input
            type="password"
            {...formik.getFieldProps('confirmPassword')}
            className="mt-1 block w-full py-2 px-3 border rounded-md focus:ring focus:ring-opacity-50"
          />
          {formik.touched.confirmPassword && formik.errors.confirmPassword && (
            <div className="text-red-600 text-sm">{formik.errors.confirmPassword}</div>
          )}
        </div>
        <div className="mb-4">
  <label className="block text-sm font-medium text-gray-700">Gender:</label>
  <div className="mt-1 space-x-4">
    <label className="inline-flex items-center">
      <input
        type="radio"
        name="gender"
        value="male"
        checked={formik.values.gender === 'male'}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        className="text-blue-500 border-gray-300 rounded focus:ring focus:ring-opacity-50"
      />
      <span className="ml-2">Male</span>
    </label>
    <label className="inline-flex items-center">
      <input
        type="radio"
        name="gender"
        value="female"
        checked={formik.values.gender === 'female'}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        className="text-blue-500 border-gray-300 rounded focus:ring focus:ring-opacity-50"
      />
      <span className="ml-2">Female</span>
    </label>
    <label className="inline-flex items-center">
      <input
        type="radio"
        name="gender"
        value="other"
        checked={formik.values.gender === 'other'}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        className="text-blue-500 border-gray-300 rounded focus:ring focus:ring-opacity-50"
      />
      <span className="ml-2">Other</span>
    </label>
  </div>
  {formik.touched.gender && formik.errors.gender && (
    <div className="text-red-600 text-sm">{formik.errors.gender}</div>
  )}
</div>


        <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Interests:</label>
        <div className="mt-1 space-y-1">
        <label className="inline-flex items-center">
      <input
        type="checkbox"
        value="travel"
        onChange={() => {
          const newInterests = formik.values.interests.includes('travel')
            ? formik.values.interests.filter((interest) => interest !== 'travel')
            : [...formik.values.interests, 'travel'];
          formik.setFieldValue('interests', newInterests);
        }}
        checked={formik.values.interests.includes('travel')}
        className="text-blue-500 border-gray-300 rounded focus:ring focus:ring-opacity-50"
      />
      <span className="ml-2">Travel</span>
    </label>
    <label className="inline-flex items-center">
      <input
        type="checkbox"
        value="sports"
        onChange={() => {
          const newInterests = formik.values.interests.includes('sports')
            ? formik.values.interests.filter((interest) => interest !== 'sports')
            : [...formik.values.interests, 'sports'];
          formik.setFieldValue('interests', newInterests);
        }}
        checked={formik.values.interests.includes('sports')}
        className="text-blue-500 border-gray-300 rounded focus:ring focus:ring-opacity-50"
      />
      <span className="ml-2">Sports</span>
    </label>
    <label className="inline-flex items-center">
      <input
        type="checkbox"
        value="music"
        onChange={() => {
          const newInterests = formik.values.interests.includes('music')
            ? formik.values.interests.filter((interest) => interest !== 'music')
            : [...formik.values.interests, 'music'];
          formik.setFieldValue('interests', newInterests);
        }}
        checked={formik.values.interests.includes('music')}
        className="text-blue-500 border-gray-300 rounded focus:ring focus:ring-opacity-50"
      />
      <span className="ml-2">Music</span>
    </label>
    {/* Add similar lines for other interests */}
  </div>
  {formik.touched.interests && formik.errors.interests && (
    <div className="text-red-600 text-sm">{formik.errors.interests}</div>
  )}
</div>


          <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Country:</label>
          <select
            {...formik.getFieldProps('country')}
            className="mt-1 block w-full py-2 px-3 border rounded-md focus:ring focus:ring-opacity-50"
          >
            <option value="" disabled>Select country</option>
            <option value="bd">Bangladesh</option>
            <option value="canada">Canada</option>
            <option value="uk">United Kingdom</option>
            {/* Add more options as needed */}
          </select>
          {formik.touched.country && formik.errors.country && (
            <div className="text-red-600 text-sm">{formik.errors.country}</div>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Profile Picture:</label>
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
              {/* ... (repeat for other form fields) */}

              {/* Rest of the form */}
              <button
                type="submit"
                className="w-full px-4 py-2 mt-4 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none"
                disabled={loading}
              >
                {loading ? 'Register Up...' : ' Register'}
              </button>
              {error && <p className="mt-2 text-red-600 text-sm">{error}</p>}

            </form>
          </div>
        </div>
    </div>
  );
};

export default SignUpForm;
