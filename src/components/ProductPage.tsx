import { CSSProperties } from "react";
import { Data } from "../ProductData";
import ProductCard from "./ProductCard";

interface Props {
  products: Data[];
}

function ProductPage(props: Props) {
  return (
    <div style={rootStyle}>
      {props.products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

const rootStyle: CSSProperties = {
  display: "flex",
  flexWrap: "wrap",
  gap: "4rem",
  justifyContent: "center",
  paddingTop: "5rem",
  paddingBottom: "6rem",
};

export default ProductPage;
