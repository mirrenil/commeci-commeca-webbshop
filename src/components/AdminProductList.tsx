import { DeleteOutline } from "@mui/icons-material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Button, TextField, Typography } from "@mui/material";
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
import { numWithSpaces } from "../Helper";
interface Props {
  product: ProductData;
}

function AdminProductList(props: Props) {
  const {
    products,
    isEdit,
    setEdit,
    addProduct,
    saveProduct,
    removeProduct,
    inputChangeHandler,
  } = useAdmin();

  const [open, setOpen] = useState(false);
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
        <TableCell>{numWithSpaces(props.product.price)} SEK</TableCell>
      </TableRow>
      {/* All info om produkten som är klickad*/}
      <TableRow>
        <TableCell
          style={{
            padding: 0,
            backgroundColor: "#F8F4EF",
          }}
          colSpan={6}
        >
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell
                      align="left"
                      sx={{
                        paddingX: { md: "5rem" },
                        color: "#6C665F",
                      }}
                    >
                      Image
                    </TableCell>
                    <TableCell align="center" style={{ color: "#6C665F" }}>
                      ID
                    </TableCell>
                    <TableCell align="center" style={{ color: "#6C665F" }}>
                      Title
                    </TableCell>
                    <TableCell align="center" style={{ color: "#6C665F" }}>
                      Price
                    </TableCell>
                    <TableCell
                      align="right"
                      sx={{
                        paddingX: { md: "5rem" },
                      }}
                    ></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow contentEditable={isEdit}>
                    <TableCell
                      align="left"
                      sx={{
                        paddingX: { md: "5rem" },
                      }}
                    >
                      {isEdit ? (
                        <Box
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                          }}
                        >
                          <img
                            src={props.product.image}
                            alt={props.product.title}
                            style={{ maxHeight: "180px" }}
                          />
                          <TextField
                            required
                            multiline
                            label="image url"
                            variant="standard"
                            onChange={(event) => setImage(event.target.value)}
                          />
                        </Box>
                      ) : (
                        <img
                          src={props.product.image}
                          alt={props.product.title}
                          style={{ maxHeight: "180px" }}
                        />
                      )}
                    </TableCell>

                    <TableCell align="center">{props.product.id}</TableCell>
                    <TableCell align="center">
                      {isEdit ? (
                        <TextField
                          value={title}
                          variant="standard"
                          onChange={(event) => setTitle(event.target.value)}
                        />
                      ) : (
                        props.product.title
                      )}
                    </TableCell>
                    <TableCell align="center">
                      {isEdit ? (
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
                      ) : (
                        numWithSpaces(props.product.price)
                      )}
                    </TableCell>
                    <TableCell align="center">
                      <Button
                        onClick={() => {
                          removeProduct(props.product);
                        }}
                      >
                        <DeleteOutline style={{ color: "#ed6c02" }} />
                      </Button>
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
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell
                      colSpan={5}
                      align="left"
                      sx={{
                        paddingX: { md: "5rem" },
                        color: "#6C665F",
                      }}
                    >
                      Description
                    </TableCell>
                  </TableRow>

                  <TableCell
                    colSpan={5}
                    align="left"
                    sx={{
                      paddingX: { md: "5rem" },
                    }}
                  >
                    {isEdit ? (
                      <TextField
                        value={description}
                        variant="standard"
                        onChange={(event) => setDescription(event.target.value)}
                      />
                    ) : (
                      props.product.description
                    )}
                  </TableCell>
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
