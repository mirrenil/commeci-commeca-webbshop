import { TextFields } from "@mui/icons-material";
import { Box, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useFormikContext } from "formik";
import creditCardLogo from "../assets/images/creditCardLogo.png";
import { FormValues } from "./CheckoutFormContainer";

const PaymentCreditCard = () => {
  const { values, errors, touched, handleChange } =
    useFormikContext<FormValues>();

  const { required } = useStyles();

  const styles = (theme) => ({
    labelAsterisk: {
      color: "red",
    },
    cssLabel: {
      color: "orange",
    },
    cssRequired: {
      "&:before": {
        borderBottom: "2px solid orange",
      },
    },
  });

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
          className={required}
          style={{
            backgroundColor: "white",
            width: "220px",
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
          label="MM-YY"
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

const useStyles = makeStyles(() => ({
  required: {},
}));

export default PaymentCreditCard;
