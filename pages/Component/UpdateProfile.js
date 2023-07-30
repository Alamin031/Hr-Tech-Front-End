import React, { useState } from 'react';

const UpdateProfile = () => {
  const [profileData, setProfileData] = useState({
    name: 'Md Al Amin Chowdhury',
    email: 'mridoy031@gmail.com',
    address: 'Dhaka, City, Country',
    phoneNumber: '01788788256',
    gender: 'male', // Default value for gender
    interests: ['sports', 'reading '],
    country: 'BD', // Default value for country
    profilePicture: '', // Will store the URL of the profile picture
  });

  const interestsOptions = ['Reading', 'Cooking', 'Traveling', 'Sports'];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleInterestsChange = (e) => {
    const { name, value, checked } = e.target;
    let updatedInterests;
    if (checked) {
      updatedInterests = [...profileData.interests, value];
    } else {
      updatedInterests = profileData.interests.filter((interest) => interest !== value);
    }
    setProfileData((prevData) => ({ ...prevData, [name]: updatedInterests }));
  };

  const handleUpdateProfile = async () => {
    try {
      // Send the updated profile data to the backend API
      const response = await fetch('/api/update-profile', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(profileData),
      });

      if (response.ok) {
        console.log('Profile Updated Successfully');
      } else {
        console.error('Failed to update profile');
      }
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <div className="max-w-md mx-auto bg-white rounded p-8 shadow-md">
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
            <label className="block text-lg font-semibold">Address:</label>
            <input
              type="text"
              name="address"
              value={profileData.address}
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
            <div className="flex items-center">
              <label className="mr-2">
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
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-lg font-semibold">Interests:</label>
            <div className="flex flex-wrap">
              {interestsOptions.map((interest) => (
                <label key={interest} className="mr-4">
                  <input
                    type="checkbox"
                    name="interests"
                    value={interest}
                    checked={profileData.interests.includes(interest)}
                    onChange={handleInterestsChange}
                  />
                  {interest}
                </label>
              ))}
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
              <option value="BD">BD</option>
              <option value="Canada">Canada</option>
              <option value="UK">UK</option>
              {/* Add more country options as needed */}
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
        </div>
        <div className="flex justify-between mt-6">
          <button
            onClick={handleUpdateProfile}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded focus:outline-none focus:ring focus:border-blue-300"
          >
            Update Profile
          </button>
        
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
