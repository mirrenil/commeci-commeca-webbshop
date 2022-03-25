import { createContext, FC, useContext, useState } from "react";
import { useLocalStorageState } from "../components/hooks/useLocalStorageState";
import { ProductData, productData } from "../ProductData";

interface AdminContextValue {
  products: ProductData[];
  isEdit: boolean;
  setEdit: React.Dispatch<React.SetStateAction<boolean>>;
  saveProduct: (product: ProductData) => void;
  addProduct: (product: ProductData) => void;
  removeProduct: (product: ProductData) => void;
  inputChangeHandler: (event, product: ProductData) => void; // function not in use anywhere
}

export const ProductContext = createContext<AdminContextValue>({
  products: [],
  isEdit: false,
  addProduct: () => {},
  setEdit: () => {},
  saveProduct: () => {},
  removeProduct: () => {},
  inputChangeHandler: () => {},
});

const ProductProvider: FC = (props) => {
  const [products, setProducts] = useLocalStorageState(productData, "adminLS");
  const [isEdit, setEdit] = useState(false);

  const addProduct = (newProduct: ProductData) => {
    console.log(newProduct);
    let newProductList = [...products];
    newProductList.push(newProduct);
    setProducts(newProductList);
    console.log(products);
  };

  const removeProduct = (productToBeRemoved: ProductData) => {
    const updatedProductList = products.filter(
      (product) => productToBeRemoved.id !== product.id
    );
    setProducts(updatedProductList);
  };

  const saveProduct = (editedProduct: ProductData) => {
    const productExists = products.find((item) => item.id === editedProduct.id);
    if (productExists) {
      setProducts(
        products.map((item) =>
          item.id === editedProduct.id ? { ...editedProduct } : item
        )
      );
    } else {
      setProducts([...products, editedProduct]);
    }

    // let productListToBeSaved = [...products];

    const editedProductList = products.map((item) => {
      if (editedProduct.id === item.id) {
        return editedProduct;
      }
      return item;
    });
    setProducts(editedProductList);
    setEdit(false);
    // const filter = editedProductList.filter((element) => {
    // return element.id === productData.forEach((element) => element.id);})
    // console.log("filter: " + filter);
  };

  //let productToEdit = props.product
  const inputChangeHandler = (event, productToEdit: ProductData) => {
    products.map((product) => product.id === productToEdit.id);
    console.log(products);
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        isEdit,
        setEdit,
        addProduct,
        saveProduct,
        removeProduct,
        inputChangeHandler,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
export const useAdmin = () => useContext(ProductContext);
