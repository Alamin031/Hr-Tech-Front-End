import React, { useState } from 'react';
import axios from 'axios';
import SearchResultsModal from './SearchResultsModal';


const Header = () => {
  const [cartItems, setCartItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);


  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const handleSearch = async () => {
    try {
      console.log('Searching for:', searchQuery);
      const response = await axios.get(`http://localhost:3000/customer/search/${searchQuery}`);
      console.log('Search results:', response.data);
      setSearchResults(response.data);
      setIsModalOpen(true); // Open the modal with search results
      console.log('Search results:', searchResults);
    } catch (error) {
      console.error('Error fetching search results:', error);
      setSearchResults([]);
    }
  };
  const closeModal = () => {
    setIsModalOpen(false);
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
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="px-2 py-1 border border-gray-400 rounded"
        />
        <button
          className="search-button px-4 py-1 bg-blue-500 text-white rounded"
          onClick={handleSearch}
        >
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
      <SearchResultsModal
        isOpen={isModalOpen}
        searchResults={searchResults}
        onClose={closeModal}
      />
    </header>
  );
};

export default Header;



// import React from 'react';
// import { useCart } from '../Component/CartContext';

// export default function Header() {
//   const { cartItems } = useCart(); // Get cart items from the context

//   return (
//     <div className="navbar bg-base-100">
//       <div className="flex-1">
//         <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
//       </div>
//       <div className="flex-none">
//         <div className="dropdown dropdown-end">
//           <label tabIndex={0} className="btn btn-ghost btn-circle">
//             <div className="indicator">
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
//               <span className="badge badge-sm indicator-item">{cartItems.length}</span> {/* Display cart count */}
//             </div>
//           </label>
//           <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
//             <div className="card-body">
//               <span className="font-bold text-lg">{cartItems.length} Items</span> {/* Display cart count */}
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
//           <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
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
//       </div>
//     </div>
//   );
// }
