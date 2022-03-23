import { Box, Typography, TextField } from "@mui/material";
import { useFormikContext } from "formik";
import { FormValues } from "./CheckoutFormContainer";

const PaymentCreditCard = () => {
  const { values, errors, touched, handleChange } =
    useFormikContext<FormValues>();

  return (
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
  );
};

export default PaymentCreditCard;
