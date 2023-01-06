import React from 'react';
import { NavLink } from 'react-router-dom';
import { IGame } from '../types';
import { MdStorefront, MdOutlineShoppingCart, MdOutlineHome } from 'react-icons/md';

interface Props {
  cart: IGame[];
}

function MobileNav(props: Props) {
  const { cart } = props;
  return (
    <div className="btm-nav sm:hidden">
      <NavLink to="/" className="text-primary">
        <MdOutlineHome size={'1.5em'} />
      </NavLink>
      <NavLink to="/store" className="text-primary">
        <MdStorefront size={'1.5em'} />
      </NavLink>
      <label tabIndex={0} htmlFor="checkout-modal" className="text-primary">
        <div className="indicator">
          <MdOutlineShoppingCart size={'1.5em'} />
          <span className="badge badge-sm indicator-item">{cart.length < 10 ? cart.length : '9+'}</span>
        </div>
      </label>
    </div>
  );
}

export default MobileNav;
