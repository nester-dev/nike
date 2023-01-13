import emptybag from '../../assets/emptybag.png';
import { ArrowLeftIcon } from '@heroicons/react/24/solid';
import { useToggleCart } from '~/components/hooks/useToggleCart';

const CartEmpty = () => {
  const toggleCart = useToggleCart();
  return (
    <div className='flex items-center justify-center flex-col h-screen px-11 text-center gap-7'>
      <img
        className='w-40 lg:w-36 sm:w-28 h-auto object-fill transition-all duration-300 hover:scale-110'
        src={emptybag}
        alt='empty bag'
      />
      <button
        onClick={() => toggleCart(false)}
        className='button-theme bg-gradient-to-b from-amber-500 to-orange-500 shadow-lg shadow-orange-500 flex items-center justify-center text-slate-900 py-2 gap-3 text-sm px-5 font-semibold active:scale-110'
        type='button'
      >
        <ArrowLeftIcon className='w-5 h-5 text-slate-900' />
        <span>Back To Nike Store</span>
      </button>
    </div>
  );
};

export default CartEmpty;
