import React from 'react';
import { Link } from 'react-router-dom';
import { Game } from '../types';
import { MdStorefront, MdOutlineShoppingCart, MdOutlineHome } from 'react-icons/md';

interface Props {
  cart: Game[];
}

function MobileNav(props: Props) {
  const { cart } = props;
  return (
    <div className="btm-nav sm:hidden">
      <Link to="/" className="text-primary">
        <MdOutlineHome size={'1.5rem'} />
      </Link>
      <Link to="/store" className="active text-primary">
        <MdStorefront size={'1.5rem'} />
      </Link>
      <label tabIndex={0} htmlFor="checkout-modal" className="text-primary">
        <div className="indicator">
          <MdOutlineShoppingCart size={'1.5rem'} />
          <span className="badge badge-sm indicator-item">{cart.length < 10 ? cart.length : '9+'}</span>
        </div>
      </label>
    </div>
  );
}

export default MobileNav;
