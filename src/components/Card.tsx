import React from 'react';
import { MdOutlineAddShoppingCart, MdOutlineRemoveShoppingCart } from 'react-icons/md';
import { IUseCartOutput } from '../hooks/useCart';
import { IGame } from '../types';
import { useNavigate } from 'react-router-dom';

interface Props {
  game: IGame;
  cart: IUseCartOutput['cart'];
  updateCart: IUseCartOutput['updateCart'];
}

function Card(props: Props) {
  const { game, cart, updateCart } = props;
  const isInCart = cart.some((item) => item.id === game.id);
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/store/${game.slug}`)}
      className="card-compact card cursor-pointer overflow-hidden bg-base-100 shadow-xl transition hover:scale-105 max-[430px]:grid max-[430px]:grid-cols-[40%,1fr]"
    >
      <figure className="h-28 overflow-hidden rounded-none md:h-44">
        {/* Card Image */}
        <img className="min-h-full object-cover" src={game.background_image} alt="Shoes" />
      </figure>
      <div className="card-body relative justify-between bg-transparent">
        {/* Title */}
        <h2 className="custom-text-ellipsis-1 card-title">{game.name}</h2>
        <div className="card-actions min-w-max items-center justify-between">
          {/* Price Badge */}
          <button className="badge badge-lg md:p-4 md:text-lg md:font-semibold">£{game.price}</button>
          {/* But Now Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              isInCart ? updateCart.remove(game) : updateCart.add(game);
            }}
            className={`btn-primary btn-sm btn gap-2 text-base md:h-9 md:min-h-[2.25rem] ${isInCart && 'btn-error'}`}
          >
            {isInCart ? <MdOutlineRemoveShoppingCart size={'1.5em'} /> : <MdOutlineAddShoppingCart size={'1.5em'} />}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
