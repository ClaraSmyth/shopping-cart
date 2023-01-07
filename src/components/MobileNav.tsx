import React, { useState, Dispatch, SetStateAction } from 'react';
import { NavLink } from 'react-router-dom';
import { IGame } from '../types';
import { useNavigate } from 'react-router-dom';
import { MdStorefront, MdOutlineShoppingCart, MdOutlineHome, MdOutlineSearch } from 'react-icons/md';

interface Props {
  cart: IGame[];
  setSearch: Dispatch<SetStateAction<string>>;
}

function MobileNav(props: Props) {
  const { cart, setSearch } = props;
  const [hideSearch, setHideSearch] = useState(true);
  const [searchBarValue, setSearchBarValue] = useState('');
  const navigate = useNavigate();

  return (
    <>
      <div
        className={`visible fixed w-full bg-base-100 p-4 opacity-100 transition-[opacity_visibility_transform] duration-200 sm:hidden ${
          hideSearch && 'invisible -translate-y-full opacity-0'
        }`}
      >
        <form
          className="form-control"
          onSubmit={(e) => {
            e.preventDefault();
            setHideSearch((prev) => !prev);
            setSearch(searchBarValue);
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
      <div className="btm-nav sm:hidden">
        <NavLink onClick={() => setSearch('')} to="/" className="text-primary">
          <MdOutlineHome size={'1.5em'} />
        </NavLink>
        <NavLink onClick={() => setSearch('')} to="/store" className="text-primary">
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
