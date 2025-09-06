import { createContext, useState, useContext } from "react";
const RENT_PRICE = import.meta.env.VITE_RENT_PRICE || 4.99;

const CartContext = createContext();

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);

  const addItem = (movie) => {
    setItems((prev) =>
      prev.find((m) => m.id === movie.id) ? prev : [...prev, movie]
    );
  };

  const removeItem = (movieId) => {
    setItems((prevItems) => prevItems.filter((movie) => movie.id !== movieId));
  };

  const clearCart = () => {
    setItems([]);
  };

  const totalPrice = (items.length * RENT_PRICE).toFixed(2);

  return (
    <CartContext.Provider
      value={{ items, addItem, removeItem, clearCart, totalPrice }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCartContext() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCartContext must be used within a CartProvider");
  }
  return context;
}
