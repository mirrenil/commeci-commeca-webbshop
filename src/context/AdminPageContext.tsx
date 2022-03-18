import { createContext, useContext, useState } from "react";
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
    saveProduct: (product) => [],
    removeProduct: (product) => [],
});

const ProductProvider = (props) => { 
    // This line controlls how many rows should be shown, in this case 4
    const [products, setProducts] = useLocalStorageState(productData, "adminLS");
    const [isEdit, setEdit] = useState(false);
    console.log(products)

    const addProduct = (product: ProductData) => {
       // setProducts([...products, product]);
    }

    const removeProduct = (productToBeRemoved: ProductData) => {
        const updatedProductList = products.filter((product) => productToBeRemoved.id !== product.id)  
        setProducts(updatedProductList);
    };

    const saveProduct = (product: ProductData) => {
        // need e.target.value onChange or something
        // filter just shows the product which was edited
        const editedProductList = products.map((item) => (product.id === item.id));
        setEdit(false)
        
        // const filter = editedProductList.filter((element) => { 
        // return element.id === productData.forEach((element) => element.id);})
        // console.log("filter: " + filter);
    }
        
    //  const handleChange = (e, editedProduct: ProductData) => {
    //     let editedText = products.map((products, e) => products !== editedProduct)
    //         saveProduct(editedText)
    // }

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


