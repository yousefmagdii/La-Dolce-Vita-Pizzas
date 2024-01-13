import { createSlice } from '@reduxjs/toolkit';

const getCounterFromLocalStorage = () => {
  const storedValue = localStorage.getItem('counter');
  return storedValue ? parseInt(storedValue, 10) : 0;
};

const getCartFromLocalStorage = () => {
  const storedCart = localStorage.getItem('cart');
  return storedCart ? JSON.parse(storedCart) : [];
};

// const getItemCounterFromLocalStorage = () => {
//   const storedCart = localStorage.getItem('itemCounter');
//   return storedCart ? JSON.parse(storedCart) : [];
// };

const initialState = {
  cart: getCartFromLocalStorage(),
  counter: getCounterFromLocalStorage(),
  // itemCounter: getItemCounterFromLocalStorage(),
  isLoading: false,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const [name, unitPrice, imageUrl] = action.payload;

      const existingItem = state.cart.find((item) => item.name === name);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cart = [
          ...state.cart,
          { name, unitPrice, imageUrl, quantity: 1 },
        ];
      }
      state.counter += 1;

      // state.cart = [...state.cart, action.payload];
      // const newItemIndex = action.payload;
      // state.itemCounter = {
      //   ...state.itemCounter,
      //   [newItemIndex]: (state.itemCounter[newItemIndex] || 0) + 1,
      // };

      // Save the updated counter and cart to local storage
      // localStorage.setItem('itemCounter', JSON.stringify(state.itemCounter));
      localStorage.setItem('counter', state.counter.toString());
      localStorage.setItem('cart', JSON.stringify(state.cart));
    },
    deleteItem: (state, action) => {
      const { name } = action.payload;

      const existingItem = state.cart.find((item) => item.name === name);

      if (existingItem) {
        state.counter -= existingItem.quantity;
        state.cart = state.cart.filter((item) => item.name !== name);
      }
      // Save the updated counter and cart to local storage
      localStorage.setItem('counter', state.counter.toString());
      localStorage.setItem('cart', JSON.stringify(state.cart));
    },
    deleteOneItem: (state, action) => {
      const { name } = action.payload;

      const existingItem = state.cart.find((item) => item.name === name);

      if (existingItem) {
        // If the item has a quantity greater than 1, decrement the quantity
        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1;
        } else {
          // If the quantity is 1 or less, remove the entire item from the cart
          state.cart = state.cart.filter((item) => item.name !== name);
        }

        state.counter -= 1;
      }
      // Save the updated counter and cart to local storage
      localStorage.setItem('counter', state.counter.toString());
      localStorage.setItem('cart', JSON.stringify(state.cart));
    },
    resetCart(state) {
      state.counter = 0;
      // state.itemCounter = 0;
      state.cart = [];
      // Save the updated counter and cart to local storage
      localStorage.removeItem('counter');
      // localStorage.removeItem('itemCounter');
      localStorage.removeItem('cart');
    },
    // countItems(state, action) {},
    // counterOfOneItem(state, action) {},
  },
});

export const { addItem, deleteItem, deleteOneItem, resetCart } =
  cartSlice.actions;
export default cartSlice.reducer;
