import { Box, TextField } from "@mui/material";
import { useFormikContext } from "formik";
import SwishLogo from "../assets/images/SwishLogo.svg";
import { FormValues } from "./CheckoutFormContainer";

const PaymentSwish = () => {
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
  );
};

export default PaymentSwish;
