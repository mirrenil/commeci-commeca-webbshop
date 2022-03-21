import { ItemData, useCart } from "./context/CartContextProvider";

export const sumQuantity = (itemData: ItemData[]) => {
  let sum = 0;
  for (let i = 0; i < itemData.length; i++) {
    sum += itemData[i].quantity;
  }
  return sum;
};

export const UseSumTotal = (itemData: ItemData[], includeShipping: boolean) => {
  const { shippmentProvider } = useCart();
  let sum = 0;
  for (let i = 0; i < itemData.length; i++) {
    sum += itemData[i].price * itemData[i].quantity;
  }

  if (includeShipping) {
    sum += shippmentProvider.cost;
  }
  return sum;
};

export const calculateVat = (itemData: ItemData[]) => {
  const vatRate = 0.25;
  let sum = 0;
  sum = Math.round(UseSumTotal(itemData, false) * vatRate);
  return sum;
};

export const sumProductPrice = (product: ItemData) => {
  let sum = 0;
  sum += product.price * product.quantity;
  return sum;
};

export const numWithSpaces = (num: number) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
};
