// import React, { useState, useEffect } from 'react';

// const TNavbar = () => {
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   useEffect(() => {
//     if (isDarkMode) {
//       document.body.classList.add('dark');
//     } else {
//       document.body.classList.remove('dark');
//     }
//   }, [isDarkMode]);

//   const toggleDarkMode = () => {
//     setIsDarkMode(!isDarkMode);
//   };

//   return (
//     <div className={`navbar bg-${isDarkMode ? 'base-900' : 'base-100'} dark:bg-base-800`}>
//       <div className="flex-1">
//         <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
//       </div>
//       <div className="flex-none">
//         <div className="dropdown dropdown-end">
//           <label tabIndex={0} className="btn btn-ghost btn-circle">
//              <div className="indicator">
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
//               </svg>
//               <span className="badge badge-sm indicator-item">8</span>
//             </div>           
//           </label>
//           <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 dark:bg-base-800 shadow">
//              <div className="card-body">
//               <span className="font-bold text-lg">8 Items</span>
//               <span className="text-info">Subtotal: $999</span>
//               <div className="card-actions">
//                 <button className="btn btn-primary btn-block">View cart</button>
//               </div>
//             </div>       
//           </div>
//         </div>
//         <div className="dropdown dropdown-end">
//           <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
//             <div className="w-10 rounded-full">
//               <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="Avatar" />
//             </div>
//           </label>
//           <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 dark:bg-base-800 rounded-box w-52">
//             <li>
//               <a className="justify-between">
//                 Profile
//                 <span className="badge">New</span>
//               </a>
//             </li>
//             <li><a>Settings</a></li>
//             <li><a>Logout</a></li>
//           </ul>
//         </div>
//         {/* Search Box */}
//         <div className="flex-none">
//           <input type="text" placeholder="Search" className="input input-sm" />
//         </div>
//         {/* Buttons */}
//         <div className="flex-none">
//           <button className="btn btn-primary">Button 1</button>
//           <button className="btn btn-secondary">Button 2</button>
//         </div>
//         {/* Hyperlinks */}
//         <div className="flex-none">
//           <a href="#" className="btn btn-link">Home</a>
//           <a href="#" className="btn btn-link">Offer</a>
//           <a href="#" className="btn btn-link">Desktop Deal</a>
//           <a href="#" className="btn btn-link">Account</a>
//         </div>
//         {/* Dark Mode Toggle */}
//         <div className="flex-none">
//           <button className="btn btn-ghost btn-circle" onClick={toggleDarkMode}>
//             {isDarkMode ? (
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 {/* ... (moon SVG path) ... */}
//               </svg>
//             ) : (
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 {/* ... (sun SVG path) ... */}
//               </svg>
//             )}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TNavbar;

import React, { useState } from 'react';

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`navbar bg-${isDarkMode ? 'base-900' : 'base-100'} dark:bg-base-800`}>
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">Hr Tech</a>
      </div>
      <div className="flex-none">
        {/* ... (existing dropdown and avatar code) ... */}
        <div className="flex-none ">
          <a href="#" className="px-20 -1 btn btn-link">Home</a>
          <a href="#" className="px-20 py-1 btn btn-link">Offer</a>
          <a href="#" className="px-20 py-1 btn btn-link">Desktop Deal</a>
          <a href="/Component/LoginForm" className="px-20 py-1 btn btn-link">Account</a>
        </div>
        {/* Search Box */}
        <div className="flex-none items-center space-x-2">
          <input type="text" 
          placeholder="Search" 
          className="input px-2 py-1 border border-gray-400 rounded" 
          />
          <button className="btn btn-primary px-4 py-1 rounded">Search</button>

        </div>
        {/* Buttons */}
        <div className="flex-none space-x-4">
          <button className="btn btn-secondary  rounded">
            PC Builder
            </button>
        </div>
        {/* Dark Mode Toggle */}
        <div className="flex-none">
          <button className="btn btn-ghost btn-circle" onClick={toggleDarkMode}>
            {isDarkMode ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 17h6m0 0l-4-4m4 4l-4 4m0 0V3m0 12V3M4 3h4m6 18h4m-4-4V3m0 18V3" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;



