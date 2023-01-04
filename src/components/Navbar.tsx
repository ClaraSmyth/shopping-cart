import React from 'react';
import { Link } from 'react-router-dom';
import { IUseCartOutput } from '../hooks/useCart';
import { MdOutlineShoppingCart } from 'react-icons/md';

interface Props {
  cart: IUseCartOutput['cart'];
}

function Navbar(props: Props) {
  const { cart } = props;
  return (
    <div className="navbar z-10 hidden h-min bg-base-100 transition-all sm:flex">
      {/* Logo */}
      <div>
        <Link to="/" className="btn-ghost btn text-xl normal-case">
          Games
        </Link>
      </div>

      {/* Nav Items */}
      <ul className="menu rounded-box menu-horizontal flex-1 flex-nowrap gap-2 bg-base-100 p-2">
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
      <label tabIndex={0} htmlFor="checkout-modal" className="btn-ghost btn-circle btn ml-2">
        <div className="indicator">
          <MdOutlineShoppingCart size={'1.5rem'} />
          <span className="badge badge-sm indicator-item">{cart.length < 10 ? cart.length : '9+'}</span>
        </div>
      </label>
    </div>
  );
}

export default Navbar;
