import { Container, Typography } from "@mui/material";
import AdminCollapsibleTable from "./AdminCollapsibleTable";

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
      <AdminCollapsibleTable />
    </Container>
  );
}

export default AdminPage;
