import CartCount from '~/components/cart/CartCount';
import CartEmpty from '~/components/cart/CartEmpty';
import CartItem from '~/components/cart/CartItem';
import { useAppSelector } from '~/components/hooks/useAppSelector';

const Cart = () => {
  const { isOpen, cartItems } = useAppSelector((state) => state.cart);
  return (
    <div
      className={`fixed top-0 right-0 left-0 bottom-0 blur-effect-theme w-full h-screen opacity-100 z-[250] ${
        isOpen ? 'opacity-100 visible translate-x-0' : 'opacity-0 invisible translate-x-8'
      }`}
    >
      <div className={`blur-effect-theme h-screen max-w-xl w-full absolute right-0`}>
        <CartCount />
        {!cartItems.length ? (
          <CartEmpty />
        ) : (
          <div>
            <div className='flex items-start justify-start flex-col gap-y-7 lg:gap-y-5 overflow-y-scroll h-[81vh] scroll-smooth scroll-hidden'>
              {cartItems?.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
