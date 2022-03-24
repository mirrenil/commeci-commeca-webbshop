import AddIcon from "@mui/icons-material/Add";
import { Container, Typography } from "@mui/material";
import { useState } from "react";
import AddProductForm from "./AddProductForm";
import AdminCollapsibleTable from "./AdminCollapsibleTable";
import Modal from "./Modal";

function AdminPage() {
  const [isOpen, setIsOpen] = useState(false);

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
