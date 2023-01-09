import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IUseCartOutput } from '../hooks/useCart';
import { MdOutlineShoppingCart } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { IUseSearchOutput } from '../hooks/useSearch';

interface Props {
  cart: IUseCartOutput['cart'];
  updateSearch: IUseSearchOutput['updateSearch'];
}

function Navbar(props: Props) {
  const { cart, updateSearch } = props;
  const [searchBarValue, setSearchBarValue] = useState('');
  const navigate = useNavigate();

  return (
    <div className="navbar z-10 hidden h-min bg-base-100 transition-all sm:flex md:px-4">
      {/* Logo */}
      <div>
        <Link to="/" className="btn-ghost btn text-xl normal-case">
          Games
        </Link>
      </div>

      {/* Nav Items */}
      <ul className="menu rounded-box menu-horizontal flex-1 flex-nowrap gap-2 bg-base-100 p-2">
        <li>
          <Link onClick={updateSearch.reset} to="/">
            Home
          </Link>
        </li>
        <li>
          <Link onClick={updateSearch.reset} to="/store">
            Store
          </Link>
        </li>
      </ul>

      {/* Search Bar */}
      <form
        className="form-control"
        onSubmit={(e) => {
          e.preventDefault();
          updateSearch.newSearch(searchBarValue);
          setSearchBarValue('');
          navigate('/store');
        }}
      >
        <input
          type="text"
          placeholder="Search"
          className="input-bordered input"
          value={searchBarValue}
          onChange={(e) => setSearchBarValue(e.target.value)}
        />
      </form>

      {/* Checkout Modal Button */}
      <label tabIndex={0} htmlFor="checkout-modal" className="btn-ghost btn-circle btn ml-2">
        <div className="indicator text-base">
          <MdOutlineShoppingCart size={'1.5em'} />
          <span className="badge badge-sm indicator-item">{cart.length < 10 ? cart.length : '9+'}</span>
        </div>
      </label>
    </div>
  );
}

export default Navbar;
