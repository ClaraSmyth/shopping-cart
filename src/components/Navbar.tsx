import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="navbar hidden h-min bg-base-100 transition-all sm:flex">
      {/* Logo */}
      <div>
        <Link to="/" className="btn-ghost btn text-xl normal-case">
          Games
        </Link>
      </div>

      {/* Nav Items */}
      <ul className="menu rounded-box menu-horizontal flex-1 flex-nowrap bg-base-100 p-2">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/store">Store</Link>
        </li>
      </ul>

      {/* Search Bar */}
      <div className="form-control">
        <input type="text" placeholder="Search" className="input-bordered input" />
      </div>

      {/* Checkout Modal Button */}
      <label tabIndex={0} htmlFor="checkout-modal" className="btn-ghost btn-circle btn">
        <div className="indicator">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          <span className="badge badge-sm indicator-item">8</span>
        </div>
      </label>
    </div>
  );
}

export default Navbar;
