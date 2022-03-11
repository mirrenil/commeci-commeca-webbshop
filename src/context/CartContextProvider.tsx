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
    // if (cart.some(item => item.id === product.id))
    if (cart.map((item) => item.id).includes(product.id)) {
      const updatedCart = cart.map((item) => {
        if (product.id !== item.id) return item;
        return { ...item, quantity: item.quantity + 1 };
      });

      setCart(updatedCart);
    } else {
      const cartItem: CartItemData = { ...product, quantity: 1 };
      setCart([...cart, cartItem]);
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
