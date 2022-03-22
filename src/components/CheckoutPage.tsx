import { Container } from "@mui/material";
import { useCart } from "../context/CartContextProvider";
import CheckoutFormContainer from "./CheckoutFormContainer";
import EmptyCart from "./EmptyCart";
import ShoppingCart from "./ShoppingCart";

function CheckoutPage() {
  const { cart } = useCart();

  return cart.length < 1 ? (
    <EmptyCart />
  ) : (
    <Container>
      <ShoppingCart />
      <CheckoutFormContainer />
    </Container>
  );
}

export default CheckoutPage;
