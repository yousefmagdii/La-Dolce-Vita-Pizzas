import { createContext, useContext, useState } from 'react';

const CartContext = createContext();
const handleAddItem = (name, unitPrice, imageUrl, index) => {
  // Implement the logic to add items to the cart
  console.log(name, unitPrice, imageUrl, index);
};
function CartProvider({ children }) {
  return (
    <CartContext.Provider value={{ handleAddItem }}>
      {children}
    </CartContext.Provider>
  );
}

function useCart() {
  const context = useContext(CartContext);
  if (context === undefined)
    throw new Error('searchContext was used outside of CartProvider');
  return context;
}
export { CartProvider, useCart };
