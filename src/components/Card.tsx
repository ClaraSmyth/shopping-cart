import React from 'react';
import { MdOutlineAddShoppingCart } from 'react-icons/md';
import { Game } from '../types';

interface Props {
  key: number;
  game: Game;
  addToCart: Function;
}

function Card(props: Props) {
  const { game, addToCart } = props;

  return (
    <div className="card-compact card overflow-hidden bg-base-100 shadow-xl max-[430px]:grid max-[430px]:grid-cols-[40%,1fr]">
      <figure className="h-28 overflow-hidden rounded-none">
        {/* Card Image */}
        <img className="min-h-full object-cover" src={game.background_image} alt="Shoes" />
      </figure>
      <div className="card-body relative justify-between">
        {/* Title */}
        <h2 className="custom-text-ellipsis-1 card-title">{game.name}</h2>
        <div className="card-actions min-w-max items-center justify-between">
          {/* Price Badge */}
          <button className="badge badge-lg">£{game.price}</button>
          {/* But Now Button */}
          <button onClick={() => addToCart(game)} className="btn-primary btn-sm btn">
            <MdOutlineAddShoppingCart size={'24px'} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
