import { createContext, FC, useContext, useState } from "react";
import { FormValues } from "../components/CheckoutPage";
import { useLocalStorageState } from "../components/hooks/useLocalStorageState";
import { ProductData } from "../ProductData";

interface CartItemData extends ProductData {
  quantity: number;
}

interface OrderData extends FormValues {
  orderNo: string;
  boughtItems: CartItemData[];
}

interface ContextValue {
  cart: CartItemData[];
  order: OrderData[];
  addToCart: (product: ProductData) => void;
  sumCartQuantity: () => number;
  sumCartAmount: () => number;
  sumProductPrice: (product: CartItemData) => number;
  onAddQuantity: (product: CartItemData) => void;
  onReduceQuantity: (product: CartItemData) => void;
  removeFromCart: (product: CartItemData) => void;
  numWithSpaces: (num: number) => string;
  createOrder: (values: FormValues) => void;
  generateOrderNum: () => string;
  emptyCart: () => void;
}

export const CartContext = createContext<ContextValue>({
  cart: [],
  order: [],
  addToCart: () => {},
  sumCartQuantity: () => 0,
  sumCartAmount: () => 0,
  sumProductPrice: () => 0,
  onAddQuantity: () => {},
  onReduceQuantity: () => {},
  removeFromCart: () => {},
  numWithSpaces: () => "", // this function can be written in the product context as well for formatting the price
  createOrder: () => {},
  generateOrderNum: () => "",
  emptyCart: () => {},
});

const CartProvider: FC = (props) => {
  // const [cart, setCart] = useState<CartItemData[]>([]); removed and replaced with the below one that save to LS
  const [cart, setCart] = useLocalStorageState<CartItemData[]>([], "cc-cart");
  const [order, setOrder] = useState<OrderData[]>([]);

  const createOrder = (formValues) => {
    order.length = 0;
    const boughtItems = [...cart];
    let updatedOrder: OrderData = {
      ...formValues,
      boughtItems: boughtItems,
      orderNo: generateOrderNum(),
    };
    setOrder([...order, updatedOrder]);
  };
  console.log(order);

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
    // console.log(cart);
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

  const numWithSpaces = (num: number) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  };

  const generateOrderNum = () => {
    const yy: string = new Date().getFullYear().toString().substr(-2);
    const mm: number = new Date().getMonth() + 1;
    const dd: number = new Date().getDate();
    const formattedDate =
      yy + (mm > 9 ? "" : "0") + mm + (dd > 9 ? "" : "0") + dd;

    const randomNum: number = Math.floor(Math.random() * 100000);
    const orderNum: string = formattedDate + "-" + randomNum;
    return orderNum;
  };

  const emptyCart = () => {
    cart.length = 0;
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        order,
        addToCart,
        sumCartQuantity,
        sumCartAmount,
        sumProductPrice,
        onAddQuantity,
        onReduceQuantity,
        removeFromCart,
        numWithSpaces,
        createOrder,
        generateOrderNum,
        emptyCart,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
export const useCart = () => useContext(CartContext);
