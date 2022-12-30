import React from 'react';

function Card() {
  return (
    <div className="card-compact card bg-base-100 shadow-xl">
      <figure>
        {/* Card Image */}
        <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
      </figure>
      <div className="card-body">
        {/* Title */}
        <h2 className="card-title">Game Name</h2>
        {/* Description */}
        <p>Game description goes here</p>
        <div className="card-actions items-center justify-between">
          {/* Price Badge */}
          <button className="badge-secondary badge-outline badge badge-lg">£19.99</button>
          {/* But Now Button */}
          <button className="btn-primary btn-sm btn">Buy Now</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
