// import { useState, useEffect } from 'react';
// import Link from 'next/link';
// import {
//   MdOutlineSettings,
//   MdOutlineLogout,
//   MdReviews,
//   MdFeedback,
//   MdDashboard,
//   MdPendingActions,
// } from 'react-icons/md';
// import { CgProfile } from 'react-icons/cg';
// import { FaRegComments, FaApple } from 'react-icons/fa';
// import { BiMessageSquareDots } from 'react-icons/bi';

// const SideNavbar = () => {
//   const [showSidebar, setShowSidebar] = useState(false);
//   const [showDropdown, setShowDropdown] = useState(false);

//   useEffect(() => {
//     if (window.innerWidth >= 1024) {
//       // Auto open sidebar in desktop mode
//       setShowSidebar(true);
//     }
//   }, []);

//   const toggleSidebar = () => {
//     setShowSidebar(!showSidebar);
//   };

//   const toggleDropdown = () => {
//     setShowDropdown((prevState) => !prevState);
//   };

//   return (
//     <div className="lg:flex ">
//       {/* Menu Icon for Mobile */}
//       <div className="lg:hidden bg-slate-200">
//         <button onClick={toggleSidebar} className="p-4">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-6 w-6"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
//           </svg>
//         </button>
//       </div>

//       {/* Sidebar */}
//       <nav
//         className={`lg:p-6 w-1/2 h-screen bg-slate-200 z-20 lg:w-60 transition-transform duration-200 transform ${
//           showSidebar ? 'translate-x-0' : '-translate-x-full'
//         }`}
//       >
//         <ul className="flex flex-col space-y-2">
//           <li className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg">
//             <Link href="/Component/UserDashboard" className="flex items-center hover:text-gray-300">
//               <MdDashboard className="mr-2 text-2xl text-gray-600 group-hover:text-white font-semibold" />
//               <h3 className="text-base text-gray-800 group-hover:text-white font-semibold">Dashboard</h3>
//             </Link>
//           </li>
//           <li className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg">
//             <Link href="/Component/profile" className="flex items-center hover:text-gray-300">
//               <CgProfile className="mr-2 text-2xl text-gray-600 group-hover:text-white" />
//               <h3 className="text-base text-gray-800 group-hover:text-white font-semibold">Profile</h3>
//             </Link>
//           </li>
//           <li className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg">
//             <Link href="/" className="flex items-center hover:text-gray-300">
//               <FaRegComments className="mr-2 text-2xl text-gray-600 group-hover:text-white" />
//               <h3 className="text-base text-gray-800 group-hover:text-white font-semibold">Comments</h3>
//             </Link>
//           </li>
//           <li className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg">
//             <Link href="/" className="flex items-center hover:text-gray-300">
//               <BiMessageSquareDots className="mr-2 text-2xl text-gray-600 group-hover:text-white" />
//               <h3 className="text-base text-gray-800 group-hover:text-white font-semibold">Messages</h3>
//             </Link>
//           </li>
//           <li className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg">
//             <Link href="/" className="flex items-center hover:text-gray-300">
//               <FaApple className="mr-2 text-2xl text-gray-600 group-hover:text-white" />
//               <h3 className="text-base text-gray-800 group-hover:text-white font-semibold">Send Product</h3>
//             </Link>
//           </li>
//           <li className="mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg">
//             <a href="#" onClick={toggleDropdown} className="flex items-center justify-between hover:text-gray-300">
//               <span className="flex items-center">
//                 <MdReviews className="mr-2 text-2xl text-gray-600 group-hover:text-white font-semibold" />
//                 <h3 className="text-base text-gray-800 group-hover:text-white font-semibold">Order</h3>
//               </span>
//               <span>{showDropdown ? '▲' : '▼'}</span>
//             </a>
//             {showDropdown && (
//               <ul className="pl-4">
//                 <li className="hover:bg-sky-900">
//                   <Link href="/Component/showOrder" className="flex items-center hover:text-gray-300">
//                     <MdPendingActions className="mr-2 text-2xl text-gray-600 group-hover:text-white font-semibold" />
//                     <h3 className="text-base text-gray-800 group-hover:text-white font-semibold">Show Order</h3>
//                   </Link>
//                 </li>
//                 <li className="hover:bg-sky-900">
//                   <Link href="/Component/showReview" className="flex items-center hover:text-gray-300">
//                     <MdFeedback className="mr-2 text-2xl text-gray-600 group-hover:text-white font-semibold" />
//                     <h3 className="text-base text-gray-800 group-hover:text-white font-semibold">Show Review</h3>
//                   </Link>
//                 </li>
//               </ul>
//             )}
//           </li>
//           <li className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg">
//             <Link href="/" className="flex items-center hover:text-gray-300">
//               <MdOutlineSettings className="mr-2 text-2xl text-gray-600 group-hover:text-white font-semibold" />
//               <h3 className="text-base text-gray-800 group-hover:text-white font-semibold">Contact</h3>
//             </Link>
//           </li>
//           <div className="my-4">
//             <div className="flex mb-2 justify-start items-center gap-4 pl-5 border border-gray-200 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
//               <MdOutlineLogout className="text-2xl text-gray-600 group-hover:text-white" />
//               <h3 className="text-base text-gray-800 group-hover:text-white font-semibold">Logout</h3>
//             </div>
//           </div>
//         </ul>
//       </nav>
//     </div>
//   );
// };

// export default SideNavbar;

import React from 'react';
const SideNavbar = () => {
  return (
    <div className="navbar bg-slate-300">
      <div className="navbar-start">
        <div className="dropdown relative">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>          
            </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-10s0 rounded-box w-52">
            <li><a>Desktop</a></li>
            <li className="relative"> {/* Add relative position */}
              <a>Laptop</a>
              <ul className="p-2 submenu absolute left-full top-0 mt-2 bg-white rounded-box shadow-lg z-10"> {/* Apply submenu class */}
                <li className="relative">
                  <details>
                    <summary>Gaming Laptop</summary>
                    <ul className="p-2 submenu absolute left-full top-0 mt-2 bg-white rounded-box shadow-lg z-10"> {/* Apply submenu class */}
                      <li><a href="#">Acer</a></li>
                      <li><a href="#">MSI</a></li>
                      <li><a href="#">HP</a></li>
                      <li><a href="#">Lenovo</a></li>
                      <li><a href="#">GIGABYTE</a></li>
                      <li><a href="#">MSI</a></li>
                    </ul>
                  </details>
                </li>
                <li className="relative"> 
                  <details>
                    <summary>Premium Ultrabook</summary>
                    <ul className="p-2 submenu absolute left-full top-0 mt-2 bg-white rounded-box shadow-lg z-10"> {/* Apply submenu class */}
                      <li><a href="#">Samsung</a></li>
                      <li><a href="#">Microsoft</a></li>
                      <li><a href="#">Acer</a></li>
                      <li><a href="#">MSI</a></li>
                      <li><a href="#">HP</a></li>
                      <li><a href="#">Lenovo</a></li>
                      <li><a href="#">GIGABYTE</a></li>
                      <li><a href="#">MSI</a></li>
                      </ul>
                  </details>
                </li>
                <li className="relative"> 
                  <details>
                    <summary>Laptop Bag</summary>
                    <ul className="p-2 submenu absolute left-full top-0 mt-2 bg-white rounded-box shadow-lg z-10"> {/* Apply submenu class */}
                      <li><a href="#">Samsung</a></li>
                      <li><a href="#">Microsoft</a></li>
                      <li><a href="#">Acer</a></li>
                      <li><a href="#">MSI</a></li>
                      <li><a href="#">HP</a></li>
                      <li><a href="#">Lenovo</a></li>
                      <li><a href="#">GIGABYTE</a></li>
                      <li><a href="#">MSI</a></li>
                      </ul>
                  </details>
                </li>
                <li className="relative"> 
                  <details>
                    <summary>Laptop Accessories</summary>
                    <ul className="p-2 submenu absolute left-full top-0 mt-2 bg-white rounded-box shadow-lg z-10"> {/* Apply submenu class */}
                      <li><a href="#">Samsung</a></li>
                      <li><a href="#">Microsoft</a></li>
                      <li><a href="#">Acer</a></li>
                      <li><a href="#">MSI</a></li>
                      <li><a href="#">HP</a></li>
                      <li><a href="#">Lenovo</a></li>
                      <li><a href="#">GIGABYTE</a></li>
                      <li><a href="#">MSI</a></li>
                      </ul>
                  </details>
                </li>
              </ul>
            </li>
            <li><a>Component</a></li>
            <li><a>Monitor</a></li>
            <li><a>UPS</a></li>
            <li><a>Phone</a></li>
            <li><a>Tablet</a></li>
            <li><a>Camera</a></li>
            <li><a>Security</a></li>
            <li><a>Networking</a></li>
            <li><a>Software</a></li>          
            </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {/* Horizontal menu items */}
          <li><a href="#">Desktop</a></li>
          <li className="relative"> 
            <details>
              <summary>Laptop</summary>
              <ul className="p-2 submenu absolute left-full  bg-white rounded-box shadow-lg z-10"> {/* Apply submenu class */}
                <li className="relative"> 
                  <details>
                    <summary>Gaming Laptop</summary>
                    <ul className="p-2 submenu absolute left-full  bg-white rounded-box shadow-lg z-10"> {/* Apply submenu class */}
                      <li><a href="#">Acer</a></li>
                      <li><a href="#">MSI</a></li>
                      <li><a href="#">HP</a></li>
                      <li><a href="#">Lenovo</a></li>
                      <li><a href="#">GIGABYTE</a></li>
                      <li><a href="#">MSI</a></li>
                    </ul>
                  </details>
                </li>
                {/* ... Other submenu items */}
               <li className="relative"> 
                  <details>
                    <summary>Premium Ultrabook</summary>
                    <ul className="p-2 submenu absolute left-full  bg-white rounded-box shadow-lg z-10"> {/* Apply submenu class */}
                      <li><a href="#">Samsung</a></li>
                      <li><a href="#">Microsoft</a></li>
                      <li><a href="#">Acer</a></li>
                      <li><a href="#">MSI</a></li>
                      <li><a href="#">HP</a></li>
                      <li><a href="#">Lenovo</a></li>
                      <li><a href="#">GIGABYTE</a></li>
                      <li><a href="#">MSI</a></li>
                    </ul>
                  </details>
                </li>
                <li className="relative"> 
                  <details>
                    <summary>Laptop Bag</summary>
                    <ul className="p-2 submenu absolute left-full  bg-white rounded-box shadow-lg z-10"> {/* Apply submenu class */}
                      <li><a href="#">Samsung</a></li>
                      <li><a href="#">Microsoft</a></li>
                      <li><a href="#">Acer</a></li>
                      <li><a href="#">MSI</a></li>
                      <li><a href="#">HP</a></li>
                      <li><a href="#">Lenovo</a></li>
                      <li><a href="#">GIGABYTE</a></li>
                      <li><a href="#">MSI</a></li>
                    </ul>
                  </details>
                </li>
              <li className="relative"> 
                  <details>
                    <summary>Laptop Accessories</summary>
                    <ul className="p-2 submenu absolute left-full  bg-white rounded-box shadow-lg z-10"> {/* Apply submenu class */}
                      <li><a href="#">Samsung</a></li>
                      <li><a href="#">Microsoft</a></li>
                      <li><a href="#">Acer</a></li>
                      <li><a href="#">MSI</a></li>
                      <li><a href="#">HP</a></li>
                      <li><a href="#">Lenovo</a></li>
                      <li><a href="#">GIGABYTE</a></li>
                      <li><a href="#">MSI</a></li>
                    </ul>
                  </details>
                </li>

              </ul>
            </details>
          </li>
            <li><a>Component</a></li>
            <li><a>Monitor</a></li>
            <li><a>UPS</a></li>
            <li><a>Phone</a></li>
            <li><a>Tablet</a></li>
            <li><a>Camera</a></li>
            <li><a>Security</a></li>
            <li><a>Networking</a></li>
            <li><a>Software</a></li> 
          </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
  );
};

export default SideNavbar;








