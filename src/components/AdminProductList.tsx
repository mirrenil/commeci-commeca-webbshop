import { DeleteOutline } from "@mui/icons-material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Button, Typography, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DoneIcon from "@mui/icons-material/Done";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import React, { Fragment, useState } from "react";
import { ProductContext, useAdmin } from "../context/AdminPageContext";
import { ProductData } from "../ProductData";
interface Props {
  product: ProductData;
}

function AdminProductList(props: Props) {
  const {
    products,
    addProduct,
    isEdit,
    setEdit,
    saveProduct,
    removeProduct,
    inputChangeHandler,
  } = useAdmin();

  const [open, setOpen] = React.useState(false);
  const [image, setImage] = useState(props.product.image);
  const [title, setTitle] = useState(props.product.title);
  const [description, setDescription] = useState(props.product.description);
  const [price, setPrice] = useState(props.product.price);

  let productToEdit = props.product;

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
                    <TableCell align="left">Description</TableCell>
                    <TableCell align="right">Price</TableCell>
                    <TableCell align="right"></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow contentEditable={isEdit}>
                    <TableCell align="right">
                      {isEdit ? (
                        <div style={{display: "flex", flexDirection: "column", alignItems: 'center'}}>
                          <img
                            src={props.product.image}
                            alt={props.product.title}
                            style={{ maxHeight: "200px" }}
                          />
                          <TextField
                              required
                              multiline
                              label="image url"
                              variant="standard"
                              onChange={(event) => setImage(event.target.value)}
                          />
                        </div>
                      ) : (
                        <img
                          src={props.product.image}
                          alt={props.product.title}
                          style={{ maxHeight: "200px" }}
                        />
                      )}
                    </TableCell>

                    <TableCell align="right">{props.product.id}</TableCell>
                    <TableCell align="right">
                      {isEdit ? (
                        <>
                          <TextField
                            value={title}
                            variant="standard"
                            onChange={(event) => setTitle(event.target.value)}
                          />
                        </>
                      ) : (
                        props.product.title
                      )}
                    </TableCell>
                    <TableCell align="right">
                      {isEdit ? (
                        <>
                          <TextField
                            value={description}
                            variant="standard"
                            onChange={(event) =>
                              setDescription(event.target.value)
                            }
                          />
                        </>
                      ) : (
                        props.product.description
                      )}
                    </TableCell>
                    <TableCell align="right">
                      {isEdit ? (
                        <>
                          <TextField
                            value={String(price)}
                            variant="standard"
                            onChange={(event) => {
                              console.log(isNaN(Number(event.target.value)));
                              if (!isNaN(Number(event.target.value))) {
                                setPrice(Number(event.target.value));
                              }
                            }}
                          />
                        </>
                      ) : (
                        props.product.price
                      )}
                    </TableCell>
                    <TableCell>
                      <Button
                        onClick={() => {
                          removeProduct(props.product);
                        }}
                      >
                        <DeleteOutline style={{ color: "#ed6c02" }} />
                      </Button>
                      <div>
                        {!isEdit ? (
                          <Button
                            onClick={() => {
                              setEdit(true);
                            }}
                          >
                            <EditIcon style={{ color: "#ed6c02" }} />
                          </Button>
                        ) : (
                          <Button
                            onClick={() => {
                              saveProduct({
                                id: props.product.id,
                                title,
                                image,
                                description,
                                price,
                              });
                            }}
                          >
                            <DoneIcon style={{ color: "#ed6c02" }} />
                          </Button>
                        )}
                      </div>
                    </TableCell>
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
export default AdminProductList;