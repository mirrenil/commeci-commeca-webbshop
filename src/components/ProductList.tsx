import React , { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete"
import { resolve } from 'dns';

  const products = [
      { id: "1", title: 'Jolly', price: '1599'},
      { id: "2", title: "Chardonne", price: "3919"},
      { id: "3", title: 'Xander', price: '2299'},
      { id: "4", title: 'Magnolia', price: '1299'},
      { id: "5", title: "Bella", price: "999" },
      { id: "6", title: "Essentials", price: "5499"},
      { id: "7", title: "Dagny", price: "2999" },
      { id: "8", title: "Daisy Bubble", price: "199" },
      { id: "9", title: "Barrel", price: "1799 "},
      { id: "10", title: "Alba", price: "3449 "},
      { id: "11", title: "Vinvent", price: "5999 "},
      { id: "12", title: "Charleston", price: "2899"},
      { id: "13", title: "Betty", price: "2899 "},
      { id: "14", title: "Minna", price: "1199"},
      { id: "15", title: "Pirri 2-pack", price: "2699"},
      { id: "16", title: "Melisso", price: "4999"},
      { id: "17",  title: "Ditti", price: "1999"},
  ]

 function ProductList() {
   
  const [productsData, setProductsData] = useState(products)
  const columns = [
    { field: "id", headerName: "ID", width: 70, editable: true },
    { field: "title", headerName: "Title", width: 130, editable: true  },
    { field: "price", headerName: "Price (SEK)", width: 130, editable: true  },
    {
      field: "edit",
      headerName: "Edit",
      width: 130,
      renderCell: () => (
        <>
          <input type="number" value="1" min="0" max="999"></input>
          {/* <Button type="submit" size="small"
          >
              <EditIcon></EditIcon>
          </Button> */}
        </>
      ),
    },
    {
      field: "delete",
      headerName: "Delete",
      width: 130,
      renderCell: () => (
        <>
          <Button
            type="submit"
            size="small"
          >
            <DeleteIcon></DeleteIcon>
          </Button>
        </>
      ),
    },
  ];

   return (
     <div style={{ 
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%"
        }}>
       <div
         style={{
           height: 400,
           width: "50%",
           paddingBottom: "4rem",
         }}
       >
         <h3>Products in stock</h3>
         <DataGrid
           rows={products}
           columns={columns}
           pageSize={5}
           rowsPerPageOptions={[5]}
         />
       </div>
     </div>
   );
 }

  export default ProductList;

