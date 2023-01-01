import React from 'react';
import { MdOutlineAddShoppingCart } from 'react-icons/md';

function Card() {
  return (
    <div className="card-compact border-rad card overflow-hidden bg-base-100 shadow-xl max-[430px]:grid max-[430px]:grid-cols-[40%,1fr]">
      <figure className="overflow-hidden rounded-none">
        {/* Card Image */}
        <img className="h-full object-cover" src="https://placeimg.com/400/225/arch" alt="Shoes" />
      </figure>
      <div className="card-body relative">
        {/* Title */}
        <h2 className="custom-text-ellipsis-1 card-title">Game Name adfasd fasdf asdf asdf asdfasdf</h2>
        <div className="card-actions min-w-max items-center justify-between">
          {/* Price Badge */}
          <button className="badge badge-lg">£19.99</button>
          {/* But Now Button */}
          <button className="btn-primary btn-sm btn">
            <MdOutlineAddShoppingCart size={'1.3rem'} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
