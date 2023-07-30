import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-10 text-white text-center">
      <div className="container mx-auto">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h3 className="text-xl mb-4">hr_tech</h3>
            <p className="text-sm">
               We are a Tech-based product seller. We provide our customers with the best quality products at the most reasonable price.
            </p>
          </div>
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h4 className="text-lg mb-4">About Us</h4>
            <ul className="text-sm">
              <li className='w-1/2 ml-24'>
                <a href="https://alamin031.github.io/Md-Al-Amin-Chowdhury/">EMI Terms</a>
              </li>
              {/* Add more list items */}
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h3 className="text-xl mb-4">Contact Us</h3>
            <p className="text-sm">Email: mridoy031@gmail.com</p>
            <p className="text-sm">Phone: 01788788256</p>
          </div>
          <div className="w-full md:w-1/4">
            <h3 className="text-xl mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/hrtech">
                <FaFacebook className="text-white text-xl ml-40" />
              </a>
              <a href="https://www.twitter.com/hrtech">
                <FaTwitter className="text-white text-xl" />
              </a>
              <a href="https://www.linkedin.com/company/hrtech">
                <FaLinkedin className="text-white text-xl" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <p className="text-sm">&copy; {new Date().getFullYear()} hr_tech. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
