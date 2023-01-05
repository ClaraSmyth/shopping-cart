import React, { useState } from 'react';
import { IUseCartOutput } from '../hooks/useCart';
import { MdOutlineAddShoppingCart, MdOutlineRemoveShoppingCart } from 'react-icons/md';
import game from '../testData2';

interface Props {
  cart: IUseCartOutput['cart'];
  updateCart: IUseCartOutput['updateCart'];
}

function Game(props: Props) {
  const { cart, updateCart } = props;
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const isInCart = cart.some((item) => item.id === game.id);

  return (
    <div className="grid max-h-full grid-cols-1 grid-rows-[min-content,2fr,3fr] gap-4 p-4 md:grid-cols-[2fr,1fr] md:grid-rows-[min-content,1fr]">
      <h2 className="card-title justify-center text-center text-2xl md:col-start-2 md:text-[clamp(1.5rem,0.357rem+2.381vw,2.5rem)] md:leading-none">
        {game.name}
      </h2>

      <div
        style={{ backgroundImage: `url(${game.background_image})` }}
        className="relative flex items-center overflow-hidden rounded-2xl bg-slate-500 bg-cover bg-center md:col-end-2 md:row-span-2 md:row-start-1"
      ></div>

      <div className="flex flex-col">
        <div className="tabs flex-nowrap">
          <button
            onClick={() => setSubMenuOpen(false)}
            className={`tab tab-lifted border-none text-base font-semibold sm:tab-lg ${!subMenuOpen && 'tab-active'}`}
          >
            Description
          </button>
          <button
            onClick={() => setSubMenuOpen(true)}
            className={`tab tab-lifted border-none text-base font-semibold sm:tab-lg ${subMenuOpen && 'tab-active'}`}
          >
            Details
          </button>
          <div></div>
        </div>
        <div className={`card flex-auto bg-base-100 ${!subMenuOpen && 'rounded-tl-none'}`}>
          <div className="card-body gap-4 p-4">
            {subMenuOpen ? (
              <div className="grid h-16 flex-grow auto-rows-min grid-cols-[max-content,1fr] gap-4 overflow-y-scroll pr-2">
                <p>Released:</p>
                <p>{game.released}</p>
                <p>Genres:</p>
                <p>{game.genres.reduce((string, obj) => `${string} ${obj.name},`, '').slice(0, -1)}</p>
                <p>Platforms:</p>
                <p>{game.platforms.reduce((string, obj) => `${string} ${obj.platform.name},`, '').slice(0, -1)}</p>
                <p>Developers:</p>
                <p>{game.developers.reduce((string, obj) => `${string} ${obj.name},`, '').slice(0, -1)}</p>
                <p>Publishers:</p>
                <p>{game.publishers.reduce((string, obj) => `${string} ${obj.name},`, '').slice(0, -1)}</p>
              </div>
            ) : (
              <p className="h-16 overflow-y-scroll pr-2">{game.description_raw}</p>
            )}
            <div className="card-actions justify-end">
              <button
                onClick={() => (isInCart ? updateCart.remove(game) : updateCart.add(game))}
                className={`btn-primary btn w-full gap-2 ${isInCart && 'btn-error'}`}
              >
                {isInCart ? 'Remove From Cart' : 'Add To Cart'}
                {isInCart ? (
                  <MdOutlineRemoveShoppingCart size={'1.5em'} />
                ) : (
                  <MdOutlineAddShoppingCart size={'1.5em'} />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Game;
