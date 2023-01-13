import { FC } from 'react';
import { ISneakers } from '~/types/types';
import { MinusIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline';
import { useAppDispatch } from '~/components/hooks/useAppDispatch';
import { decreaseQuantity, increaseQuantity, removeFromCart } from '~/app/CartSlice';

interface ICartItemProps {
  item: ISneakers;
}
const CartItem: FC<ICartItemProps> = ({
  item: { id, title, text, img, price, quantity, color, shadow },
}) => {
  const dispatch = useAppDispatch();

  return (
    <div className='flex items-center justify-between w-full px-5'>
      <div className='flex items-center gap-5'>
        <div
          className={`bg-gradient-to-b ${color} ${shadow} relative rounded p-3 hover:scale-105 transition-all duration-75 ease-in-out grid items-center`}
        >
          <img className='w-36 h-auto object-fill lg:w-28' src={img} alt='sneaker item' />
        </div>
        <div className='grid items-center gap-4'>
          <div className='grid items-center leading-none'>
            <h2 className='font-medium text-lg text-slate-900 lg:text-sm'>{title}</h2>
            <p className='text-sm text-slate-800 lg:text-xs'>{text}</p>
          </div>
          <div className='flex items-center justify-around w-full '>
            <button
              onClick={() => dispatch(decreaseQuantity(id))}
              className='w-6 h-6 lg:w-5 lg:h-5 flex items-center justify-center active:scale-90 bg-theme-cart rounded'
              type='button'
            >
              <MinusIcon className='w-5 h-5 lg:w-4 lg:h-4 text-white stroke-[2]' />
            </button>
            <div className='bg-theme-cart rounded text-white font-medium lg:text-xs w-7 h-6 lg:h-5 lg:w-6 flex items-center justify-center'>
              {quantity}
            </div>
            <button
              onClick={() => dispatch(increaseQuantity(id))}
              className='w-6 h-6 lg:w-5 lg:h-5 flex items-center justify-center active:scale-90 bg-theme-cart rounded'
              type='button'
            >
              <PlusIcon className='w-5 h-5 lg:w-4 lg:h-4 text-white stroke-[2]' />
            </button>
          </div>
        </div>
      </div>
      <div className='grid items-center g-5'>
        <div className='grid items-center justify-center'>
          <h2 className='text-lg lg:text-base text-slate-900 font-medium'>${+price * quantity!}</h2>
        </div>
        <div>
          <button
            className='bg-theme-cart rounded text-white p-1 lg:p-0.5 grid items-center justify-center'
            type='button'
            onClick={() => dispatch(removeFromCart({ id, title }))}
          >
            <TrashIcon className='w5 h-5 text-white' />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
