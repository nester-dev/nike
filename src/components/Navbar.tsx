import logo from '../assets/logo.png';
import { HeartIcon, MagnifyingGlassIcon, ShoppingBagIcon } from '@heroicons/react/24/outline';
import { useEffect, useState } from 'react';
import { useToggleCart } from '~/components/hooks/useToggleCart';
import { useAppSelector } from '~/components/hooks/useAppSelector';
const Navbar = () => {
  const toggleCart = useToggleCart();
  const [navState, setNavState] = useState(false);
  const { cartItems } = useAppSelector((state) => state.cart);

  const onPageScroll = () => {
    window.scrollY > 30 ? setNavState(true) : setNavState(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', onPageScroll);

    return () => window.removeEventListener('scroll', onPageScroll);
  }, []);

  return (
    <header
      className={
        !navState
          ? 'absolute top-7 left-0 right-0 opacity-100 z-50'
          : 'fixed top-0 left-0 right-0 h-[9vh] flex items-center justify-center opacity-100 z-[200] blur-effect-theme'
      }
    >
      <nav className='flex items-center justify-between nike-container'>
        <div className='flex items-center'>
          <img
            className={`w-16 h-auto ${navState && 'filter brightness-0'}`}
            src={logo}
            alt='logo'
          />
        </div>
        <ul className='flex items-center justify-center gap-2'>
          <li className='grid items-center'>
            <MagnifyingGlassIcon
              className={`icon-style hover:scale-110 transition-all duration-300 ${
                navState && 'text-slate-900'
              }`}
            />
          </li>
          <li className='grid items-center'>
            <HeartIcon
              className={`icon-style hover:scale-110 transition-all duration-300 ${
                navState && 'text-slate-900'
              }`}
            />
          </li>
          <li className='grid items-center'>
            <button
              className='border-none outline-none active:scale-110 transition-all relative duration-300'
              type='button'
              onClick={() => toggleCart(true)}
            >
              <ShoppingBagIcon
                className={`icon-style hover:scale-110 transition-all duration-300 ${
                  navState && 'text-slate-900'
                }`}
              />
              <div
                className={`absolute top-4 right-0 shadow w-4 h-4 text-[0.65rem] leading-tight font-medium rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-all duration-300 ${
                  navState
                    ? 'bg-black bg-slate-900 text-slate-100 shadow-slate-900'
                    : 'bg-slate-100 text-slate-900 shadow-slate-900'
                }`}
              >
                {cartItems.length}
              </div>
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
