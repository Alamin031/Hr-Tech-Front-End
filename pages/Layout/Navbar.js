
import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar bg-blue-500 text-white">
      <ul className="nav-links container mx-auto flex space-x-4">
        <li className="dropdown hidden">
          <a href="/Desktop">Desktop</a>
          <ul className="dropdown-content">
            {/* Sub-dropdowns for Desktop */}
          </ul>
        </li>

        <li className="dropdown">
          <a href="/Desktop">Laptop</a>
          <ul className="dropdown-content">
            {/* Sub-dropdowns for Laptop */}
          </ul>
        </li>

        <li className="dropdown">
          <a href="/Component">Component</a>
          <ul className="dropdown-content">
            {/* Sub-dropdowns for Component */}
          </ul>
        </li>

        <li className="dropdown ">
          <a href="/services">Services</a>
          <ul className="dropdown-content hidden">
            <li>
              <a href="/services/web">Web Development</a>
            </li>
            <li>
              <a href="/services/mobile">Mobile App Development</a>
            </li>
            <li className="sub-dropdown">
              <a href="/services/design">Design Services</a>
              <ul className="sub-dropdown-content">
                <li>
                  <a href="/services/design/logo">Logo Design</a>
                </li>
                <li>
                  <a href="/services/design/graphics">Graphic Design</a>
                </li>
                <li>
                  <a href="/services/design/ui">UI/UX Design</a>
                </li>
              </ul>
            </li>
          </ul>
        </li>

        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

