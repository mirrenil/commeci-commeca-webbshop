import { ProductData, productData } from "../ProductData";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import Modal from './Modal';
import AddProductForm from "./AddProductForm";
import { Container, Typography } from "@mui/material";
import AdminCollapsibleTable from "./AdminCollapsibleTable";

interface Props {
  products: ProductData[];
}

function AdminPage(props: Props) {
  const [isOpen, setIsOpen] = useState(false)

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
      <div style={{ paddingRight: "4rem" }}>
        <button onClick={() => setIsOpen(true)}>
          ADD
          <AddIcon />
        </button>
        <Modal open={isOpen} onClose={() => setIsOpen(false)}>
          <AddProductForm />
        </Modal>
      </div>
      <AdminCollapsibleTable />
    </Container>
  );
}


export default AdminPage;
