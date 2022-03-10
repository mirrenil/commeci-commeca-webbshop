import { ProductData } from "../ProductData";
import ProductCard from "./ProductCard";

interface Props {
  products: ProductData[];
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
