// // components/Navbar.js
// import React from 'react';
// import Link from 'next/link';

// const Navbar = () => {
//   return (
//     <nav className="navbar">
//       <ul className="nav-links">
//         <li className="dropdown">
//           <Link href="/Desktop">Desktop</Link>
//           <ul className="dropdown-content">
//             {/* Dropdown content for Desktop */}
//             {/* ... Add dropdown items here ... */}
//           </ul>
//         </li>
//         <li className="dropdown">
//           <Link href="/Desktop">Laptop</Link>
//           <ul className="dropdown-content">
//             {/* Dropdown content for Laptop */}
//             {/* ... Add dropdown items here ... */}
//           </ul>
//         </li>
//         <li className="dropdown">
//           <Link href="/Component">Component</Link>
//           <ul className="dropdown-content">
//             {/* Dropdown content for Component */}
//             {/* ... Add dropdown items here ... */}
//           </ul>
//         </li>
//         <li>
//           <Link href="/services">Services</Link>
//           <ul className="dropdown-content">
//             <li>
//               <Link href="/services/web">Web Development</Link>
//             </li>
//             <li>
//               <Link href="/services/mobile">Mobile App Development</Link>
//             </li>
//             <li className="sub-dropdown">
//               <Link href="/services/design">Design Services</Link>
//               <ul className="sub-dropdown-content">
//                 <li>
//                   <Link href="/services/design/logo">Logo Design</Link>
//                 </li>
//                 <li>
//                   <Link href="/services/design/graphics">Graphic Design</Link>
//                 </li>
//                 <li>
//                   <Link href="/services/design/ui">UI/UX Design</Link>
//                 </li>
//               </ul>
//             </li>
//           </ul>
//         </li>
//         <li>
//           <Link href="/contact">Contact</Link>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;


// import React from 'react';

// const MyComponent = () => {
//   return (
//     <div className="container ac-layout">
//       <div className="ac-header flex">
//         <div className="left flex">
//           <span className="avatar">
//             <img
//               src="https://www.gravatar.com/avatar/4c32ed335d3a247f081ef9685cd1a128?s=70&amp;d=mp&amp;r=g"
//               width="80"
//               height="80"
//               alt="MC"
//             />
//           </span>
//           <div className="name">
//             <p>Hello,</p>
//             <p className="user">Md Al Amin Chowdhury</p>
//           </div>
//         </div>
//         <div className="right flex">
//           <div className="balance">
//             <span className="blurb">Star Points</span>
//             <span className="amount">0</span>
//           </div>
//           <div className="balance">
//             <span className="blurb">Store Credit</span>
//             <span className="amount">0</span>
//           </div>
//         </div>
//       </div>
//       <ul className="navbar-nav ac-navbar flex p-8 rounded-t-lg w-40 h-30">
//         <li className="nav-item p-8 rounded-t-lg w-40 h-30">          

//           <a href="https://www.startech.com.bd/account/order" className="nav-link  p-8 rounded-t-lg w-40 h-30">
//             <span className="material-icons p-8 rounded-t-lg w-40 h-30 b">chrome_reader_mode</span>Orders
//           </a>
//         </li>
//         <li className="nav-item">
//           <a href="https://www.startech.com.bd/account/edit" className="nav-link">
//             <span className="material-icons">person</span>Edit Account
//           </a>
//         </li>
//         {/* Add other list items here */}
//       </ul>
//       <div className="ac-menus">
//         <div className="ac-menu-item">
//           <a href="https://www.startech.com.bd/account/order" className="ico-btn">
//             <span className="material-icons">chrome_reader_mode</span>
//             <span>Orders</span>
//           </a>
//         </div>
//         <div className="ac-menu-item">
//           <a href="https://www.startech.com.bd/account/edit" className="ico-btn">
//             <span className="material-icons">person</span>
//             <span>Edit Profile</span>
//           </a>
//         </div>
//         {/* Add other menu items here */}
//       </div>
//     </div>
//   );
// };

// export default MyComponent;


import React from 'react';
import { useEffect, useState } from "react";
import { FaRegComments, FaApple, FaComputer } from 'react-icons/fa';
import { BiMessageSquareDots } from 'react-icons/bi';
import {
  MdOutlineSettings,
  MdOutlineLogout,
  MdReviews,
  MdFeedback,
  MdDashboard,
  MdPendingActions,
  MdStars,
  MdBorderAll,
} from 'react-icons/md';
import { GrTransaction } from "react-icons/gr";


const CardComponent = () => {
    const [jsonData, setJsonData] = useState('')

  return (
    <> 
   
    <div className="flex flex-wrap justify-center">
                   
      {/* Show Order Card */}
      <div className="card w-96 h-56 bg-base-100 shadow-xl mb-4 mr-4">
        <a href="./showOrder" className="card-body text-center flex items-center justify-center">
          <div className="mr-2">
            <MdBorderAll className="h-6 w-6" />
          </div>
          <h2 className="card-title">Show Order</h2>
        </a>
      </div>

      {/* Comments Card */}
      <div className="card w-96 bg-base-100 shadow-xl mb-4 mr-4">
        <a href="/comments" className="card-body text-center flex items-center justify-center">
          <div className="mr-2">
            <FaRegComments className="h-6 w-6" />
          </div>
          <h2 className="card-title">Comments</h2>
        </a>
      </div>

      {/* Messages Card */}
      <div className="card w-96 bg-base-100 shadow-xl mb-4">
        <a href="/messages" className="card-body text-center flex items-center justify-center">
          <div className="mr-2">
            <BiMessageSquareDots className="h-6 w-6" />
          </div>
          <h2 className="card-title">Messages</h2>
        </a>
      </div>

      {/* Send Product Card */}
      <div className="card w-96 h-56 bg-base-100 shadow-xl mb-4 mr-4">
        <a href="/send-product" className="card-body text-center flex items-center justify-center">
          <div className="mr-2">
            <FaApple className="h-6 w-6" />
          </div>
          <h2 className="card-title">Send Product</h2>
        </a>
      </div>

      {/* Show Review Card */}
      <div className="card w-96 bg-base-100 shadow-xl mb-4 mr-4">
        <a href="/show-review" className="card-body text-center flex items-center justify-center">
          <div className="mr-2">
            <MdFeedback className="h-6 w-6" />
          </div>
          <h2 className="card-title">Show Review</h2>
        </a>
      </div>

      {/* Contact Card */}
      <div className="card w-96 bg-base-100 shadow-xl mb-4">
        <a href="/contact" className="card-body text-center flex items-center justify-center">
          <div className="mr-2">
            <MdOutlineSettings className="h-6 w-6" />
          </div>
          <h2 className="card-title">Contact</h2>
        </a>
      </div>

      {/* Transaction Card */}
      <div className="card w-96 h-56 bg-base-100 shadow-xl mb-4 mr-4">
        <a href="/transaction" className="card-body text-center flex items-center justify-center">
          <div className="mr-2">
            <GrTransaction className="h-6 w-6" />
          </div>
          <h2 className="card-title">Transaction</h2>
        </a>
      </div>

      {/* Wish List Card */}
      <div className="card w-96 bg-base-100 shadow-xl mb-4 mr-4">
        <a href="/wish-list" className="card-body text-center flex items-center justify-center">
          <div className="mr-2">
            <MdStars className="h-6 w-6" />
          </div>
          <h2 className="card-title">Wish List</h2>
        </a>
      </div>

      {/* Saved PC Card */}
      <div className="card w-96 bg-base-100 shadow-xl mb-4">
        <a href="/saved-pc" className="card-body text-center flex items-center justify-center">
          <div className="mr-2">
            <MdBorderAll className="h-6 w-6" />
          </div>
          <h2 className="card-title">Saved PC</h2>
        </a>
      </div>
    </div>

    </>

  );
};

export default CardComponent;

