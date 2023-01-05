import React from 'react';
import { IUseCartOutput } from '../hooks/useCart';
import CheckoutCard from './CheckoutCard';

interface Props {
  cart: IUseCartOutput['cart'];
  updateCart: IUseCartOutput['updateCart'];
}

function CheckoutModal(props: Props) {
  const { cart, updateCart } = props;
  const subTotal = cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);

  return (
    <div className="absolute">
      <input type="checkbox" id="checkout-modal" className="modal-toggle" />
      <label htmlFor="checkout-modal" className="modal min-w-min cursor-pointer">
        <label className="modal-box relative mx-2 flex w-full max-w-md flex-col gap-2" htmlFor="">
          <h3 className="text-2xl font-bold">Checkout</h3>

          <div className="relative">
            <p className="absolute -top-4 right-8 text-sm">Price</p>
            <div className="divider m-0"></div>
          </div>

          <div className="flex h-72 w-full max-w-full flex-col gap-2 overflow-y-scroll pr-2">
            {!cart.length && (
              <div className="text-center text-xl font-semibold text-base-content/40">Cart is Empty</div>
            )}
            {cart.map((obj) => (
              <CheckoutCard key={obj.id} game={obj} updateCart={updateCart} />
            ))}
          </div>

          <div className="divider m-0"></div>

          <p className="ml-auto mr-7">
            Subtotal: <span className="font-bold">£{subTotal}</span>
          </p>

          <div className="divider m-0"></div>

          <label onClick={updateCart.empty} tabIndex={0} htmlFor="checkout-modal" className="btn-primary btn w-full">
            Proceed
          </label>
        </label>
      </label>
    </div>
  );
}

export default CheckoutModal;
