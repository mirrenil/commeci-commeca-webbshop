import { Container, Typography } from "@mui/material";
import { productData } from "../ProductData";
import ProductList from "./AdminProductList";

function AdminPage() {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        padding: "1rem",
        minHeight: "35rem",
      }}
    >
      <Typography
        sx={{ textTransform: "uppercase", fontFamily: "Prata", mt: "1rem" }}
        variant="h5"
      >
        Admin
      </Typography>
      <ProductList products={productData} />
    </Container>
  );
}

export default AdminPage;
