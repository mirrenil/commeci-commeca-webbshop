import { propsToClassKey } from "@mui/styles";
import { render } from "@testing-library/react";
import { createContext, FC, useContext, useState } from "react";
import { useLocalStorageState } from "../components/hooks/useLocalStorageState";
import { ProductData, productData } from "../ProductData";

// interface AdminData extends ProductData {
//     quantity: number;
// }

interface ContextValue {
    products: ProductData[];
    addProduct:  (product) => void;
    removeProduct: (product) => void;
}

export const ProductContext = createContext<ContextValue>({
    products: [],
    addProduct: (product: ProductData) => [],
    removeProduct: (product: ProductData) => [],
});

const ProductProvider = (props) => {
    const [products, setProducts] = useLocalStorageState(productData, "adminLS");
    console.log('hej');
    
    
    //const [products, setproducts] = useState<Product[]>(productData);
   
   const addProduct = (product: ProductData) => {
        setProducts([...products, product]);
    }
   
    
    const removeProduct = (product: ProductData) => {
        setProducts(products.filter(({id}) => id !== product.id));
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

