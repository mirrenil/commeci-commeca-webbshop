import { createContext, FC, useContext } from "react";
import { useLocalStorageState } from "../components/hooks/useLocalStorageState";
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
  removeFromCart: (product) => void;
  numWithSpaces: (num: number) => string;
}

export const CartContext = createContext<ContextValue>({
  cart: [],
  addToCart: () => {},
  sumCartQuantity: () => 0,
  sumCartAmount: () => 0,
  sumProductPrice: () => 0,
  onAddQuantity: () => {},
  onReduceQuantity: () => {},
  removeFromCart: () => {},
  numWithSpaces: () => "", // this function can be written in the product context as well for formatting the price
});

const CartProvider: FC = (props) => {
  // const [cart, setCart] = useState<CartItemData[]>([]); removed and replaced with the below one that save to LS
  const [cart, setCart] = useLocalStorageState<CartItemData[]>([], "cc-cart");

  const addToCart = async (product: ProductData) => {
    // if (cart.map((item) => item.id).includes(product.id))
    if (cart.some((item) => item.id === product.id)) {
      const updatedCart = cart.map((item) => {
        if (product.id !== item.id) return item;
        return { ...item, quantity: item.quantity + 1 };
      });
      setCart(updatedCart);
      setCart(updatedCart); // update to LS
    } else {
      const cartItem: CartItemData = { ...product, quantity: 1 };
      setCart([...cart, cartItem]);
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
    return sum;
    // return cart.reduce((sum, item) => sum + item.quantity, 0);
  };

  const sumCartAmount = () => {
    let sum = 0;
    for (let i = 0; i < cart.length; i++) {
      sum += cart[i].price * cart[i].quantity;
    }
    return sum;
  };

  const sumProductPrice = (product: CartItemData) => {
    let sum = 0;
    sum += product.price * product.quantity;
    return sum;
  };

  const onAddQuantity = (product: CartItemData) => {
    const updatedQuantity = cart.map((item) => {
      if (product.id !== item.id) return item;
      return { ...item, quantity: item.quantity + 1 };
    });
    setCart(updatedQuantity);
  };

  const onReduceQuantity = (product: CartItemData) => {
    const updatedQuantity = cart.map((item) => {
      if (product.id === item.id && item.quantity > 1)
        return { ...item, quantity: item.quantity - 1 };
      return item;
    });
    setCart(updatedQuantity);
  };

  const removeFromCart = (product: CartItemData) => {
    if (cart.find((item) => item.id === product.id)) {
      const updatedCart = cart.filter((item) => item.id !== product.id);
      setCart(updatedCart);
    }
  };

  function numWithSpaces(num: number) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }

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
        removeFromCart,
        numWithSpaces,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
export const useCart = () => useContext(CartContext);
