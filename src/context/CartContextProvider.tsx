import { createContext, FC, useContext, useState } from "react";
import { ProductData } from "../ProductData";

interface CartItemData extends ProductData {
  quantity: number;
}
interface ContextValue {
  cart: CartItemData[];
  addToCart: (product: ProductData) => void;
  sumCartQuantity: () => number;
  sumCartAmount: () => number;
  sumProductPrice: (product) => number;
  onAddQuantity: (product) => void;
  onReduceQuantity: (product) => void;
}

export const CartContext = createContext<ContextValue>({
  cart: [],
  addToCart: () => {},
  sumCartQuantity: () => 0,
  sumCartAmount: () => 0,
  sumProductPrice: () => 0,
  onAddQuantity: () => {},
  onReduceQuantity: () => {},
});

const CartProvider: FC = (props) => {
  const [cart, setCart] = useState<CartItemData[]>([]);

  const addToCart = async (product: ProductData) => {
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
    let sum = 0;
    for (let i = 0; i < cart.length; i++) {
      sum += cart[i].quantity;
    }
    sumCartAmount();
    console.log(sum);
    return sum;
    // return cart.reduce((sum, item) => sum + item.quantity, 0);
  };

  const sumCartAmount = () => {
    let sum = 0;
    for (let i = 0; i < cart.length; i++) {
      sum += cart[i].price * cart[i].quantity;
      console.log(sum);
    }
    console.log("total :" + sum);
    return sum;
  };

  const sumProductPrice = (product) => {
    let sum = 0;
    for (let i = 0; i < cart.length; i++) {
      sum += product.price * product.quantity;
    }
    return sum;
  };

  const onAddQuantity = (product) => {
    if (cart.some((item) => item.id === product.id)) {
      const updatedQuantity = cart.map((item) => {
        if (product.id !== item.id) return item;
        return { ...item, quantity: item.quantity + 1 };
      });
      setCart(updatedQuantity);
    }
  };

  const onReduceQuantity = (product) => {
    if (cart.some((item) => item.id === product.id)) {
      const updatedQuantity = cart.map((item) => {
        if (product.id !== item.id) return item;
        return { ...item, quantity: item.quantity - 1 };
      });
      setCart(updatedQuantity);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        sumCartQuantity,
        sumCartAmount,
        sumProductPrice,
        onAddQuantity,
        onReduceQuantity,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;

export const useCart = () => useContext(CartContext);
