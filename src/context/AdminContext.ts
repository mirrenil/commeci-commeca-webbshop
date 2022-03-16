
// import React, { FC } from "react";
// import { useLocalStorageState } from "../components/hooks/useLocalStorageState";
// import { ProductData } from "../ProductData";

// interface AdminProductData extends ProductData {
//   id: number;
// }
// interface AdminContextValue {
//   products: AdminProductData[];
//   removeProduct: (product) => void;
//   editProduct: (product) => void;
//   addProduct: (product: ProductData) => void;
//   numWithSpaces: (num: number) => string;
// }

// export const AdminContext = React.createContext<AdminContextValue>({
//   products: [],
//   removeProduct: () => {},
//   editProduct: () => {},
//   addProduct: () => {},
//   numWithSpaces: () => "",
// });

// const AdminProvider: FC = (props) => {
//   const [productsInStock, setProductsInStock] = useLocalStorageState<
//     AdminProductData[]
//   >([], "admin");
//   const removeProduct = (product: AdminProductData) => {
//     if (productsInStock.find((item) => item.id === product.id)) {
//       const updatedProductList = productsInStock.filter(
//         (item) => item.id !== product.id
//       );
//       setProductsInStock(updatedProductList);
//     }
//     const editProduct = (product: AdminProductData) => {
//       const updatedProductList = productsInStock.map((item) => {
//         if (product.id !== item.id) return item;
//         return { ...item, quantity: item.id + 1 };
//       });
//       setProductsInStock(updatedProductList);
//     };
//   };
//   function numWithSpaces(num: number) {
//     return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
//   }

//   return (
//     <AdminContextValue.Provider 
//       value={{
//         productsInStock
//         removeProduct
//         editProduct
//         addProduct
//         numWithSpaces
//       }}
//     ></AdminContextValue.Provider>
//   );
// };
