
// // const Header = () => {
// //   return (
// //     <header className="header flex items-center justify-between bg-gray-800 text-white py-4 px-6">
// //       <div className="logo">
// //         <img src="/logo.png" alt="Logo" className="w-20 h-15" />

// //       </div>
// //       <nav className="navigation py-1">
// //         <ul className="flex">
// //           <li className="px-20 py-1">
// //             <a href="/" className="hover:text-gray-300 font-bold">Home</a>
// //           </li>
// //           <li className="px-20 py-1">
// //             <a href="/Offer" className="hover:text-gray-300 font-bold">Offer</a>
// //           </li>
// //           <li className="px-20 py-1">
// //             <a href="/desktop-deal" className="hover:text-gray-300 font-bold">Desktop Deal</a>
// //           </li>
// //           <li className="px-20 py-1">
// //             <a href="/Component/LoginForm" className="hover:text-gray-300 font-bold">Account</a>
// //           </li>
// //         </ul>
// //       </nav>
// //       <div className="search-box flex items-center space-x-2">
// //         <input
// //           type="text"
// //           placeholder="Search..."
// //           className="px-2 py-1 border border-gray-400 rounded"
// //         />
// //         <button className="search-button px-4 py-1 bg-blue-500 text-white rounded">
// //           Search
// //         </button>
// //       </div>
// //       <button className="pc-builder-button px-4 py-1 bg-purple-600 text-white rounded">
// //         PC Builder
// //       </button>
// //     </header>
// //   );
// // };

// // export default Header;



import React, { useState } from 'react';

const Header = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <header className="header flex items-center justify-between bg-slate-200 text-black border-2 border-slate-200 px-6">
      <div className="logo">
        <img src="/logo.png" alt="Logo" className="w-20 h-15" />
      </div>
      <nav className="navigation ml-60">
        <ul className="flex pr-20">
          <li className="px-6 py-1 ">
             <a href="/" className="hover:text-gray-300 font-bold">Home</a>
           </li>
           <li className="px-6 py-1">
             <a href="/Offer" className="hover:text-gray-300 font-bold">Offer</a>
           </li>
           <li className="px-6 py-1">
             <a href="/desktop-deal" className="hover:text-gray-300 font-bold">Desktop Deal</a>
           </li>
           <li className="px-6 py-1">
            <a href="/Component/LoginForm" className="hover:text-gray-300 font-bold">Account</a>
           </li>       
            </ul>
      </nav>
      <div className="search-box flex items-center space-x-2">
         <input
           type="text"
           placeholder="Search..."
           className="px-2 py-1 border border-gray-400 rounded"
         />
         <button className="search-button px-4 py-1 bg-blue-500 text-white rounded">
           Search
         </button>
      </div>
      <button className="pc-builder-button px-4 py-1 bg-purple-600 text-white rounded">
        PC Builder
      </button>
      <div className="cart-icon ml-4 relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 cursor-pointer"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          onClick={() => console.log('Show Cart')}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 4h16M4 8h16M10 20h4M17 20a2 2 0 11-4 0M5 20a2 2 0 11-4 0"
          />
        </svg>
        {cartItems.length > 0 && (
          <div className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center">
            {cartItems.length}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

// import React, { useState } from 'react';

// const Header = () => {
//   const [cartItems, setCartItems] = useState([]);

//   const addToCart = (product) => {
//     setCartItems([...cartItems, product]);
//   };

//   return (
//     <header className="header navbar bg-gray-800 text-white py-4 px-6 dark:bg-black dark:text-white">
//       <div className="logo">
//         <img src="/logo.png" alt="Logo" className="w-20 h-15" />
//       </div>
//       <nav className="navigation py-1">
//         <ul className="flex">
//           <li className="px-20 py-1">
//             <a href="/" className="btn btn-link hover:text-gray-300 font-bold">
//               Home
//             </a>
//           </li>
//           <li className="px-20 py-1">
//             <a
//               href="/Offer"
//               className="btn btn-link hover:text-gray-300 font-bold"
//             >
//               Offer
//             </a>
//           </li>
//           <li className="px-20 py-1">
//             <a
//               href="/desktop-deal"
//               className="btn btn-link hover:text-gray-300 font-bold"
//             >
//               Desktop Deal
//             </a>
//           </li>
//           <li className="px-20 py-1">
//             <a
//               href="/Component/LoginForm"
//               className="btn btn-link hover:text-gray-300 font-bold"
//             >
//               Account
//             </a>
//           </li>
//         </ul>
//       </nav>
//       <div className="search-box flex items-center space-x-2">
//         <input
//           type="text"
//           placeholder="Search..."
//           className="input px-2 py-1 border border-gray-400 rounded"
//         />
//         <button className="btn btn-primary px-4 py-1 rounded">Search</button>
//       </div>
//       <button className="btn btn-secondary px-4 py-1 rounded">PC Builder</button>
//       <div className="cart-icon ml-4 relative">
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="h-6 w-6 cursor-pointer"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//           onClick={() => console.log('Show Cart')}
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth={2}
//             d="M4 4h16M4 8h16M10 20h4M17 20a2 2 0 11-4 0M5 20a2 2 0 11-4 0"
//           />
//         </svg>
//         {cartItems.length > 0 && (
//           <div className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center">
//             {cartItems.length}
//           </div>
//         )}
//       </div>
//     </header>
//   );
// };

// export default Header;

// export default function Header() {
//   return (
//     <div className="navbar bg-base-100">
//   <div className="flex-1">
//   <a className="btn btn-ghost normal-case text-xl">Hr Tech</a>
//   </div>
//   <div className="flex-none ">
//           <a href="#" className=" btn btn-link">Home</a>
//           <a href="#" className=" btn btn-link">Offer</a>
//           <a href="#" className=" btn btn-link">Desktop Deal</a>
//           <a href="/Component/LoginForm" className="btn btn-link">Account</a>
//         </div>
//   <div className="flex-none gap-2">
//     <div className="form-control">
//       <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
//     </div>
//     <div className="dropdown dropdown-end">
//       <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
//         <div className="w-10 rounded-full">
//           <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
//         </div>
//       </label>
//       <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
//         <li>
//           <a className="justify-between">
//             Profile
//             <span className="badge">New</span>
//           </a>
//         </li>
//         <li><a>Settings</a></li>
//         <li><a>Logout</a></li>
//       </ul>
//     </div>
//   </div>
// </div>

//   );
// }


