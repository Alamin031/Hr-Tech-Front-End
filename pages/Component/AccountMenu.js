import React from 'react';

const AccountMenu = () => {
  return (
    <div className="ac-menus">
      <div className="ac-menu-item">
        <a href="https://www.startech.com.bd/account/order" className="ico-btn">
          <span className="material-icons">chrome_reader_mode</span>
          <span>Orders</span>
        </a>
      </div>
      <div className="ac-menu-item">
        <a href="https://www.startech.com.bd/account/edit" className="ico-btn">
          <span className="material-icons">person</span>
          <span>Edit Profile</span>
        </a>
      </div>
      <div className="ac-menu-item">
        <a href="https://www.startech.com.bd/account/password" className="ico-btn">
          <span className="material-icons">lock</span>
          <span>Change Password</span>
        </a>
      </div>
      <div className="ac-menu-item">
        <a href="https://www.startech.com.bd/account/address" className="ico-btn">
          <span className="material-icons">book</span>
          <span>Addresses</span>
        </a>
      </div>
      <div className="ac-menu-item">
        <a href="https://www.startech.com.bd/account/wishlist" className="ico-btn">
          <span className="material-icons">favorite_border</span>
          <span>Wish List</span>
        </a>
      </div>
      <div className="ac-menu-item">
        <a href="https://www.startech.com.bd/account/pc" className="ico-btn">
          <span className="material-icons">important_devices</span>
          <span>Saved PC</span>
        </a>
      </div>
      <div className="ac-menu-item">
        <a href="https://www.startech.com.bd/account/reward" className="ico-btn">
          <span className="material-icons">stars</span>
          <span>Star Points</span>
        </a>
      </div>
      <div className="ac-menu-item">
        <a href="https://www.startech.com.bd/account/transaction" className="ico-btn">
          <span className="material-icons">account_balance_wallet</span>
          <span>Your Transactions</span>
        </a>
      </div>
      <div className="ac-menu-item h-desk">
        <a href="https://www.startech.com.bd/account/logout" className="ico-btn">
          <span className="material-icons">input</span>
          <span>Logout</span>
        </a>
      </div>
    </div>
  );
};

export default AccountMenu;
