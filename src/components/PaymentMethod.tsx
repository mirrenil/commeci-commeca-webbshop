import { Box, Container, Typography } from "@mui/material";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useState } from "react";
import SwishLogo from "../assets/images/SwishLogo.svg";
import { useCart } from "../context/CartContextProvider";
import PaymentCreditCard from "./PaymentCreditCard";
import PaymentInvoice from "./PaymentInvoice";
import PaymentSwish from "./PaymentSwish";

const PaymentMethod = () => {
  const [selection, setSelection] = useState("credit card");
  const { paymentMethod, selectPaymentMethod } = useCart();

  const handleToggle = (event, newSelection: string | null) => {
    if (newSelection !== null) {
      setSelection(newSelection);
      selectPaymentMethod(event.currentTarget.name);
    }
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
          //  value={paymentMethod}
          value={selection}
          exclusive
          onChange={handleToggle}
          aria-label="payment method"
        >
          <ToggleButton
            name="Credit Card"
            aria-label="credit card"
            value="credit card"
          >
            Credit Card
          </ToggleButton>
          <ToggleButton
            id="swish"
            name="Swish"
            aria-label="swish"
            value="swish"
          >
            <img src={SwishLogo} alt="Swish" height="20px" />
          </ToggleButton>
          <ToggleButton
            id="invoice"
            name="Invoice"
            aria-label="invoice"
            value="invoice"
          >
            Invoice
          </ToggleButton>
        </ToggleButtonGroup>

        <Container>
          {paymentMethod === "Swish" ? (
            <PaymentSwish />
          ) : paymentMethod === "Invoice" ? (
            <PaymentInvoice />
          ) : (
            <PaymentCreditCard />
          )}
        </Container>
      </Box>
    </Container>
  );
};

export default PaymentMethod;
