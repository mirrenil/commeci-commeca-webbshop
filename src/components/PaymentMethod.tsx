import {
  Box,
  Container,
  FormControlLabel,
  FormGroup,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import { useFormikContext } from "formik";
import { FormEvent } from "react";
import SwishLogo from "../assets/images/SwishLogo.svg";
import { useCart } from "../context/CartContextProvider";
import { FormValues } from "./CheckoutFormContainer";

const PaymentMethod = () => {
  const { paymentMethod, selectPaymentMethod } = useCart();
  const { values, errors, touched, handleChange } =
    useFormikContext<FormValues>();

  const handleRadioChange = (event: FormEvent<HTMLInputElement>) => {
    selectPaymentMethod(event.currentTarget.value);
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
        }}
      >
        <RadioGroup
          aria-label="payment method"
          name="payment"
          onChange={handleRadioChange}
          value={paymentMethod}
        >
          <FormGroup>
            <FormControlLabel
              control={<Radio />}
              value="Credit Card"
              label={
                <Box
                  sx={{
                    display: "flex",
                    m: "1rem",
                    flexDirection: {
                      xs: "column",
                      sm: "row",
                      md: "row",
                      lg: "row",
                    },
                  }}
                >
                  <Typography
                    style={{
                      fontWeight: "bold",
                      marginRight: "2.5rem",
                      marginTop: ".5rem",
                      justifyContent: "center",
                    }}
                  >
                    Card
                  </Typography>
                  <TextField
                    style={{
                      backgroundColor: "white",
                      width: "220px",
                    }}
                    sx={{
                      mt: {
                        xs: "1rem",
                        sm: "0rem",
                        md: "0rem",
                        lg: "0rem",
                      },
                    }}
                    id="cardNumber" // change back to card-number later
                    name="cardNumber" // change
                    label="Card Number" // change
                    type="text"
                    size="small"
                    value={values.cardNumber}
                    onChange={handleChange}
                    placeholder="XXXX-XXXX-XXXX-XXXX"
                    error={touched.cardNumber && Boolean(errors.cardNumber)}
                    helperText={errors.cardNumber}
                  />
                  <TextField
                    style={{
                      backgroundColor: "white",
                      width: "80px",
                      marginLeft: "1rem",
                    }}
                    sx={{
                      mt: {
                        xs: "1rem",
                        sm: "0rem",
                        md: "0rem",
                        lg: "0rem",
                      },
                    }}
                    id="cardExpiry"
                    name="cardExpiry"
                    label="MMYY"
                    type="text"
                    size="small"
                    value={values.cardExpiry}
                    onChange={handleChange}
                    error={touched.cardExpiry && Boolean(errors.cardExpiry)}
                    helperText={errors.cardExpiry}
                  />
                  <TextField
                    style={{
                      backgroundColor: "white",
                      width: "65px",
                      marginLeft: "1rem",
                    }}
                    sx={{
                      mt: {
                        xs: "1rem",
                        sm: "0rem",
                        md: "0rem",
                        lg: "0rem",
                      },
                    }}
                    id="cardCVC"
                    name="cardCVC"
                    label="CVC"
                    type="text"
                    size="small"
                    value={values.cardCVC}
                    onChange={handleChange}
                    error={touched.cardCVC && Boolean(errors.cardCVC)}
                    helperText={errors.cardCVC}
                  />
                </Box>
              }
            />
            <FormControlLabel
              control={<Radio />}
              value="Swish"
              label={
                <Box
                  sx={{
                    display: "flex",
                    m: "1rem",
                    flexDirection: {
                      xs: "column",
                      sm: "row",
                      md: "row",
                      lg: "row",
                    },
                  }}
                >
                  <img
                    src={SwishLogo}
                    alt="Swish"
                    height="20px"
                    style={{ marginTop: ".5rem", marginRight: "1rem" }}
                  />
                  <TextField
                    style={{
                      backgroundColor: "white",
                      width: "200px",
                    }}
                    sx={{
                      mt: {
                        xs: "1rem",
                        sm: "0rem",
                        md: "0rem",
                        lg: "0rem",
                      },
                    }}
                    id="swish"
                    name="swish"
                    label="Phone Number"
                    type="text"
                    size="small"
                    value={values.swish}
                    onChange={handleChange}
                    error={touched.swish && Boolean(errors.swish)}
                    helperText={errors.swish}
                  />
                </Box>
              }
            />
            <FormControlLabel
              control={<Radio />}
              value="Invoice"
              label={
                <Box
                  sx={{
                    display: "flex",
                    m: "1rem",
                    flexDirection: {
                      xs: "column",
                      sm: "row",
                      md: "row",
                      lg: "row",
                    },
                  }}
                >
                  <Typography
                    style={{
                      fontWeight: "bold",
                      marginRight: "1.5rem",
                      marginTop: ".5rem",
                      justifyContent: "center",
                    }}
                  >
                    Invoice
                  </Typography>
                  <TextField
                    style={{
                      backgroundColor: "white",
                      width: "220px",
                    }}
                    sx={{
                      mt: {
                        xs: "1rem",
                        sm: "0rem",
                        md: "0rem",
                        lg: "0rem",
                      },
                    }}
                    id="invoice"
                    name="invoice"
                    label="Personal Identity Number"
                    type="text"
                    size="small"
                    placeholder="YYYYMMDD-XXXX"
                    value={values.invoice}
                    onChange={handleChange}
                    error={touched.invoice && Boolean(errors.invoice)}
                    helperText={errors.invoice}
                  />
                </Box>
              }
            />
          </FormGroup>
        </RadioGroup>
      </Box>
    </Container>
  );
};
export default PaymentMethod;
