import { createContext, FC, useContext, useState } from "react";
import { FormValues } from "../components/CheckoutFormContainer";
import { ShippingProvider } from "../ShippingProviderData";
import { ItemData, useCart } from "./CartContextProvider";

interface OrderData extends FormValues {
  orderNo: string;
  boughtItems: ItemData[];
  shipmentOption: ShippingProvider;
  paymentMethod: string;
}

interface ContextValue {
  order: OrderData[];
  createOrder: (values: FormValues) => void;
  generateOrderNum: () => string;
}

export const OrderContext = createContext<ContextValue>({
  order: [],
  createOrder: () => {},
  generateOrderNum: () => "",
});

const OrderProvider: FC = (props) => {
  const { cart, shipper, paymentMethod } = useCart();
  const [order, setOrder] = useState<OrderData[]>([]);

  const createOrder = (formValues) => {
    const boughtItems = [...cart];
    let updatedOrder: OrderData = {
      ...formValues,
      boughtItems: boughtItems,
      shipmentOption: shipper,
      paymentMethod: paymentMethod,
      orderNo: generateOrderNum(),
    };
    setOrder([updatedOrder]);
  };
  console.log(order);

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
