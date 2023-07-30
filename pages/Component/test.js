// components/Navbar.js
import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li className="dropdown">
          <Link href="/Desktop">Desktop</Link>
          <ul className="dropdown-content">
            {/* Dropdown content for Desktop */}
            {/* ... Add dropdown items here ... */}
          </ul>
        </li>
        <li className="dropdown">
          <Link href="/Desktop">Laptop</Link>
          <ul className="dropdown-content">
            {/* Dropdown content for Laptop */}
            {/* ... Add dropdown items here ... */}
          </ul>
        </li>
        <li className="dropdown">
          <Link href="/Component">Component</Link>
          <ul className="dropdown-content">
            {/* Dropdown content for Component */}
            {/* ... Add dropdown items here ... */}
          </ul>
        </li>
        <li>
          <Link href="/services">Services</Link>
          <ul className="dropdown-content">
            <li>
              <Link href="/services/web">Web Development</Link>
            </li>
            <li>
              <Link href="/services/mobile">Mobile App Development</Link>
            </li>
            <li className="sub-dropdown">
              <Link href="/services/design">Design Services</Link>
              <ul className="sub-dropdown-content">
                <li>
                  <Link href="/services/design/logo">Logo Design</Link>
                </li>
                <li>
                  <Link href="/services/design/graphics">Graphic Design</Link>
                </li>
                <li>
                  <Link href="/services/design/ui">UI/UX Design</Link>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
