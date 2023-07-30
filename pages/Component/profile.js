// pages/profile.js
import Layout from '../Layout/layout';

import Link from 'next/link';

import React, { useState } from 'react';
import SideNavbar from './SideNavbar';

const initialProfileData = {
    name: 'Md Al Amin Chowdhury',
    email: 'mridoy031@gmail.com',
    address: 'Dhaka, City, Country',
    phoneNumber: '01788788256',
    gender: 'male', // Default value for gender
    interests: ['sports', 'reading '],
    country: 'BD', // Default value for country
    profilePicture: '', // Will store the URL of the profile picture
  };


const ProfilePage = () => {
  const [profileData, setProfileData] = useState(initialProfileData);

  const handleInputChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    
    if (type === 'checkbox') {
      const interests = checked
        ? [...profileData.interests, value]
        : profileData.interests.filter((interest) => interest !== value);

      setProfileData((prevData) => ({ ...prevData, interests }));
    } else if (type === 'file') {
      setProfileData((prevData) => ({ ...prevData, profilePicture: files[0] }));
    } else {
      setProfileData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  return (
    <div className="">
    <Layout>
    <SideNavbar/>
    {/* min-h-screen  */}
    <div className=" p-8 -mt-96">
      <div className="max-w-md mx-auto bg-white rounded p-8 shadow-md -mt-96 ">
        <h2 className="text-2xl font-bold mb-4">User Profile</h2>
        <div>
        <div className="mb-4">
            <label className="block text-lg font-semibold">Name:</label>
            <input
              type="text"
              name="name"
              value={profileData.name}
              onChange={handleInputChange}
              className="border border-gray-400 p-2 w-full rounded focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-lg font-semibold">Email:</label>
            <input
              type="email"
              name="email"
              value={profileData.email}
              onChange={handleInputChange}
              className="border border-gray-400 p-2 w-full rounded focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-lg font-semibold">Phone Number:</label>
            <input
              type="text"
              name="phoneNumber"
              value={profileData.phoneNumber}
              onChange={handleInputChange}
              className="border border-gray-400 p-2 w-full rounded focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-lg font-semibold">Gender:</label>
            <div className="flex space-x-4">
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={profileData.gender === 'male'}
                  onChange={handleInputChange}
                />
                Male
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={profileData.gender === 'female'}
                  onChange={handleInputChange}
                />
                Female
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="other"
                  checked={profileData.gender === 'other'}
                  onChange={handleInputChange}
                />
                Other
              </label>
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-lg font-semibold">Interests:</label>
            <div className="flex space-x-4">
              <label>
                <input
                  type="checkbox"
                  name="interests"
                  value="sports"
                  checked={profileData.interests.includes('sports')}
                  onChange={handleInputChange}
                />
                Sports
              </label>
              <label>
                <input
                  type="checkbox"
                  name="interests"
                  value="music"
                  checked={profileData.interests.includes('music')}
                  onChange={handleInputChange}
                />
                Music
              </label>
              <label>
                <input
                  type="checkbox"
                  name="interests"
                  value="reading"
                  checked={profileData.interests.includes('reading')}
                  onChange={handleInputChange}
                />
                Reading
              </label>
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-lg font-semibold">Country:</label>
            <select
              name="country"
              value={profileData.country}
              onChange={handleInputChange}
              className="border border-gray-400 p-2 w-full rounded focus:outline-none focus:border-blue-500"
            >
              <option value="Select Country" disabled>
                Select Country
              </option>
              <option value="USA">USA</option>
              <option value="BD">BD</option>
              <option value="Canada">Canada</option>
              {/* Add more countries as needed */}
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-lg font-semibold">Profile Picture:</label>
            <input
              type="file"
              name="profilePicture"
              onChange={handleInputChange}
              className="border border-gray-400 p-2 w-full rounded focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="flex justify-between mt-6">
         
          <Link href="/Component/UpdateProfile">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded focus:outline-none focus:ring focus:border-blue-300">
            Update Profile
          </button>
          </Link>
          <Link href="/Component/AddressForm">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded focus:outline-none focus:ring focus:border-blue-300">
            Add Address
          </button>
          </Link>
        </div>
        </div>
      </div>
    </div>
    </Layout>
    </div>

  );
};

export default ProfilePage;
