import { createContext, useContext, useMemo, useState } from "react";
import { products } from "../data/products";

const CartContext = createContext(null);

function getProductById(productId) {
  return products.find((product) => product.id === productId);
}

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);

  const addToCart = (productId, quantity = 1) => {
    const product = getProductById(productId);
    if (!product || quantity < 1) {
      return;
    }

    setItems((currentItems) => {
      const existingItem = currentItems.find((item) => item.productId === productId);

      if (existingItem) {
        return currentItems.map((item) =>
          item.productId === productId
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }

      return [...currentItems, { productId, quantity }];
    });
  };

  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      setItems((currentItems) => currentItems.filter((item) => item.productId !== productId));
      return;
    }

    setItems((currentItems) =>
      currentItems.map((item) =>
        item.productId === productId ? { ...item, quantity } : item
      )
    );
  };

  const cartDetails = useMemo(
    () =>
      items
        .map((item) => {
          const product = getProductById(item.productId);
          if (!product) {
            return null;
          }

          return {
            ...item,
            product,
            lineTotal: product.price * item.quantity
          };
        })
        .filter(Boolean),
    [items]
  );

  const cartCount = useMemo(
    () => cartDetails.reduce((total, item) => total + item.quantity, 0),
    [cartDetails]
  );

  const cartTotal = useMemo(
    () => cartDetails.reduce((total, item) => total + item.lineTotal, 0),
    [cartDetails]
  );

  const value = {
    items: cartDetails,
    cartCount,
    cartTotal,
    addToCart,
    updateQuantity
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }

  return context;
}
