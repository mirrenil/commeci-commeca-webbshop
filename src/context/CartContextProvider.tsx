import { createContext, FC, useContext, useState } from "react";
import { ProductData } from "../ProductData";

interface CartItemData extends ProductData {
  quantity: number;
}

interface ContextValue {
  cart: CartItemData[];
  addToCart: (product: ProductData) => void;
}

export const CartContext = createContext<ContextValue>({
  cart: [],
  addToCart: () => {},
});

const CartProvider: FC = (props) => {
  const [cart, setCart] = useState<CartItemData[]>([]);

  const addToCart = async (product: ProductData) => {
    const cartItem: CartItemData = { ...product, quantity: 1 };
    setCart([...cart, cartItem]);
  };

  console.log(cart);

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;

export const useCart = () => useContext(CartContext);
