import { propsToClassKey } from "@mui/styles";
import { render } from "@testing-library/react";
import { createContext, FC, useContext, useState } from "react";
import { isTemplateMiddle } from "typescript";
import { useLocalStorageState } from "../components/hooks/useLocalStorageState";
import { ProductData, productData } from "../ProductData";

interface AdminData extends ProductData {
}

interface ContextValue {
  products: ProductData[];
  addProduct: (product: ProductData) => void;
  removeProduct: (product: ProductData) => void;
}

export const ProductContext = createContext<ContextValue>({
    products: [],
    addProduct: (product) => [],
    removeProduct: (product) => [],
});

const ProductProvider = (props) => {
    
    // This line controlls how many rows should be shown, in this case 4
    const [products, setProducts] = useLocalStorageState(productData, "adminLS");
    
 

    const addProduct = (product: ProductData) => {
        setProducts([...products, product]);
    }

        const removeProduct = (productToBeRemoved: ProductData) => {

          const updatedProductList = products.filter((product) => productToBeRemoved.id !== product.id)


            updateProductsToLS()
            
            setProducts(updatedProductList);
       
           
        };
        

    

    return (
        <ProductContext.Provider
            value={{
            products,
            addProduct,
          removeProduct,
            }}
        >
        {props.children}
        </ProductContext.Provider>
    );

};

export default ProductProvider;
export const useAdmin = () => useContext(ProductContext);

  

    function updateProductsToLS() {
        const productsAsString = JSON.stringify(productData);
        localStorage.setItem("productsHELLO", productsAsString)
    }

