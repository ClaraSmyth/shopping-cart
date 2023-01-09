import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { IGame } from '../types';
import { useNavigate } from 'react-router-dom';
import { MdStorefront, MdOutlineShoppingCart, MdOutlineHome, MdOutlineSearch } from 'react-icons/md';
import { IUseSearchOutput } from '../hooks/useSearch';

interface Props {
  cart: IGame[];
  updateSearch: IUseSearchOutput['updateSearch'];
}

function MobileNav(props: Props) {
  const { cart, updateSearch } = props;
  const [hideSearch, setHideSearch] = useState(true);
  const [searchBarValue, setSearchBarValue] = useState('');
  const navigate = useNavigate();

  return (
    <>
      <div
        className={`visible fixed w-full bg-base-100 p-4 opacity-100 shadow-md transition-[opacity_visibility_transform] duration-200 sm:hidden ${
          hideSearch && 'invisible -translate-y-full opacity-0'
        }`}
      >
        <form
          className="form-control"
          onSubmit={(e) => {
            e.preventDefault();
            setHideSearch((prev) => !prev);
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
      </div>
      <div className="btm-nav shadow sm:hidden">
        <NavLink onClick={updateSearch.reset} to="/" className="text-primary">
          <MdOutlineHome size={'1.5em'} />
        </NavLink>
        <NavLink onClick={updateSearch.reset} to="/store" className="text-primary">
          <MdStorefront size={'1.5em'} />
        </NavLink>
        <button onClick={() => setHideSearch((prev) => !prev)} className="text-primary">
          <MdOutlineSearch size={'1.5em'} />
        </button>
        <label tabIndex={0} htmlFor="checkout-modal" className="text-primary">
          <div className="indicator">
            <MdOutlineShoppingCart size={'1.5em'} />
            <span className="badge badge-sm indicator-item">{cart.length < 10 ? cart.length : '9+'}</span>
          </div>
        </label>
      </div>
    </>
  );
}

export default MobileNav;
