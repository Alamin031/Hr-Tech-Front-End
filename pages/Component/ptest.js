// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useAuth } from '../utils/authcontext';
// import CustomerNavbar from './customerNavbar';
// import Footer from '../Layout/Footer';

// const ProfilePage = () => {
//   const { user } = useAuth();

//   const [profileData, setProfileData] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchProfileData = async () => {
//       try {
//         if (user && user.email) {
//           console.log('Fetching profile data for:', user.email);
//           const response = await axios.get(`http://localhost:3000/customer/getuser/${user.email}`);
//           const profileData = response.data;
//           console.log('Profile data fetched:', profileData);
//           setProfileData(profileData);
//         }
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching profile data:', error);
//         setLoading(false);
//       }
//     };

//     fetchProfileData();
//   }, [user]);

//   return (
//     <>
//       <CustomerNavbar />
//       <div className="p-8 mt-96">
//         <h2 className="text-2xl font-bold mb-4">User Profile</h2>
//         <div>
//           {profileData ? (
//             <>
//               <p>First Name: {profileData.firstName}</p>
//               <p>Last Name: {profileData.lastName}</p>
//               {/* Render other profile fields here */}
//             </>
//           ) : (
//             <p>No profile data available.</p>
//           )}
//         </div>
//         {/* ... rest of your profile UI code */}
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default ProfilePage;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../utils/authcontext';
import CustomerNavbar from './customerNavbar';
import Footer from '../Layout/Footer';

const ProfilePage = () => {
  const { user } = useAuth();

  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        if (user && user.email) {
          console.log('Fetching profile data for:', user.email);
          const response = await axios.get(`http://localhost:3000/customer/getuser/${user.email}`);
          const profileData = response.data;
          console.log('Profile data fetched:', profileData);
          setProfileData(profileData);
        }
      } catch (error) {
        console.error('Error fetching profile data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfileData();
  }, [user]);

  return (
    <>
      <CustomerNavbar />
      <div className="p-8 mt-96">
        <h2 className="text-2xl font-bold mb-4">User Profile</h2>
        {loading ? (
          <p>Loading profile data...</p>
        ) : profileData ? (
          <>
            <p>First Name: {profileData.firstName}</p>
            <p>Last Name: {profileData.lastName}</p>
            {/* Render other profile fields here */}
          </>
        ) : (
          <p>No profile data available.</p>
        )}
        {/* ... rest of your profile UI code */}
      </div>
      <Footer />
    </>
  );
};

export default ProfilePage;

