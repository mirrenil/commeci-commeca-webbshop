import { ProductData, productData } from "../ProductData";
import ProductList from "./AdminProductList";

interface Props {
  products: ProductData[];
}

function AdminPage(props: Props) {

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
        Admin
      </h5>

      <ProductList products={productData} />
    </div>
  );
}

export default AdminPage;
