import { Data } from "../ProductData";
import ProductCard from "./ProductCard";

interface Props {
  products: Data[];
}

function ProductPage(props: Props) {
  return (
    <div>
      {props.products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductPage;
