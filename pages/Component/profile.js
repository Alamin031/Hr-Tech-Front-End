import Layout from '../Layout/layout';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import SideNavbar from './SideNavbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import axios from 'axios';

const initialProfileData = {
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
  profilePic: null,
  };


  const ProfilePage = () => {
    const customerid = 20; // Replace this with the actual user ID (i can get it from the logged-in user or from URL parameters)
    const [profileData, setProfileData] = useState(initialProfileData);
    const [loading, setLoading] = useState(true);
    const [previewImage, setPreviewImage] = useState('');            // State to store the preview image URL
    const [isEditing, setIsEditing] = useState(false);
    const [updatedProfileData, setUpdatedProfileData] = useState(null);
    const [updateSuccess, setUpdateSuccess] = useState(false); // State variable to track update success
    const [updateFailure, setUpdateFailure] = useState(false); // State variable to track update failure
    const [errors, setErrors] = useState({}); // State variable to store form validation errors
    const [hasChanges, setHasChanges] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

  
    // Function to fetch profile data from the API
    useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/admin/CustomerById/${customerid}`);
        const profileData = response.data;
        console.log(profileData); // Check the data in the console
        setProfileData(profileData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching profile data:', error);
        return null;
      }
    };
    fetchProfileData();
  }, [customerid]);

  
    const handleInputChange = (e) => {
      const { name, value, type, checked, files } = e.target;
      setUpdatedProfileData((prevData) => ({ ...prevData, [name]: value }));

      if (!hasChanges && value !== profileData[name]) {
        setHasChanges(true);
      }
      if (type === 'checkbox') {
        const interests = checked
          ? [...profileData.interests, value]
          : profileData.interests.filter((interest) => interest !== value);
  
        setProfileData((prevData) => ({ ...prevData, interests }));
      } else if (type === 'file') {
        const file = e.target.files[0];
        setProfileData((prevData) => ({ ...prevData, profilePic: file }));
      } else {
        setProfileData((prevData) => ({ ...prevData, [name]: value }));
      }

      setErrors(validateForm({
        ...profileData,
        [name]: value,
      }));
    };

    const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    setProfileData((prevData) => ({ ...prevData, profilePic: file }));
    setPreviewImage(URL.createObjectURL(file));
  };
  const handleEdit = () => {
    setIsEditing(true);
    setUpdatedProfileData(profileData);           // Save the current profileData to updatedProfileData when entering edit mode
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setUpdatedProfileData(null);              // Clear the changes made during editing and reset the form to original data when canceling
  };
  const validateForm = (data) => {
    let errors = {};
  
    if (!data) {
      return errors;
    }
  
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
      errors.password = 'Password must be at least 8 characters long';
    }
  
    // if (!data.gender) {
    //   errors.gender = 'Gender cannot be empty';
    // }
  
    // if (!data.interests || data.interests.length === 0) {
    //   errors.interests = 'Select at least one interest';
    // }
  
    // if (!data.country) {
    //   errors.country = 'Country cannot be empty';
    // }
  
    // if (!data.profilePicture) {
    //   errors.profilePicture = 'Profile picture cannot be empty';
    // }
  
    return errors;
  };

  const handleUpdate = async () => {
    // Validate the form before updating the profile
    const formErrors = validateForm(updatedProfileData);
    setErrors(formErrors);
    // Check if there are any errors
    if (Object.keys(formErrors).length > 0 || !hasChanges) {
            alert('No changes were made.');

      return;
    }
    try {
      const response = await axios.put(`http://localhost:3000/admin/customer_update_profile_info/${customerid}`, updatedProfileData,{
        headers: {
          'Content-Type': 'application/json',
          },
          });
          if (response.data) {
            setIsEditing(false);                  // Exit edit mode
            setUpdateSuccess(true);
            alert('Profile updated successfully!');
      } else {
        // Update failed
        alert('Failed to update profile. Please try again later.');
        setUpdateFailure(true); 
      }
    } catch (error) {
      console.error('Error updating profile:', error);
      alert('Failed to update profile. Please try again later.');
      setUpdateFailure(true);

    }
  };
  // Effect to reset the updateFailure state after a short delay when updateSuccess is set to true
  useEffect(() => {
    if (updateSuccess) {
      const timer = setTimeout(() => {
        setUpdateFailure(false);
        setUpdateSuccess(false);
      }, 1000); // Set the delay (in milliseconds) according to my preference

      return () => clearTimeout(timer);
    }
  }, [updateSuccess]);


  if (loading) {
    return <p>Loading...</p>;
  }

  if (!profileData) {
    return <p>No profile data found.</p>;
  }

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
            <label className="block text-lg font-semibold">First Name:</label>
            <input
              type="text"
              name="firstName"
              value={isEditing ? updatedProfileData.firstName : profileData.firstName}
              readOnly={!isEditing}

              onChange={handleInputChange}
              className="border border-gray-400 p-2 w-full rounded focus:outline-none focus:border-blue-500"
            />
            {errors.firstName && <p className="text-red-500">{errors.firstName}</p>}

          </div>
          <div className="mb-4">
            <label className="block text-lg font-semibold">Last Name:</label>
            <input
              type="text"
              name="lastName"
              value={isEditing ? updatedProfileData.lastName : profileData.lastName}
              readOnly={!isEditing}
              onChange={handleInputChange}
              className="border border-gray-400 p-2 w-full rounded focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-lg font-semibold">User name:</label>
            <input
              type="text"
              name="username"
              value={isEditing ? updatedProfileData.username : profileData.username}
              readOnly={!isEditing}
              onChange={handleInputChange}
              className="border border-gray-400 p-2 w-full rounded focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-lg font-semibold">dateOfBirth:</label>
            <input
              type="text"
              name="dateOfBirth"
              value={isEditing ? updatedProfileData.dateOfBirth : profileData.dateOfBirth}
              readOnly={!isEditing}
              onChange={handleInputChange}
              className="border border-gray-400 p-2 w-full rounded focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-lg font-semibold">Phone Number:</label>
            <input
              type="text"
              name="PhoneNumber"
              value={isEditing ? updatedProfileData.PhoneNumber : profileData.PhoneNumber}
              readOnly={!isEditing}
              onChange={handleInputChange}
              className="border border-gray-400 p-2 w-full rounded focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-lg font-semibold">Email:</label>
            <input
              type="email"
              name="email"
              value={isEditing ? updatedProfileData.email : profileData.email}
              readOnly={!isEditing}
              onChange={handleInputChange}
              className="border border-gray-400 p-2 w-full rounded focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
              <label className="block text-lg font-semibold">Password:</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={isEditing ? updatedProfileData.password : profileData.password}
                  readOnly={!isEditing}
                  onChange={handleInputChange}
                  className="border border-gray-400 p-2 w-full rounded focus:outline-none focus:border-blue-500"
                />
                {/* Password toggle icon */}
                <div
                  className="absolute top-1/2 right-2 transform -translate-y-1/2 cursor-pointer"
                  onClick={handleTogglePassword}
                >
                  {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
                </div>
              </div>
            </div>

          {/* <div className="mb-4">
              <label className="block text-lg font-semibold">Profile Picture:</label>
              <input
                type="test"
                name="profilePic"
                onChange={handleInputChange}
                className="border border-gray-400 p-2 w-full rounded focus:outline-none focus:border-blue-500"
              />
            </div> */}
          <div className="mb-4">
                <label className="block text-lg font-semibold">Profile Picture:</label>
                {previewImage && <img src={previewImage} alt="Profile Picture" className="mb-4" />}
                <input
                  type="file"
                  name="profilePic"
                  id="profilePic"
                  onChange={handleProfilePicChange}
                  className="border border-gray-400 p-2 w-full rounded focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="flex justify-between mt-6">
                {isEditing ? (
                  <>
                    <button
                      onClick={handleUpdate}
                      className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded focus:outline-none focus:ring focus:border-blue-300"
                    >
                      Update
                    </button>
                    <button
                      onClick={handleCancelEdit}
                      className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded focus:outline-none focus:ring focus:border-gray-300"
                    >
                      Cancel
                    </button>
                  </>
                ) : (
                  <button
                    onClick={handleEdit}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded focus:outline-none focus:ring focus:border-blue-300"
                  >
                    Edit
                  </button>
                )}
                <Link href="/Component/AddressForm">
                  <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded focus:outline-none focus:ring focus:border-blue-300">
                    Add Address
                  </button>
                </Link>
              </div>
            </div>
            {updateSuccess && (
        <div className="bg-green-200 text-green-800 p-3 mt-4 rounded">
          Profile Updated Successfully!
        </div>
      )}
      {updateFailure && (
        <div className="bg-red-200 text-red-800 p-3 mt-4 rounded">
          Failed to Update Profile!
        </div>
      )}
          </div>
        </div>
      </Layout>
    </div>
  );
};


export default ProfilePage;





