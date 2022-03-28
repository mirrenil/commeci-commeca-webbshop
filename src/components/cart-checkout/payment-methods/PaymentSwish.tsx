import { Box, TextField } from "@mui/material";
import { useFormikContext } from "formik";
import { useEffect, useState } from "react";
import SwishLogo from "../../../assets/images/SwishLogo.svg";
import { FormValues } from "../../cart-checkout/CheckoutFormContainer";

const PaymentSwish = () => {
  const { values, errors, touched, handleChange, setFieldValue } =
    useFormikContext<FormValues>();
  const [swishNumber, setSwishNumber] = useState(values.phoneNumber);

  useEffect(() => {
    setSwishNumber(swishNumber);
    setFieldValue("swish", swishNumber);
  }, [setFieldValue, swishNumber]);

  return (
    <Box
      sx={{
        display: "flex",
        m: "2rem",
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      <img
        src={SwishLogo}
        alt="Swish"
        height="20px"
        style={{ marginTop: ".5rem", marginRight: "1rem" }}
      />
      {/* had to remove the error to import the phone number automatically! //error={touched.swish && Boolean(errors.swish)} */}
      <TextField
        style={{
          backgroundColor: "white",
          width: "200px",
          height: "40px",
        }}
        id="swish"
        name="swish"
        label="Phone number"
        type="text"
        size="small"
        value={values.phoneNumber}
        onChange={handleChange}
        helperText={errors.swish}
      />
    </Box>
  );
};

export default PaymentSwish;
