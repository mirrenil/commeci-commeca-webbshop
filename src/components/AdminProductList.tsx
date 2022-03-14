import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import * as React from "react";
import { ProductData } from "../ProductData";

interface Props {
  product: ProductData;
}
function Row(props: Props) {
  const [open, setOpen] = React.useState(false);
  console.log("Product", props.product);
  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {props.product.title}
        </TableCell>
        <TableCell>{props.product.id}</TableCell>
        <TableCell>{props.product.price}:-</TableCell>
      </TableRow>
      {/* All info om produkten som är klickad*/}
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Image</TableCell>
                    <TableCell>ID</TableCell>
                    <TableCell align="right">Title</TableCell>
                    <TableCell align="right">Description</TableCell>
                    <TableCell align="right">Price</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody contentEditable="true">
                  <TableRow>
                    <TableCell component="th" scope="row">
                      <img
                        src={props.product.image}
                        alt={props.product.title}
                        style={{ maxHeight: "200px" }}
                      />
                      <Button
                        variant="contained"
                        size="small"
                        component="label"
                      >
                        Upload image
                        <input type="file" hidden />
                      </Button>
                    </TableCell>
                    {/* <TableCell align="right">{rops.product.imagep}</TableCell> */}
                    <TableCell align="right">{props.product.id}</TableCell>
                    <TableCell align="right">{props.product.title}</TableCell>
                    <TableCell align="right">
                      {props.product.description}
                    </TableCell>
                    <TableCell align="right">{props.product.price}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

interface PropsTable {
  products: ProductData[];
}

export default function CollapsibleTable(props: PropsTable) {
  console.log(props.products);
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell align="right">TITLE</TableCell>

            <TableCell align="right">ID</TableCell>

            <TableCell align="right">PRICE</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.products.map((product) => {
            console.log("ROW");
            return <Row key={product.id} product={product} />;
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
