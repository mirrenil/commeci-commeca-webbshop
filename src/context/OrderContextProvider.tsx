import { createContext, FC, useContext, useState } from "react";
import { FormValues } from "../components/CheckoutPage";
import { ShippingProvider } from "../ShippingProviderData";
import { ItemData, useCart } from "./CartContextProvider";

interface OrderData extends FormValues {
  orderNo: string;
  boughtItems: ItemData[];
  deliveryOption?: ShippingProvider;
}

interface ContextValue {
  order: OrderData[];
  // shippmentProvider: ShippingProvider;
  createOrder: (values: FormValues) => void;
  generateOrderNum: () => string;
}

export const OrderContext = createContext<ContextValue>({
  order: [],
  // shippmentProvider: {
  //   providerName: "",
  //   cost: 0,
  //   deliveryTime: "",
  //   logoImage: "",
  // },
  createOrder: () => {},
  generateOrderNum: () => "",
});

const OrderProvider: FC = (props) => {
  const { cart } = useCart();
  const [order, setOrder] = useState<OrderData[]>([]);

  const createOrder = (formValues) => {
    order.length = 0;
    const boughtItems = [...cart];
    let updatedOrder: OrderData = {
      ...formValues,
      boughtItems: boughtItems,
      // deliveryOption: provider,
      orderNo: generateOrderNum(),
    };
    setOrder([...order, updatedOrder]);
  };
  // console.log(order);

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

  return (
    <OrderContext.Provider
      value={{
        order,
        // shippmentProvider,
        createOrder,
        generateOrderNum,
      }}
    >
      {props.children}
    </OrderContext.Provider>
  );
};

export default OrderProvider;
export const useOrder = () => useContext(OrderContext);
