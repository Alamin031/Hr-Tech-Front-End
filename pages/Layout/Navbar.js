import React from 'react';

const Navbar = () => {
  return (
    <div className="navbar bg-slate-300">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><a>Desktop</a></li>
            <li>
              <a>Laptop</a>
              <ul className="p-2">
                <li><a>All Laptop</a></li>
                <li><a>Gaming Laptop</a>
                <ul className="p-2">
                    <li><a>Acer</a></li>
                    <li><a>MSI</a></li>
                    <li><a>HP</a></li>
                    <li><a>Lenovo</a></li>
                    <li><a>GIGABYTE</a></li>
                    <li><a>MSI</a></li>
                  </ul>
                </li>
                <li>
                  <a>Premium Ultrabook</a>
                  <ul className="p-2">
                    <li><a>Samsung</a></li>
                    <li><a>Microsoft</a></li>
                    <li><a>Acer</a></li>
                    <li><a>MSI</a></li>
                    <li><a>HP</a></li>
                    <li><a>Lenovo</a></li>
                    <li><a>GIGABYTE</a></li>
                    <li><a>MSI</a></li>
                  </ul>
                </li>
                <li>
                  <a>Laptop Bag</a>
                  <ul className="p-2">
                    <li><a>Samsung</a></li>
                    <li><a>Microsoft</a></li>
                    <li><a>Acer</a></li>
                    <li><a>MSI</a></li>
                    <li><a>HP</a></li>
                    <li><a>Lenovo</a></li>
                    <li><a>GIGABYTE</a></li>
                    <li><a>MSI</a></li>
                  </ul>
                </li>
                <li>
                  <a>Laptop Accessories</a>
                  <ul className="p-2">
                    <li><a>Samsung</a></li>
                    <li><a>Microsoft</a></li>
                    <li><a>Acer</a></li>
                    <li><a>MSI</a></li>
                    <li><a>HP</a></li>
                    <li><a>Lenovo</a></li>
                    <li><a>GIGABYTE</a></li>
                    <li><a>MSI</a></li>
                  </ul>
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
          <li><a>Desktop</a></li>
          <li tabIndex={0}>
            <details>
              <summary>Laptop</summary>
              <ul className="p-2">
                <li><a>All Laptop</a></li>
                <li tabIndex={0}>
                  <details>
                    <summary>Gaming Laptop</summary>
                    <ul className="p-2">
                      <li><a>Acer</a></li>
                      <li><a>MSI</a></li>
                      <li><a>HP</a></li>
                      <li><a>Lenovo</a></li>
                      <li><a>GIGABYTE</a></li>
                      <li><a>MSI</a></li>
                    </ul>
                  </details>
                </li>
                <li tabIndex={0}>
                  <details>
                    <summary>Premium Ultrabook</summary>
                    <ul className="p-2">
                      <li><a>Samsung</a></li>
                      <li><a>Microsoft</a></li>
                      <li><a>Acer</a></li>
                      <li><a>MSI</a></li>
                      <li><a>HP</a></li>
                      <li><a>Lenovo</a></li>
                      <li><a>GIGABYTE</a></li>
                      <li><a>MSI</a></li>
                    </ul>
                  </details>
                </li>
                <li tabIndex={0}>
                  <details>
                    <summary>Laptop Bag</summary>
                    <ul className="p-2">
                      <li><a>Samsung</a></li>
                      <li><a>Microsoft</a></li>
                      <li><a>Acer</a></li>
                      <li><a>MSI</a></li>
                      <li><a>HP</a></li>
                      <li><a>Lenovo</a></li>
                      <li><a>GIGABYTE</a></li>
                      <li><a>MSI</a></li>
                    </ul>
                  </details>
                </li>
                <li tabIndex={0}>
                  <details>
                    <summary>Laptop Accessories</summary>
                    <ul className="p-2">
                    <li><a>Samsung</a></li>
                    <li><a>Microsoft</a></li>
                    <li><a>Acer</a></li>
                    <li><a>MSI</a></li>
                    <li><a>HP</a></li>
                    <li><a>Lenovo</a></li>
                    <li><a>GIGABYTE</a></li>
                    <li><a>MSI</a></li>
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

export default Navbar;
