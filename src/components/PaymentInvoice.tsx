import { Box, Typography, TextField } from "@mui/material";
import { useFormikContext } from "formik";
import { FormValues } from "./CheckoutFormContainer";

const PaymentInvoice = () => {
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
  );
};

export default PaymentInvoice;
