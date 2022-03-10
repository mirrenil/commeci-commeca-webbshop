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

    // if the cartItem has the same ID as one of the objects in the cart array
    if (cart.map((item) => item.id).includes(cartItem.id)) {
      cart.map((item) => item.quantity++);
      console.log("yes, ");
      // console.log("cart: " + cart.map((item) => item.id));
      // console.log("cartItem: " + cartItem.id);
      console.log(cart);
    } else {
      console.log("no");
      // console.log("cart: " + cart.map((item) => item.id));
      // console.log("cartItem: " + cartItem.id);
      setCart([...cart, cartItem]);
      console.log(cart);
    }
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
