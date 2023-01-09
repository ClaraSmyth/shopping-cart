import React, { useState, useEffect } from 'react';
import { IUseCartOutput } from '../hooks/useCart';
import { MdOutlineAddShoppingCart, MdOutlineRemoveShoppingCart, MdWebAsset, MdSettings } from 'react-icons/md';
import { SiWindows, SiPlaystation, SiXbox, SiNintendo, SiApple, SiIos, SiAndroid, SiLinux } from 'react-icons/si';
import { getGameData } from '../api';
import { useParams } from 'react-router-dom';
import { IGame } from '../types';
import { motion } from 'framer-motion';

interface Props {
  cart: IUseCartOutput['cart'];
  updateCart: IUseCartOutput['updateCart'];
}

function Game(props: Props) {
  const { cart, updateCart } = props;
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const [game, setData] = useState<IGame | null>(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const { slug } = useParams();
  const isInCart = cart.some((item) => item.id === game?.id);

  useEffect(() => {
    getGameData(slug || '')
      .then((result) => {
        // Adds a fake price to the game
        const price = result.id % 60 < 10 ? 10 : result.id % 60;
        const modifiedResponse = { ...result, price, quantity: 1 };

        setData(modifiedResponse);
        setError(false);
        setLoading(false);
      })
      .catch(() => setError(true));
  }, [slug]);

  if (error) {
    return (
      <div className="flex items-center justify-center text-center text-3xl font-bold">
        Looks like something went wrong! 😭
      </div>
    );
  }

  if (loading) {
    return (
      <div className="relative flex items-center justify-center gap-2 text-center text-3xl font-bold">
        <div className="animate-[spin_2400ms_linear_infinite]">
          <MdSettings size={'2em'} />
        </div>
        <p>Loading</p>
      </div>
    );
  }

  return (
    <div className="grid max-h-full grid-cols-1 grid-rows-[min-content,2fr,3fr] gap-4 p-4 md:grid-cols-[2fr,1fr] md:grid-rows-[min-content,min-content,1fr] md:gap-6 md:p-6 xl:grid-cols-[3fr,1fr]">
      <h2 className="card-title justify-center text-center text-2xl md:col-start-2 md:text-[clamp(1.5rem,0.357rem+2.381vw,2.5rem)] md:leading-none">
        {game?.name}
      </h2>

      <motion.div
        initial={{ translateX: '-5%' }}
        animate={{ translateX: '0' }}
        transition={{ type: 'spring', stiffness: 30 }}
        style={{
          backgroundImage: `url(${game?.background_image || 'https://placehold.co/600x400?text=No+Image+Found'})`,
        }}
        className="relative flex items-center overflow-hidden rounded-2xl bg-slate-500 bg-cover bg-center md:col-end-2 md:row-span-3 md:row-start-1"
      ></motion.div>

      <div className="hidden items-center rounded-2xl bg-base-100 p-4 md:grid md:grid-cols-[1fr,min-content]">
        <div className="flex gap-2">
          {game?.parent_platforms?.map((platform: any) => (
            <div key={platform.platform.id}>
              {platform.platform.slug === 'pc' && <SiWindows size={'1.5em'} />}
              {platform.platform.slug === 'playstation' && <SiPlaystation size={'1.5em'} />}
              {platform.platform.slug === 'xbox' && <SiXbox size={'1.5em'} />}
              {platform.platform.slug === 'nintendo' && <SiNintendo size={'1.5em'} />}
              {platform.platform.slug === 'apple' && <SiApple size={'1.5em'} />}
              {platform.platform.slug === 'ios' && <SiIos size={'1.5em'} />}
              {platform.platform.slug === 'android' && <SiAndroid size={'1.5em'} />}
              {platform.platform.slug === 'linux' && <SiLinux size={'1.5em'} />}
              {platform.platform.slug === 'web' && <MdWebAsset size={'1.5em'} />}
            </div>
          ))}
        </div>
        <a
          href={game?.metacritic_url}
          target="_blank"
          className={`btn-success btn-sm btn justify-self-end ${game?.metacritic < 75 && 'btn-warning'} ${
            game?.metacritic < 50 && 'btn-error'
          }`}
          rel="noreferrer"
        >
          <p className="font-bold">{game?.metacritic}</p>
        </a>
      </div>

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
                <p>ESRB Rating:</p>
                <p>{game?.esrb_rating?.name}</p>
                <p>Released:</p>
                <p>{game?.released}</p>
                <p>Genres:</p>
                <p>{game?.genres?.reduce((string: string, obj: IGame) => `${string} ${obj.name},`, '').slice(0, -1)}</p>
                <p>Platforms:</p>
                <p>
                  {game?.platforms
                    ?.reduce((string: string, obj: IGame) => `${string} ${obj.platform.name},`, '')
                    .slice(0, -1)}
                </p>
                <p>Developers:</p>
                <p>
                  {game?.developers?.reduce((string: string, obj: IGame) => `${string} ${obj.name},`, '').slice(0, -1)}
                </p>
                <p>Publishers:</p>
                <p>
                  {game?.publishers?.reduce((string: string, obj: IGame) => `${string} ${obj.name},`, '').slice(0, -1)}
                </p>
              </div>
            ) : (
              <p className="h-16 overflow-y-scroll pr-2">{game?.description_raw}</p>
            )}
            <div className="card-actions justify-end">
              <button
                onClick={() => game && (isInCart ? updateCart.remove(game) : updateCart.add(game))}
                className={`btn-primary btn w-full flex-nowrap justify-between gap-2 ${isInCart && 'btn-error'}`}
              >
                <div className="text-lg">£{game?.price}</div>
                <div className="flex flex-nowrap items-center gap-2">
                  {isInCart && (
                    <>
                      Remove From Cart <MdOutlineRemoveShoppingCart size={'1.5em'} />
                    </>
                  )}

                  {!isInCart && (
                    <>
                      Add To Cart <MdOutlineAddShoppingCart size={'1.5em'} />
                    </>
                  )}
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Game;
