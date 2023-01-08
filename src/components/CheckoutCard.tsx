import React from 'react';
import { MdDeleteForever } from 'react-icons/md';
import { IUseCartOutput } from '../hooks/useCart';
import { IGame } from '../types';

interface Props {
  game: IGame;
  updateCart: IUseCartOutput['updateCart'];
}

function CheckoutCard(props: Props) {
  const { game, updateCart } = props;

  return (
    <div className="card rounded-box h-16 flex-row bg-base-300 p-1">
      <img
        className="mask mask-squircle m-1 aspect-square max-h-full object-cover"
        src={game.background_image}
        alt=""
      />

      <div className="flex flex-1 flex-col overflow-auto pl-2">
        <p className="custom-text-ellipsis-1">{game.name}</p>
        <div className="mt-1 flex max-w-max gap-2">
          <select
            onChange={(e) => updateCart.changeQty(game, parseFloat(e.target.value))}
            defaultValue={game.quantity}
            className="select-bordered select select-xs w-full max-w-max bg-[calc(100%-12px)calc(1px+50%),calc(100%-8px)calc(1px+50%)] pr-4 pl-1 text-center"
          >
            <option disabled>Qty</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
          </select>
          <button onClick={() => updateCart.remove(game)} className="btn btn-error btn-xs px-1">
            <MdDeleteForever size={'20px'} />
          </button>
        </div>
      </div>

      <div className="divider divider-horizontal mx-0"></div>
      <p className="mr-1 flex max-w-[4rem] flex-1 items-center justify-center">£{game.price}</p>
    </div>
  );
}

export default CheckoutCard;
