import { Box, Container, Typography } from "@mui/material";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useCart } from "../context/CartContextProvider";
import PaymentCreditCard from "./PaymentCreditCard";
import PaymentInvoice from "./PaymentInvoice";
import PaymentSwish from "./PaymentSwish";

const PaymentMethod = () => {
  const { paymentMethod, selectPaymentMethod } = useCart();

  const handleToggle = (event) => {
    selectPaymentMethod(event.currentTarget.value);
    console.log(paymentMethod);
  };

  return (
    <Container
      sx={{
        padding: "1rem",
      }}
    >
      <Typography
        sx={{
          textTransform: "uppercase",
          fontFamily: "Prata",
          mt: "3rem",
          mb: "1rem",
        }}
        variant="h5"
      >
        4. Payment Method
      </Typography>
      <Box
        sx={{
          backgroundColor: "#F3F2F0",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "2rem",
          alignItems: "center",
        }}
      >
        <ToggleButtonGroup
          value={paymentMethod}
          exclusive
          onChange={handleToggle}
          aria-label="text alignment"
        >
          <ToggleButton value="creditcard" aria-label="left aligned">
            Credit Card
          </ToggleButton>
          <ToggleButton value="swish" aria-label="centered">
            Swish
          </ToggleButton>
          <ToggleButton value="invoice" aria-label="right aligned">
            Invoice
          </ToggleButton>
        </ToggleButtonGroup>
        <Container>
          {paymentMethod === "creditcard" ? (
            <PaymentCreditCard />
          ) : paymentMethod === "swish" ? (
            <PaymentSwish />
          ) : paymentMethod === "invoice" ? (
            <PaymentInvoice />
          ) : (
            <Container />
          )}
        </Container>
      </Box>
    </Container>
  );
};
export default PaymentMethod;
