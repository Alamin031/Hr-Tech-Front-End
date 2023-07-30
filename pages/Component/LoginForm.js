// components/LoginForm.js
import React, { useState } from 'react';
import Link from 'next/link';
import Layout from '../Layout/layout';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform login logic here with the email and password states
    console.log('Login form submitted');
  };

  return (
    <div className="">
      <Layout>
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form className="p-8 bg-white shadow-md rounded-md" onSubmit={handleSubmit}>
        <h2 className="mb-4 text-2xl font-semibold text-center">Login</h2>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2 text-sm font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-3 py-2 border rounded-md focus:outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block mb-2 text-sm font-medium">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full px-3 py-2 border rounded-md focus:outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 mt-4 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none"
        >
          Login
        </button>
        <p className="mt-4 text-sm text-center">
        Don't have an account?{' '}
        <Link href="/Component/SignUp" className="text-blue-500 underline">Sign Up
        </Link>
      </p>


      <p className="mt-4 text-sm text-center">
        go Dashboard{' '}
        <Link href="/Component/UserDashbord" className="text-blue-500 underline">Dashboard
        </Link>
      </p>


      </form>
      
    </div>
    </Layout>
    </div>
  );
};

export default LoginForm;
