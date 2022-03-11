import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { Box, Button, ButtonGroup, Typography } from "@mui/material";
import { CSSProperties } from "react";
import { useCart } from "../context/CartContextProvider";

function Checkout() {
  const {
    cart,
    sumCartAmount,
    sumProductPrice,
    onAddQuantity,
    onReduceQuantity,
  } = useCart();

  return (
    <div style={rootStyle}>
      <h1>Hello</h1>
      {cart.map((product) => (
        <Box
          sx={{
            fontFamily: "Prata",
            backgroundColor: "yellow",
            width: "800px",
            textAlign: "center",
            display: "flex",
            flexDirection: "row",
            gap: "1rem",
          }}
          key={product.id}
        >
          <p style={pStyle}>Title: {product.title}</p>
          <ButtonGroup>
            <Button
              sx={{
                height: "1.5rem",
                width: ".5rem",
                backgroundColor: "red",
                border: "none",
                color: "white",
                m: "auto",
              }}
              aria-label="reduce"
              onClick={() => onReduceQuantity(product)}
            >
              <RemoveIcon fontSize="small" />
            </Button>
            <p style={pStyle}>Quantity: {product.quantity}</p>
            <Button
              sx={{
                height: "1.5rem",
                width: ".5rem",
                backgroundColor: "red",
                border: "none",
                color: "white",
                m: "auto",
              }}
              aria-label="reduce"
              onClick={() => onAddQuantity(product)}
            >
              <AddIcon fontSize="small" />
            </Button>
          </ButtonGroup>
          <p style={pStyle}>Unit Price: {product.price}</p>
          <p style={pStyle}>Subtotal: {sumProductPrice(product)}</p>
        </Box>
      ))}
      <Typography
        sx={{
          fontFamily: "Prata",
          backgroundColor: "skyblue",
          width: "800px",
          textAlign: "center",
          display: "flex",
          flexDirection: "row",
          gap: "1rem",
        }}
      >
        {sumCartAmount()} SEK
      </Typography>
    </div>
  );
}

const rootStyle: CSSProperties = {
  minHeight: "40rem",
};

const pStyle: CSSProperties = {
  margin: "1rem",
};

export default Checkout;
