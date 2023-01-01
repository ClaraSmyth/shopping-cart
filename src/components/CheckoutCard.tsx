import React from 'react';

function CheckoutCard() {
  return (
    <div className="card rounded-box h-16 min-w-max flex-row bg-base-300 p-1">
      <img
        className="mask mask-squircle mr-2 aspect-square max-h-full object-cover"
        src="https://placeimg.com/400/400/arch"
        alt=""
      />
      <div className="flex min-w-max flex-1 flex-col justify-around">
        <p>Game Name</p>
        <div className="flex gap-2">
          <select className=" select-bordered select select-xs w-full max-w-max bg-[calc(100%-12px)calc(1px+50%),calc(100%-8px)calc(1px+50%)] pr-4 pl-1 text-center">
            <option disabled>Qty</option>
            <option selected>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
          </select>
          <button className="btn-xs btn">Remove</button>
        </div>
      </div>
      <div className="divider divider-horizontal mx-0"></div>
      <p className="mr-1 flex max-w-[4rem] flex-1 items-center justify-center">PRICE</p>
    </div>
  );
}

export default CheckoutCard;
