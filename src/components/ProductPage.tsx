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
      <h5
        style={{
          fontFamily: "Prata",
          fontWeight: "400",
          fontSize: "1.5rem",
          marginTop: "2rem",
          marginLeft: "10rem",
        }}
      >
        FURNITURE
      </h5>
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
