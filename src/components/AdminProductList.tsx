import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
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
import { productData, ProductData } from "../ProductData";
import AddIcon from "@mui/icons-material/AddBoxOutlined";
import DeleteOutline from "@mui/icons-material/DeleteOutlineOutlined";
import ClearIcon from "@mui/icons-material/Clear";
import DoneIcon from "@mui/icons-material/Done";
import CreateIcon from "@mui/icons-material/Create";

interface Props {
  product: ProductData;
}
function Row(props: Props) {
  const [open, setOpen] = React.useState(false);

  const [isEdit, setEdit] = React.useState(false);

  const [disable, setDisable] = React.useState(true);

  const [showConfirm, setShowConfirm] = React.useState(false);

  const [rows, setRows] = React.useState(productData);

  // Function For adding new products to row object
  // const handleAdd = () => {
  //   setRows([
  //     ...rows,
  //     {
  //       image: "",
  //       id: "",
  //       title: "",
  //       description: "",
  //       price: 1,
  //     },
  //   ]);
  //   setEdit(true);
  // };

  // Function to handle edit
  const handleEdit = (i: any) => {
    // If edit mode is true setEdit will
    // set it to false and vice versa
    setEdit(!isEdit);
  };

  // Function to handle save
  const handleSave = () => {
    setEdit(!isEdit);
    setRows(rows);
    console.log("saved : ", rows);
    setDisable(false);
    setOpen(true);
  };
  // The handleInputChange handler can be set up to handle
  // many different inputs in the form, listen for changes
  // to input elements and record their values in state
  const handleInputChange = (e: any) => {
    // setDisable(false);
    // const { name, value } = e.target;
    // const adminProductList = [...rows];
    // adminProductList[index][name] = value;
    // setRows(adminProductList);
  };

  // Showing delete confirmation to users
  const handleConfirm = () => {
    setShowConfirm(true);
  };

  // Handle the case of delete confirmation where
  // user click yes delete a specific row of id:i
  const removeProduct = (product: ProductData) => {
    if (productData.find(products)) console.log(props.product);
    const adminProductList = [...rows];
    //const index = productData.indexOf(products);
    for (let i = 0; i < adminProductList.length; i++) {
      if (adminProductList.includes(props.product)) {
        adminProductList.splice(i);
      }
    }

    //adminProductList.findIndex();
    setRows(adminProductList);
    setShowConfirm(false);
  };

  // Handle the case of delete confirmation
  // where user click no
  const handleNo = () => {
    setShowConfirm(false);
  };
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
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <div>
                        {isEdit ? (
                          <div>
                            {rows.length !== 0 && (
                              <div>
                                {disable ? (
                                  <Button onClick={handleSave}>
                                    <DoneIcon />
                                  </Button>
                                ) : (
                                  <Button onClick={handleSave}>
                                    <DoneIcon />
                                  </Button>
                                )}
                              </div>
                            )}
                          </div>
                        ) : (
                          <div>
                            <Button onClick={handleEdit}>
                              <CreateIcon />
                            </Button>
                          </div>
                        )}
                      </div>
                    </div>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow contentEditable="true">
                    {isEdit ? (
                      <div>
                        <TableCell component="th" scope="row">
                          <img
                            src={props.product.image}
                            alt={props.product.title}
                            style={{ maxHeight: "200px" }}
                            onChange={(e) => handleInputChange(e)}
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
                        <TableCell
                          align="right"
                          onChange={(e) => handleInputChange(e)}
                        >
                          {props.product.id}
                        </TableCell>
                        <TableCell align="right">
                          {props.product.title}
                        </TableCell>
                        <TableCell
                          align="right"
                          onChange={(e) => handleInputChange(e)}
                        >
                          {props.product.description}
                        </TableCell>
                        <TableCell
                          align="right"
                          onChange={(e) => handleInputChange(e)}
                        >
                          {props.product.price}
                        </TableCell>
                      </div>
                    ) : (
                      <div>
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
                        <TableCell align="right">{props.product.id}</TableCell>
                        <TableCell align="right">
                          {props.product.title}
                        </TableCell>
                        <TableCell align="right">
                          {props.product.description}
                        </TableCell>
                        <TableCell align="right">
                          {props.product.price}
                        </TableCell>
                      </div>
                    )}
                    {isEdit ? (
                      <Button onClick={() => removeProduct(product)}>
                        <DeleteOutline />
                      </Button>
                    ) : (
                      <Button onClick={handleRemove}>
                        <DeleteOutline />
                      </Button>
                    )}
                    {showConfirm && (
                      <div>
                        <Dialog
                          open={showConfirm}
                          onClose={handleNo}
                          aria-labelledby="alert-dialog-title"
                          aria-describedby="alert-dialog-description"
                        >
                          <DialogTitle id="alert-dialog-title">
                            {"Confirm Delete"}
                          </DialogTitle>
                          <DialogContent>
                            <DialogContentText id="alert-dialog-description">
                              Are you sure you want to delete this product?
                            </DialogContentText>
                          </DialogContent>
                          <DialogActions>
                            <Button
                              onClick={() => handleRemove()}
                              color="primary"
                              autoFocus
                            >
                              Yes
                            </Button>
                            <Button
                              onClick={handleNo}
                              color="primary"
                              autoFocus
                            >
                              No
                            </Button>
                          </DialogActions>
                        </Dialog>
                      </div>
                    )}
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
  return (
    // <div
    //   style={{
    //     display: "flex",
    //     justifyContent: "center",
    //     height: "100%",
    //     width: "90vw",
    //     marginLeft: "5rem",
    //     marginRight: "5rem",
    //     overflow: "hidden",
    //   }}
    // >
    //   <div style={{ flexGrow: 2 }}>
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
            return <Row key={product.id} product={product} />;
          })}
        </TableBody>
      </Table>
    </TableContainer>
    //   </div>
    // </div>
  );
}
