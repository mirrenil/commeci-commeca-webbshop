import { Box, TextField } from "@mui/material";
import { useFormikContext } from "formik";
import creditCardLogo from "../../../assets/images/creditCardLogo.png";
import { FormValues } from "../CheckoutFormContainer";

const PaymentCreditCard = () => {
  const { values, errors, touched, handleChange } =
    useFormikContext<FormValues>();

  return (
    <Box
      sx={{
        display: "flex",
        m: "2rem",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          m: ".5rem",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img
          src={creditCardLogo}
          alt="Swish"
          height="20px"
          style={{ marginTop: ".5rem", marginRight: "1rem" }}
        />
        <TextField
          style={{
            backgroundColor: "white",
            width: "220px",
            height: "40px",
            marginBottom: "1.5rem",
          }}
          id="cardNumber"
          name="cardNumber"
          label="Card Number"
          type="text"
          size="small"
          value={values.cardNumber}
          onChange={handleChange}
          placeholder="XXXX-XXXX-XXXX-XXXX"
          error={touched.cardNumber && Boolean(errors.cardNumber)}
          helperText={errors.cardNumber}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          ml: "2rem",
        }}
      >
        <TextField
          style={{
            backgroundColor: "white",
            width: "80px",
            height: "40px",
            marginLeft: "2rem",
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
            width: "75px",
            height: "40px",
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
    </Box>
  );
};

export default PaymentCreditCard;
