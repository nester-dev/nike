import { ISneakers } from '~/types/types';
import { ShoppingBagIcon, StarIcon } from '@heroicons/react/24/solid';
import { useAppDispatch } from '~/components/hooks/useAppDispatch';
import { addToCart } from '~/app/CartSlice';
import { useToggleCart } from '~/components/hooks/useToggleCart';

interface IItemProps {
  isPopular?: boolean;
  item: ISneakers;
}

const Item = ({
  isPopular,
  item: { id, color, shadow, title, text, img, btn, rating, price },
}: IItemProps) => {
  const dispatch = useAppDispatch();
  const openCart = useToggleCart();

  const onAddToCart = () => {
    const item = { id, color, shadow, title, text, img, btn, rating, price };

    dispatch(addToCart(item));
    openCart(true);
  };

  return (
    <div
      id={id}
      className={`relative bg-gradient-to-b ${color} ${shadow} grid items-center ${
        isPopular ? 'justify-items-start' : 'justify-items-center'
      } rounded-xl py-4 px-5 transition-all duration-700 ease-in-out w-full hover:scale-105`}
    >
      <div
        className={`grid items-center ${
          isPopular ? 'justify-items-start' : 'justify-items-center'
        }`}
      >
        <h3 className='text-slate-200 text-xl lg:text-lg md:text-base font-medium filter drop-shadow'>
          {title}
        </h3>
        <p className='text-slate-200 filter drop-shadow text-base md:text-sm font-normal'>{text}</p>

        <div className='flex items-center justify-between w-28 my-2'>
          <div className='flex items-center bg-white/80 px-1 rounded blur-effect-theme'>
            <p className='text-black text-sm font-medium'>${price}</p>
          </div>
          <div className='flex items-center gap-1'>
            <StarIcon className='icon-style w-5 h-5 md:w-4 md:h-4' />
            <p className='md:text-sm font-normal text-slate-100'>{rating}</p>
          </div>
        </div>

        <div className='flex items-center gap-3'>
          <button
            className='bg-white opacity-90 blur-effect-theme button-theme p-0.5 shadow shadow-sky-200'
            type='button'
            onClick={() => onAddToCart()}
          >
            <ShoppingBagIcon className='icon-style text-slate-900' />
          </button>
          <button
            className='bg-white opacity-90 blur-effect-theme button-theme px-2 py-1 shadow shadow-sky-200 text-sm text-black'
            type='button'
            onClick={() => onAddToCart()}
          >
            {btn}
          </button>
        </div>
      </div>
      <div
        className={`flex items-center ${isPopular ? 'absolute top-5 right-1' : 'justify-center'}`}
      >
        <img
          className={`transitions-theme hover:-rotate-12 ${
            isPopular ? 'h-auto w-64 lg:w-56 md:w-48 -rotate-[35deg]' : 'h-36 w-64'
          }`}
          src={img}
          alt='sneakers'
        />
      </div>
    </div>
  );
};

export default Item;
