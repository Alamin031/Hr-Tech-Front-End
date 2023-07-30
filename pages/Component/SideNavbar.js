import { useState } from 'react';
import Link from 'next/link';
import {
  MdOutlineSettings,
  MdOutlineLogout,
  MdReviews,
  MdFeedback,
  MdDashboard,
  MdPendingActions,
} from 'react-icons/md';

import { CgProfile } from "react-icons/cg";
import { FaRegComments,FaApple } from "react-icons/fa";
import { BiMessageSquareDots } from "react-icons/bi";

const SideNavbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown((prevState) => !prevState);
  };

  return (
      <nav className=" p-6 w-1/2 h-screen bg-white z-20 -left-96 lg:left-0 lg:w-60  peer-focus:left-0 peer:transition ease-out delay-150 duration-200">      {/* Logo */}
      {/* <div className="text-2xl font-bold text-center mb-6">
        <img src="/logo.png" alt="Logo" className="w-36 h-36 mx-auto" />
        Hello Customer
      </div> */}
      
      <ul className="flex flex-col space-y-2">
        <li className='flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg '>
          <Link href="/Component/UserDashbord" className="flex items-center hover:text-gray-300">
              <MdDashboard className="mr-2 text-2xl text-gray-600 group-hover:text-white  font-semibold" />
              <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
              Dashboard
                </h3>
          </Link>
        </li>
        <li className='flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg '>
          <Link href="/Component/profile" className="flex items-center hover:text-gray-300">

          <CgProfile className="mr-2 text-2xl text-gray-600 group-hover:text-white " />
                <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                  Profile
                </h3>
                </Link>
        </li>


        <li className='flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg '>
          <Link href="/" className="flex items-center hover:text-gray-300">

          <FaRegComments className="mr-2 text-2xl text-gray-600 group-hover:text-white " />
                <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                Comments
                </h3>
                </Link>
        </li>

        <li className='flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg '>
          <Link href="/" className="flex items-center hover:text-gray-300">

          <BiMessageSquareDots className="mr-2 text-2xl text-gray-600 group-hover:text-white " />
                <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                Messages
                </h3>
                </Link>
        </li>

        <li className='flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg '>
          <Link href="/" className="flex items-center hover:text-gray-300">

          <FaApple className="mr-2 text-2xl text-gray-600 group-hover:text-white " />
                <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                Send Product
                </h3>
                </Link>
        </li>

        <li className='mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg'>
          <a
            href="#"
            onClick={toggleDropdown}
            className="flex items-center justify-between hover:text-gray-300"
          >
            <span className="flex items-center">
              <MdReviews className="mr-2 text-2xl text-gray-600 group-hover:text-white  font-semibold" /> 
              <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
              Order
                </h3>
            </span>
            <span>{showDropdown ? '▲' : '▼'}</span>
          </a>
          {showDropdown && (
            <ul className="pl-4 ">
              <li className='hover:bg-sky-900'>
              <Link href="/Component/showOrder" className="flex items-center hover:text-gray-300">
              <MdPendingActions className="mr-2 text-2xl text-gray-600 group-hover:text-white  font-semibold" />
              <h3 className="text-base  text-gray-800 group-hover:text-white font-semibold ">
                  Show Order
                </h3>
          </Link>
              </li>
              <li className='hover:bg-sky-900'>
              <Link href="/Component/showReview" className="flex items-center hover:text-gray-300">
              <MdFeedback className="mr-2 text-2xl text-gray-600 group-hover:text-white  font-semibold" />
              <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                  Show Review
                </h3>
          </Link>
              </li>

              {/* <li className='hover:bg-sky-900'>
              <Link href="/Component/ReviewItem" className="flex items-center hover:text-gray-300">
              <MdFeedback className="mr-2 text-2xl text-gray-600 group-hover:text-white  font-semibold" />
              <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                  Review items
                </h3>
          </Link>
              </li> */}
              
              {/* Add more dropdown items as needed */}
            </ul>
          )}
        </li>
        <li className='flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg '>
        <Link href="/" className="flex items-center hover:text-gray-300">
              <MdOutlineSettings className="mr-2 text-2xl text-gray-600 group-hover:text-white  font-semibold" />
              <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                  Contact
                </h3>
          </Link>
        </li>
        {/* Add more navigation items as needed */}

        <div className=" my-4">
              <div className="flex mb-2 justify-start items-center gap-4 pl-5 border border-gray-200  hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <MdOutlineLogout className="text-2xl text-gray-600 group-hover:text-white " />
                <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                  Logout
                </h3>
              </div>
            </div>
      </ul>
    </nav>
  );
};

export default SideNavbar;

