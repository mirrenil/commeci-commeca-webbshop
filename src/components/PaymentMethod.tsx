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
import { FormEvent, useState } from "react";
import SwishLogo from "../assets/images/SwishLogo.svg";
import { FormValues } from "./CheckoutFormContainer";

const PaymentMethod = () => {
  const { errors, touched, handleChange } = useFormikContext<FormValues>();
  const [paymentMethod, setPaymentMethod] = useState("");
  const handleRadioChange = (event: FormEvent<HTMLInputElement>) => {
    setPaymentMethod(event.currentTarget.value);
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
              value="card"
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
                    id="card-input"
                    name="cardNumber"
                    label="Card number"
                    type="text"
                    size="small"
                    onChange={handleChange}
                    error={touched.card && Boolean(errors.card)}
                    helperText={errors.card}
                  />
                </Box>
              }
            />
            <FormControlLabel
              control={<Radio />}
              value="swish"
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
                    id="number-input"
                    name="phoneNumber"
                    label="Phone number"
                    type="text"
                    size="small"
                    onChange={handleChange}
                    error={touched.swish && Boolean(errors.swish)}
                    helperText={errors.swish}
                  />
                </Box>
              }
            />
            <FormControlLabel
              control={<Radio />}
              value="invoice"
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
                    id="number-input"
                    name="personalNumber"
                    label="Personal number"
                    type="text"
                    size="small"
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
