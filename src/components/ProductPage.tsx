import { Data } from "../ProductData";
import ProductCard from "./ProductCard";

interface Props {
  data: Data;
}
function ProductPage(props: Props) {
  return (
    <div>
      <ProductCard data={undefined} />
    </div>
  );
}

export default ProductPage;
