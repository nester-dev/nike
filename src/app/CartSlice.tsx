import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICartState, ISneakers } from '~/types/types';
import toast from 'react-hot-toast';

const initialState: ICartState = {
  isOpen: false,
  cartItems: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart') || 'null') : [],
};

const CartSlice = createSlice({
  initialState,
  name: 'cart',
  reducers: {
    toggleCart: (state, action: PayloadAction<boolean>) => {
      state.isOpen = action.payload;
    },
    addToCart: (state, action: PayloadAction<ISneakers>) => {
      const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id);

      if (itemIndex >= 0) {
        state.cartItems[itemIndex].quantity! += 1;

        toast.success('Item quantity increased');
      } else {
        const temp = { ...action.payload, quantity: 1 };
        state.cartItems.push(temp);

        toast.success(`${action.payload.title} added to Cart`);
      }

      localStorage.setItem('cart', JSON.stringify(state.cartItems));
    },
    removeFromCart: (state, action: PayloadAction<{ id: string; title: string }>) => {
      state.cartItems = state.cartItems.filter((item) => action.payload.id !== item.id);
      localStorage.setItem('cart', JSON.stringify(state.cartItems));

      toast.success(`${action.payload.title} removed from Cart!`);
    },
    clearCart: (state) => {
      state.cartItems = [];
      localStorage.setItem('cart', JSON.stringify(state.cartItems));

      toast.success('Cart cleared');
    },
    increaseQuantity: (state, action: PayloadAction<string>) => {
      const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload);

      if (itemIndex >= 0) {
        state.cartItems[itemIndex].quantity! += 1;
        localStorage.setItem('cart', JSON.stringify(state.cartItems));

        toast.success('Item quantity increased');
      }
    },
    decreaseQuantity: (state, action: PayloadAction<string>) => {
      const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload);

      if (state.cartItems[itemIndex].quantity! > 1) {
        state.cartItems[itemIndex].quantity! -= 1;
        localStorage.setItem('cart', JSON.stringify(state.cartItems));

        toast.success('Item quantity decreased');
      }
    },
  },
});

export const {
  toggleCart,
  addToCart,
  removeFromCart,
  clearCart,
  increaseQuantity,
  decreaseQuantity,
} = CartSlice.actions;
export default CartSlice.reducer;
