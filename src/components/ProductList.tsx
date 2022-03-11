import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

function ProductList() {
  const columns = [
    { field: "id", headerName: "ID", width: 70, editable: true },
    { field: "title", headerName: "Title", width: 130, editable: true },
    { field: "price", headerName: "Price (SEK)", width: 130, editable: true },
    { field: "quantity", headerName: "In stock", width: 130, editable: true },
    {
      field: "delete",
      headerName: "Delete",
      width: 130,
      renderCell: () => (
        <>
          <Button type="submit" size="small">
            <DeleteIcon></DeleteIcon>
          </Button>
        </>
      ),
    },
  ];

  const rows = [
    { id: "1", title: "Jolly", price: "1599", quantity: "2" },
    { id: "2", title: "Chardonne", price: "3919", quantity: "20" },
    { id: "3", title: "Xander", price: "2299", quantity: "30" },
    { id: "4", title: "Magnolia", price: "1299", quantity: "55" },
    { id: "5", title: "Bella", price: "999", quantity: "10" },
    { id: "6", title: "Essentials", price: "5499", quantity: "33" },
    { id: "7", title: "Dagny", price: "2999", quantity: "15" },
    { id: "8", title: "Daisy Bubble", price: "199", quantity: "41" },
    { id: "9", title: "Barrel", price: "1799 ", quantity: "37" },
    { id: "10", title: "Alba", price: "3449", quantity: "55" },
    { id: "11", title: "Vinvent", price: "5999", quantity: "3" },
    { id: "12", title: "Charleston", price: "2899", quantity: "8" },
    { id: "13", title: "Betty", price: "2899", quantity: "64" },
    { id: "14", title: "Minna", price: "1199", quantity: "9" },
    { id: "15", title: "Pirri 2-pack", price: "2699", quantity: "22" },
    { id: "16", title: "Melisso", price: "4999", quantity: "15" },
    { id: "17", title: "Ditti", price: "1999", quantity: "6" },
  ];

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      <div
        style={{
          height: 400,
          width: "50%",
          paddingBottom: "4rem",
        }}
      >
        <h4>Products in stock</h4>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
        />
      </div>
    </div>
  );
}

export default ProductList;
