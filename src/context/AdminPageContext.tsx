import { useSelect } from "@mui/lab/node_modules/@mui/base";
import { createContext, useContext, useState } from "react";
import { hydrate } from "react-dom";
import { useLocalStorageState } from "../components/hooks/useLocalStorageState";
import { ProductData, productData } from "../ProductData";
interface AdminData extends ProductData {
}

interface ContextValue {
  products: ProductData[];
  setEdit: React.Dispatch<React.SetStateAction<boolean>>
  isEdit: boolean
  saveProduct: (product: ProductData) => void;
  addProduct: (product: ProductData) => void;
  removeProduct: (product: ProductData) => void;
  inputChangeHandler: (event, product: ProductData) => void;
  onsubmit: (e) => void;
}

export const ProductContext = createContext<ContextValue>({
    products: [],
    addProduct: () => undefined,
    setEdit: () => undefined,
    isEdit: false,
    saveProduct: (product) => undefined,
    removeProduct: (product) => undefined,
    inputChangeHandler: (product) => undefined,
    onsubmit: () => undefined,
});

const ProductProvider = (props) => { 
    const [products, setProducts] = useLocalStorageState(productData, "adminLS");
    const [isEdit, setEdit] = useState(false);

    const onsubmit = (e: React.FormEvent<HTMLInputElement>) => {
        e.preventDefault()
        console.log("clicked")
       
        let newProduct = {
        id: "",
        image: "",
        title: "",
        description: "",
        price: parseInt(""),
      };
      addProduct(newProduct);
    };

   const addProduct = (product: ProductData) => {
       console.log('ADDPRODUCT IN CONTEXT');
       
        //setProducts(newProduct);
   }
  
    const removeProduct = (productToBeRemoved: ProductData) => {
        const updatedProductList = products.filter((product) => productToBeRemoved.id !== product.id)  
        setProducts(updatedProductList);
    };

    const saveProduct = (editedProduct: ProductData) => {
        // need e.target.value onChange or something
        // filter just shows the product which was edited

        let productListToBeSaved = [...products]

        const editedProductList = products.map((item) => {
            if(editedProduct.id === item.id) { return editedProduct }
            return item
        });
        setProducts(editedProductList)
        setEdit(false);
        
        // const filter = editedProductList.filter((element) => { 
        // return element.id === productData.forEach((element) => element.id);})
        // console.log("filter: " + filter);
    }
    
        //let productToEdit = props.product
        const inputChangeHandler = (event, productToEdit: ProductData) => {
        products.map((product) => (product.id === productToEdit.id)); 
        console.log(products)
    }

        
    return (
        <ProductContext.Provider
            value={{
            products,
            setEdit,
            addProduct,
            isEdit,
            saveProduct,
            removeProduct,
            inputChangeHandler,
            onsubmit,
            }}
        >
        {props.children}
        </ProductContext.Provider>
    );
}

export default ProductProvider;
export const useAdmin = () => useContext(ProductContext);


