import React from 'react';
import { Game } from '../types';
import CheckoutCard from './CheckoutCard';

interface Props {
  cart: Game[];
  removeFromCart: Function;
  updateCartQty: Function;
}

function CheckoutModal(props: Props) {
  const { cart, removeFromCart, updateCartQty } = props;
  const subTotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <>
      <input type="checkbox" id="checkout-modal" className="modal-toggle" />
      <label htmlFor="checkout-modal" className="modal min-w-min cursor-pointer">
        <label className="modal-box relative mx-2 flex w-full max-w-md flex-col gap-2" htmlFor="">
          <h3 className="text-2xl font-bold">Checkout</h3>

          <div className="relative">
            <p className="absolute -top-4 right-8 text-sm">Price</p>
            <div className="divider m-0"></div>
          </div>

          <div className="flex h-72 w-full max-w-full flex-col gap-2 overflow-y-scroll pr-2">
            {cart.map((obj) => (
              <CheckoutCard key={obj.id} game={obj} removeFromCart={removeFromCart} updateCartQty={updateCartQty} />
            ))}
          </div>

          <div className="divider m-0"></div>

          <p className="ml-auto mr-7">
            Subtotal: <span className="font-bold">£{subTotal}</span>
          </p>

          <div className="divider m-0"></div>

          <button className="btn-primary btn w-full">Proceed</button>
        </label>
      </label>
    </>
  );
}

export default CheckoutModal;
