import { ChevronDoubleLeftIcon, XMarkIcon } from '@heroicons/react/24/solid';
import { useToggleCart } from '~/components/hooks/useToggleCart';
import { useAppDispatch } from '~/components/hooks/useAppDispatch';
import { clearCart } from '~/app/CartSlice';

const CartCount = () => {
  const toggleCart = useToggleCart();
  const dispatch = useAppDispatch();

  return (
    <div className='bg-white h-11 flex items-center justify-between px-3 sticky top-0 right-0 left-0 w-full'>
      <div className='flex items-center gap-3'>
        <div className='grid items-center cursor-pointer'>
          <ChevronDoubleLeftIcon
            className='w-5 h-5 text-slate-900 hover:text-orange-500 stroke-[2]'
            onClick={() => toggleCart(false)}
          />
        </div>
        <div className='grid items-center'>
          <h2 className='text-base font-medium text-slate-900'>
            Your cart{' '}
            <span className='bg-theme-cart rounded px-1 py-0.5 text-slate-100 font-normal text-sm'>
              (Items)
            </span>
          </h2>
        </div>
      </div>
      <div className='flex items-center'>
        <button
          onClick={() => dispatch(clearCart())}
          className='rounded bg-theme-cart active:scale-90 p-0.5'
          type='button'
        >
          <XMarkIcon className='w-5 h-5 text-white stroke-[2]' />
        </button>
      </div>
    </div>
  );
};

export default CartCount;
