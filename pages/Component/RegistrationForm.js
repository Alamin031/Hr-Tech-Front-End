// components/RegistrationForm.js
import React, { useState } from 'react';
import Link from 'next/link';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform form validation
    const validationErrors = {};
    if (!formData.firstName) {
      validationErrors.firstName = 'First name is required';
    }
    if (!formData.lastName) {
      validationErrors.lastName = 'Last name is required';
    }
    if (!formData.email) {
      validationErrors.email = 'Email is required';
    }
    if (!formData.password) {
      validationErrors.password = 'Password is required';
    }
    if (formData.password !== formData.confirmPassword) {
      validationErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(validationErrors);

    // If there are no errors, log the form data
    if (Object.keys(validationErrors).length === 0) {
      console.log('Form submitted:', formData);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form className="p-8 bg-white shadow-md rounded-md" onSubmit={handleSubmit}>
        <h2 className="mb-4 text-2xl font-semibold text-center">Registration</h2>
        <div className="mb-4">
          <label htmlFor="firstName" className="block mb-2 text-sm font-medium">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            className={`w-full px-3 py-2 border rounded-md focus:outline-none ${
              errors.firstName ? 'border-red-500' : 'border-gray-300'
            }`}
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
        </div>
        {/* Add similar input fields for lastName, email, password, and confirmPassword */}
        {/* ... */}
        <button
          type="submit"
          className="w-full px-4 py-2 mt-4 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none"
        >
          Register
        </button>
      </form>
      <p className="mt-4 text-sm text-center">
        Already have an account?{' '}
        <Link href="/login" className="text-blue-500 underline">Log In
        </Link>
      </p>
    </div>
  );
};

export default RegistrationForm;
