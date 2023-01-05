import React from 'react';
import { MdOutlineAddShoppingCart, MdOutlineRemoveShoppingCart } from 'react-icons/md';
import { IUseCartOutput } from '../hooks/useCart';
import { IGame } from '../types';

interface Props {
  game: IGame;
  cart: IUseCartOutput['cart'];
  updateCart: IUseCartOutput['updateCart'];
}

function Card(props: Props) {
  const { game, cart, updateCart } = props;
  const isInCart = cart.some((item) => item.id === game.id);

  return (
    <div className="card-compact card cursor-pointer overflow-hidden bg-base-100 shadow-xl transition hover:scale-105 max-[430px]:grid max-[430px]:grid-cols-[40%,1fr]">
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
          <button
            onClick={() => (isInCart ? updateCart.remove(game) : updateCart.add(game))}
            className={`btn-primary btn-sm btn ${isInCart && 'btn-error'}`}
          >
            {isInCart ? <MdOutlineRemoveShoppingCart size={'1.5em'} /> : <MdOutlineAddShoppingCart size={'1.5em'} />}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
