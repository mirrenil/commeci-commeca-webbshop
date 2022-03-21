import { ProductData, productData } from "../ProductData";
import AddIcon from "@mui/icons-material/Add";
import ProductList from "./AdminProductList";
import { Button } from "@mui/material";
import PopUpPortal from "./PopUpPortal";

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
      <div style={{ paddingRight: "4rem" }}>
        <Button>
          ADD
          <AddIcon />
        </Button>
      </div>
      <div>
        <ProductList products={productData} />
      </div>
    </div>
  );
}

export default AdminPage;
