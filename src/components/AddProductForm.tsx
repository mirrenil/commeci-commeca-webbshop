import { LocalGroceryStoreTwoTone } from "@mui/icons-material";
import { useState } from "react";
import { useAdmin } from "../context/AdminPageContext";
import { productData } from "../ProductData";

function AddProductForm() {
 
/* Add yup och formik?  */
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >   
        <h4>Add new products</h4>
        <form >
          <label htmlFor="title">TITLE</label>
          <input type="text" name="title" required />

          <label htmlFor="description">DESCRIPTION</label>
          <input type="text" name="description" required />

          <label htmlFor="price">PRICE</label>
          <input type="text" name="price" required />

          <input
            type="string"
            src=""
            alt=""
            placeholder="Please enter the src path to the image"
          />   
          <button onClick={(e) => onsubmit}>
            Save
          </button>
        </form>
      </div>
    ); 
};
export default AddProductForm;

