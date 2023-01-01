import React from 'react';
import CheckoutCard from './CheckoutCard';

function CheckoutModal() {
  return (
    <>
      <input type="checkbox" id="checkout-modal" className="modal-toggle" />
      <label htmlFor="checkout-modal" className="modal min-w-min cursor-pointer">
        <label className="modal-box relative mx-2 flex w-full max-w-md flex-col gap-2" htmlFor="">
          <h3 className="text-2xl font-bold">Checkout</h3>

          <div className="divider m-0"></div>

          <div className="flex h-72 w-full max-w-full flex-col gap-2 overflow-y-scroll pr-2">
            <CheckoutCard />
            <CheckoutCard />
            <CheckoutCard />
            <CheckoutCard />
            <CheckoutCard />
            <CheckoutCard />
          </div>

          <div className="divider m-0"></div>

          <p className="ml-auto mr-7">
            Subtotal: <span className="font-bold">COST</span>
          </p>

          <div className="divider m-0"></div>

          <button className="btn-primary btn w-full">Proceed</button>
        </label>
      </label>
    </>
  );
}

export default CheckoutModal;
