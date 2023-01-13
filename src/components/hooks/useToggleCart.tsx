import { useAppDispatch } from '~/components/hooks/useAppDispatch';
import { toggleCart } from '~/app/CartSlice';

export const useToggleCart = () => {
  const dispatch = useAppDispatch();

  return (value: boolean) => {
    value ? document.body.classList.add('lock') : document.body.classList.remove('lock');

    dispatch(toggleCart(value));
  };
};
