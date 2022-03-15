import { Container, Typography } from "@mui/material";
import { CSSProperties } from "react";
import "../index.css";
import { ProductData } from "../ProductData";
import ProductCard from "./ProductCard";

interface Props {
  products: ProductData[];
}

function ProductPage(props: Props) {
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
        {props.products.map((product) => (
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
