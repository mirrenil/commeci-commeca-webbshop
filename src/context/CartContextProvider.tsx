import { createContext, FC, MouseEvent, useContext, useState } from "react";
import { ProductData } from "../ProductData";

interface CartItemData extends ProductData {
  quantity: number;
}
interface ContextValue {
  cart: CartItemData[];
  addToCart: (product: ProductData) => void;
  sumCartQuantity: () => number;
}

export const CartContext = createContext<ContextValue>({
  cart: [],
  addToCart: () => {},
  sumCartQuantity: () => 0,
});

const CartProvider: FC = (props) => {
  const [cart, setCart] = useState<CartItemData[]>([]);

  const addToCart = async (product: ProductData) => {
    console.log("called add to cart");
    const cartItem: CartItemData = { ...product, quantity: 1 };
    if (cart.map((item) => item.id).includes(cartItem.id)) {
      cart.map((item) => item.quantity++);
      console.log("added :" + cartItem.quantity);
    } else {
      setCart([...cart, cartItem]);
      console.log("added :" + cartItem.quantity);
    }
    console.log(cart);
  };

  const sumCartQuantity = () => {
    console.log("called sum");
    let sum = 0;
    for (let i = 0; i < cart.length; i++) {
      sum += cart[i].quantity;
    }
    console.log(sum);
    return sum;
    // return cart.reduce((sum, item) => sum + item.quantity, 0);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, sumCartQuantity }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;

export const useCart = () => useContext(CartContext);
