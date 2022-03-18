import { propsToClassKey } from "@mui/styles";
import { render } from "@testing-library/react";
import { isContentEditable, isEditable } from "@testing-library/user-event/dist/utils";
import { createContext, FC, useContext, useState } from "react";
import { isTemplateMiddle } from "typescript";
import { useLocalStorageState } from "../components/hooks/useLocalStorageState";
import { ProductData, productData } from "../ProductData";

interface AdminData extends ProductData {
}

interface ContextValue {
  products: ProductData[];
  addProduct: (product: ProductData) => void;
  setEdit: React.Dispatch<React.SetStateAction<boolean>>
  isEdit: boolean
  saveProduct: (product: ProductData) => void;
  removeProduct: (product: ProductData) => void;
}

export const ProductContext = createContext<ContextValue>({
    products: [],
    addProduct: (product) => [],
    setEdit: () => [],
    isEdit: false,
    saveProduct: () => [],
    removeProduct: (product) => [],
});

const ProductProvider = (props) => { 
    // This line controlls how many rows should be shown, in this case 4
    const [products, setProducts] = useLocalStorageState(productData, "adminLS");
    const [isEdit, setEdit] = useState(false);
    //const [change, setChanged] = useState(false);
    //const [disable, setDisable] = useState(true);
    


    const addProduct = (product: ProductData) => {
       // setProducts([...products, product]);
    }


    const removeProduct = (productToBeRemoved: ProductData) => {
        const updatedProductList = products.filter((product) => productToBeRemoved.id !== product.id)  
        setProducts(updatedProductList);
    };


    const saveProduct = (product: ProductData) => {
        const updatedList = products.map((item) => (product.id === item.id));
        setEdit(false)
        //setProducts(updatedList) 
    }
        

   

    return (
        <ProductContext.Provider
            value={{
            products,
            setEdit,
            isEdit,
            saveProduct,
            addProduct,
            removeProduct,
            }}
        >
        {props.children}
        </ProductContext.Provider>
    );
}

export default ProductProvider;
export const useAdmin = () => useContext(ProductContext);


