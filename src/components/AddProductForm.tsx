import {
  ErrorSharp,
  LocalGroceryStoreTwoTone,
  TouchAppRounded,
} from "@mui/icons-material";
import { useState } from "react";
import { useAdmin } from "../context/AdminPageContext";
import { ProductData, productData } from "../ProductData";
import { useFormik } from "formik";
import * as yup from "yup";
import { FormValues } from "./CheckoutPage";
import TextField from "@mui/material/TextField";
import { Button, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";

export interface ProductValues {
  title: string;
  description: string;
  price: number;
  id: string;
  image: string;
}

const InitialValue: ProductValues = {
  title: "",
  description: "",
  price: 0,
  id: "",
  image: "",
};

const ProductValidationSchema = yup.object({
  title: yup.string().required("Title is required"),
  description: yup.string().required("Description is required"),
  price: yup.string().required("Price is required"),
  id: yup.string().notRequired(),
  image: yup.string().notRequired(),
});

function AddProductForm() {
  const navigate = useNavigate();
  const { addProduct } = useAdmin();

  const { values, errors, touched, handleSubmit, handleChange } =
    useFormik<ProductValues>({
      initialValues: InitialValue,
      validationSchema: ProductValidationSchema,
      onSubmit: validateAndSaveNewProduct,
    });

  const validateAndSaveNewProduct = (values: ProductValues) => {
    // SKAPA NY PRODUKT
    console.log("validated");

    let promise = new Promise((resolve) => {
      setTimeout(() => {
        addProduct(values);
        resolve(values);
      }, 2000);
    });
    promise.then(() => {
      navigate("/admin");
    });
  };

  const onInputChange = (values: ProductValues) => {
    // SKAPA NY PRODUKT
    console.log("clicked ONINPUTCHANGE");
    const newProduct: ProductData = {
      id: "",
      image: "",
      title: "",
      description: "",
      price: parseInt(""),
    };
  };

  return (
    <Container
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h4>Add new products</h4>
      <form onSubmit={handleSubmit}>
        <TextField
          type="text"
          name="title"
          label="Title"
          margin="normal"
          value={values.title}
          onChange={handleChange}
          error={touched.title && Boolean(errors.title)}
        />
        <TextField
          type="text"
          name="description"
          label="Description"
          value={values.description}
          onChange={handleChange}
          error={touched.description && Boolean(errors.description)}
          margin="normal"
        />
        <TextField
          type="text"
          name="price"
          label="Price"
          value={values.price}
          onChange={handleChange}
          error={touched.price && Boolean(errors.price)}
          margin="normal"
        />
        <TextField
          type="file"
          name="image"
          label="Image"
          value={values.image}
          onChange={handleChange}
          error={touched.image && Boolean(errors.image)}
          margin="normal"
        />
        <Button
          size="large"
          variant="contained"
          style={{
            textAlign: "center",
            margin: "2rem",
            width: "400px",
            backgroundColor: "#CAC2B9",
            color: "white",
            letterSpacing: "3px",
          }}
          type="submit"
        >
          ADD PRODUCT
        </Button>
      </form>
    </Container>
  );
}

export default AddProductForm;
