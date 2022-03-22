import { ProductData, productData } from "../ProductData";
import AddIcon from "@mui/icons-material/Add";
import ProductList from "./AdminProductList";
import React, { useState } from "react";
import Modal from './Modal';
import AddProductForm from "./AddProductForm";


interface Props {
  products: ProductData[];
}

function AdminPage(props: Props) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <h5
        style={{
          fontFamily: "Prata",
          fontWeight: "400",
          fontSize: "1.5rem",
          marginTop: "2rem",
          marginLeft: "10rem",
        }}
      >
        Admin
      </h5>
      <div style={{ paddingRight: "4rem" }}>
        <button onClick={() => setIsOpen(true)}>
          ADD
          <AddIcon />
        </button>
        <Modal open={isOpen} onClose={() => setIsOpen(false)}>
          <AddProductForm />
        </Modal>
      </div>
      <div>
        <ProductList products={productData} />
      </div>
    </>
  );
}


export default AdminPage;
