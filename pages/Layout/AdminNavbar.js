// import React from 'react';
// import { useEffect, useState } from "react";
// import { GiEgyptianProfile } from 'react-icons/gi';
// import {MdDashboard, MdMan,MdOutlinePropaneTank } from 'react-icons/md'; 
// import { AiFillSetting, AiFillBell } from "react-icons/ai";
// import { useRouter } from 'next/router';
// import { useAuth } from '../utils/authcontext';
// import axios from "axios";



// const AdminNavbar = () => {
//   const [jsonData, setJsonData] = useState(null);
//   const router = useRouter();
//   const { user, logout, checkUser } = useAuth();

//   useEffect(() => {
    
//     console.log("CheckUser::::"+checkUser())
//     if (!checkUser()) {
//       router.push('/');
//     }
//     else {fetchData();}
//   }, []);
//     async function fetchData() {
//     try {
      
//       const response = await axios.get(`http://localhost:3000/admin/showprofile/${user.email}`);
//       const jsonData = response.data;
//       console.log(jsonData)
//       setJsonData(jsonData);
//     } catch (error) {
//       console.error(error);
//     }
//   }
//     const handleLogout = () => {
//     logout();
//     router.push('./LoginForm')
//   };
//   return (
//     <>
//     <div className="">
      
//       <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
//          {jsonData &&
        
//         <div className="px-3 py-3 lg:px-5 lg:pl-3">
//           <div className="flex items-center justify-between">
//             <div className="flex items-center justify-start">
//               <button
//                 data-drawer-target="logo-sidebar"
//                 data-drawer-toggle="logo-sidebar"
//                 aria-controls="logo-sidebar"
//                 type="button"
//                 className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
//               >
//                 <span className="sr-only">Open sidebar</span>
//                 <svg
//                   className="w-6 h-6"
//                   aria-hidden="true"
//                   fill="currentColor"
//                   viewBox="0 0 20 20"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   {/* ... SVG path for the sidebar icon ... */}
//                 </svg>
//               </button>
             
//             </div>
//             <div className="flex items-center">
//               <div className="flex items-center ml-3">
//                 <div>
//                   <button
//                     type="button"
//                     className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
//                     aria-expanded="false"
//                     data-dropdown-toggle="dropdown-user"
//                   >
//                     <span className="sr-only">Open user menu</span>
//                     <img
//                       className="w-8 h-8 rounded-full"
//                       src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
//                       alt="user photo"
//                     />
//                   </button>
//                 </div>
//                 <div className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600" id="dropdown-user">
//                   <div className="px-4 py-3" role="none">
//                     <p className="text-sm text-gray-900 dark:text-white" role="none">
//                       Neil Sims
//                     </p>
//                     <p className="text-sm font-medium text-gray-900 truncate dark:text-gray-300" role="none">
//                       neil.sims@flowbite.com
//                     </p>
//                   </div>
//                   <ul className="py-1" role="none">
//                     <li>
//                       <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Dashboard</a>
//                     </li>
//                     <li>
//                       <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Settings</a>
//                     </li>
//                     <li>
//                       <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Earnings</a>
//                     </li>
//                     <li> <button onClick={handleLogout}>Logout</button></li>

//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
// }
//       </nav>

//       <aside
//         id="logo-sidebar"
//         className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
//         aria-label="Sidebar"
//       >
//         <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
//           <ul className="space-y-2 font-medium">
//           <li>
//               <button onClick={() => router.push('./showReview')} className=" p-3 text-gray-800 rounded-md hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700 flex items-center" role="menuitem">
//                 <MdDashboard className="w-6 h-6 mr-2 text-gray-500" />
//                 <span>Dashboard</span>
//                 </button>
//             </li>

//             <li>
//             <button onClick={() => router.push('/Component/admin/showCustomer')} className=" flex p-3 text-gray-800 rounded-md hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700" role="menuitem">
//             <GiEgyptianProfile className="w-6 h-6 mr-2 text-gray-500" />
//             <span>Customer</span>
//               </button>
//             </li> 
//             <li>
//             <button onClick={() => router.push('#')} className=" flex p-3 text-gray-800 rounded-md hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700" role="menuitem">
//             <MdMan className="w-6 h-6 mr-2 text-gray-500" />
//             <span>Employee</span>
//                 </button>
//             </li> 
//             <li>
//             <button onClick={() => router.push('#')} className=" flex p-3 text-gray-800 rounded-md hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700" role="menuitem">
//             <MdOutlinePropaneTank className="w-6 h-6 mr-2 text-gray-500" />
//             <span>Product</span>
//                 </button>
//             </li>
//             <li>
//             <button onClick={() => router.push('#')} className=" flex p-3 text-gray-800 rounded-md hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700" role="menuitem">
//             <AiFillBell className="w-6 h-6 mr-2 text-gray-500" />
//             <span>Problem</span>
//                 </button>
//             </li> 
//             <li>
//             <button onClick={() => router.push('#')} className=" flex p-3 text-gray-800 rounded-md hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700" role="menuitem">
//             <AiFillSetting className="w-6 h-6 mr-2 text-gray-500" />
//             <span>Settings</span>
//                 </button>
//             </li>
//           </ul>
//         </div>
//       </aside>

//       <div className="p-4 sm:ml-64">
//         <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
//           <h1 className="text-2xl font-semibold text-gray-800 dark:text-white">Welcome to Flowbite Dashboard</h1>
//           <p className="mt-2 text-gray-600 dark:text-gray-300">
//             This is a placeholder content for your dashboard. Feel free to replace it with your actual content.
//           </p>
//         </div>
//       </div>
//       </div>
//     </>
//   );
// };

// export default AdminNavbar;


import React, { useState, useEffect } from 'react';
import { MdDashboard, MdMan,MdBorderAll, MdOutlinePropaneTank } from 'react-icons/md';
import { GiEgyptianProfile } from 'react-icons/gi';
import { AiFillBell, AiFillSetting } from 'react-icons/ai';
import axios from "axios";
import { useRouter } from 'next/router';
import { useAuth } from '../utils/authcontext';

const AdminNavbar = () => {
  const [jsonData, setJsonData] = useState(null);
  const router = useRouter();
  const { user, adminlogout, checkUser } = useAuth();

  // useEffect(() => {
  //   fetchData();
  // }, []);

    useEffect(() => {
    
    console.log("CheckUser::::"+checkUser())
    if (!checkUser()) {
      router.push('/');
    }
    else {fetchData();}
  }, []);

  async function fetchData() {
    try {
      const response = await axios.get(`http://localhost:3000/admin/showprofile/${user.email}`);
      const jsonData = response.data;
      setJsonData(jsonData);
    } catch (error) {
      console.error(error);
    }
  }

  const handleLogout = () => {
    adminlogout();
    router.push('./LoginForm');
  };

  return (
    <>
      {jsonData && (
        <div className="navbar bg-slate-200">
          <div className="flex-1">
            <button onClick={() => router.push('./UserDashbord')} className="btn btn-ghost normal-case text-xl">Hr Tech</button>
          </div>
          <div className="flex-none gap-2">
            <div className="form-control">
              <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
            </div>

            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle">
                {/* ... Shopping cart icon and indicator ... */}
              </label>
              {/* ... Shopping cart dropdown content ... */}
            </div>

            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src={'#' + jsonData.profilePic} alt="User Avatar" />
                </div>
              </label>
              <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-60">
                <li>
                  <a className="justify-between">
                    <span className="badge">Hello</span>
                    {jsonData.name} {jsonData.lastName}
                  </a>
                </li>
                <li>
                  <button onClick={() => router.push('./profile')} className="btn btn-ghost">
                    <GiEgyptianProfile className="w-6 h-6 mr-2 text-gray-500" />
                    Profile
                  </button>
                </li>
               <li> <button onClick={handleLogout}>Logout</button></li>

              </ul>
            </div>
          </div>
        </div>
      )}

      {/* Sidebar */}
      <aside
        id="logo-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            <li>
              <button onClick={() => router.push('./showReview')} className="p-3 text-gray-800 rounded-md hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700 flex items-center" role="menuitem">
                <MdDashboard className="w-6 h-6 mr-2 text-gray-500" />
                <span>Dashboard</span>
              </button>
            </li>
            <li>
              <button onClick={() => router.push('/Component/admin/showCustomer')} className="flex p-3 text-gray-800 rounded-md hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700" role="menuitem">
                <GiEgyptianProfile className="w-6 h-6 mr-2 text-gray-500" />
                <span>Customer</span>
              </button>
            </li>
            <li>
              <button onClick={() => router.push('/Component/admin/UOrderList')} className="flex p-3 text-gray-800 rounded-md hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700" role="menuitem">
                <MdBorderAll className="w-6 h-6 mr-2 text-gray-500" />
                <span>All Order</span>
              </button>
            </li>
            <li>
              <button onClick={() => router.push('/Component/admin/empSignUpForm')} className="flex p-3 text-gray-800 rounded-md hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700" role="menuitem">
                <MdMan className="w-6 h-6 mr-2 text-gray-500" />
                <span>Add Employee</span>
              </button>
            </li>
            <li>
              <button onClick={() => router.push('#')} className="flex p-3 text-gray-800 rounded-md hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700" role="menuitem">
                <MdMan className="w-6 h-6 mr-2 text-gray-500" />
                <span>Employee</span>
              </button>
            </li>
            <li>
              <button onClick={() => router.push('#')} className="flex p-3 text-gray-800 rounded-md hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700" role="menuitem">
                <MdOutlinePropaneTank className="w-6 h-6 mr-2 text-gray-500" />
                <span>Product</span>
              </button>
            </li>
            <li>
              <button onClick={() => router.push('#')} className="flex p-3 text-gray-800 rounded-md hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700" role="menuitem">
                <AiFillBell className="w-6 h-6 mr-2 text-gray-500" />
                <span>Problem</span>
              </button>
            </li>
            <li>
              <button onClick={() => router.push('#')} className="flex p-3 text-gray-800 rounded-md hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700" role="menuitem">
                <AiFillSetting className="w-6 h-6 mr-2 text-gray-500" />
                <span>Settings</span>
              </button>
            </li>
          </ul>
        </div>
      </aside>

      <div className="p-4 sm:ml-64">
        {/* <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
          <h1 className="text-2xl font-semibold text-gray-800 dark:text-white">Welcome to Flowbite Dashboard</h1>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            This is a placeholder content for your dashboard. Feel free to replace it with your actual content.
          </p>
        </div> */}
      </div>
    </>
  );
};

export default AdminNavbar;
