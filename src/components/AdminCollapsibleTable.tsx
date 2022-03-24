import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useContext } from "react";
import { ProductContext } from "../context/AdminPageContext";
import AdminProductList from "./AdminProductList";

function AdminCollapsibleTable() {
  const products = useContext(ProductContext).products;
  console.log("PRODUCTS: ", products);

  return (
    <TableContainer component={Paper} sx={{ my: "1.5rem" }}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow style={{ backgroundColor: "#CAC2B9" }}>
            <TableCell align="left" colSpan={2}>
              <Typography variant="subtitle1">TITLE</Typography>
            </TableCell>
            <TableCell align="left">
              <Typography variant="subtitle1">ID</Typography>
            </TableCell>
            <TableCell align="left">
              <Typography variant="subtitle1">PRICE</Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product) => {
            return <AdminProductList key={product.id} product={product} />;
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default AdminCollapsibleTable;
