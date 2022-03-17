import { Container, Typography } from "@mui/material";
import React from "react";
import { CSSProperties } from "react";
import { ProductContext } from "../context/AdminPageContext";
import "../index.css";
import ProductCard from "./ProductCard";

 
function ProductPage() {
  const products = React.useContext(ProductContext).products;
  
  return (
    <div>
      <Container
        sx={{
          padding: "1rem",
        }}
      >
        <Typography
          sx={{ textTransform: "uppercase", fontFamily: "Prata", mt: "1rem" }}
          variant="h5"
        >
          Furniture
        </Typography>
      </Container>
      <div style={rootStyle}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
     
    </div>
  );
}

const rootStyle: CSSProperties = {
  display: "flex",
  flexWrap: "wrap",
  columnGap: "10rem",
  rowGap: "3rem",
  justifyContent: "center",
  paddingTop: "2rem",
  paddingBottom: "6rem",
};

export default ProductPage;
