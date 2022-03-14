import { Box, Button, Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import emptyCart from "../assets/images/empty-cart.webp";

const EmptyCart = () => {
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
        Shopping Cart
      </Typography>
      <Box
        sx={{
          pt: "2rem",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        <img src={emptyCart} alt="empty cart" height="300px" />
        <Typography sx={{ fontFamily: "Prata" }}>
          Your cart is empty.
        </Typography>
        <Button
          component={Link}
          size="small"
          variant="contained"
          to="/"
          style={{
            backgroundColor: "#CAC2B9",
            marginTop: "1rem",
            fontFamily: "Prata",
            textTransform: "none",
          }}
        >
          Explore our collections
        </Button>
      </Box>
    </Container>
  );
};

export default EmptyCart;
