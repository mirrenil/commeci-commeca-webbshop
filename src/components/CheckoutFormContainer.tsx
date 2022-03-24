import { Box, Button } from "@mui/material";
import valid from "card-validator";
import { Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { useCart } from "../context/CartContextProvider";
import { Customer, useOrder } from "../context/OrderContextProvider";
import DeliveryDetails from "./DeliveryDetails";
import DeliveryOptions from "./DeliveryOptions";
import PaymentMethod from "./PaymentMethod";
import PriceOverview from "./PriceOverview";
export interface FormValues extends Customer {
  cardNumber: number | "";
  cardExpiry: number | "";
  cardCVC: number | "";
  swish: number | "";
  invoice: number | "";
}

function CheckoutFormContainer() {
  const navigate = useNavigate();
  const { emptyCart, isSwish, isCreditCard, isInvoice } = useCart();
  const { createOrder } = useOrder();

  const phoneRegExp = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
  const personalIdentityRegExp =
    /^(19|20)?(\d{6}([-+]|\s)\d{4}|(?!19|20)\d{10})$/;

  const InitialValue: FormValues = {
    name: "",
    email: "",
    address: "",
    phoneNumber: "",
    cardNumber: "",
    cardExpiry: "",
    cardCVC: "",
    swish: "",
    invoice: "",
  };

  const ValidationSchema = yup.object().shape({
    name: yup.string().min(2).required("Required"),
    address: yup.string().min(5).required("Required"),
    email: yup.string().email("Invalid email").required("Required"),
    phoneNumber: yup
      .string()
      .required("Required")
      .matches(phoneRegExp, "Invalid phone number"),

    cardNumber: yup.lazy(() => {
      if (isCreditCard) {
        return yup
          .string()
          .required("Required")
          .test(
            "test-number",
            "Invalid card number",
            (value) => valid.number(value).isValid
          );
      }
      return yup.string();
    }),

    cardExpiry: yup.lazy(() => {
      if (isCreditCard) {
        return yup
          .string()
          .required("Required")
          .test(
            "test-number",
            "Invalid",
            (value) => valid.expirationDate(value).isValid
          );
      }
      return yup.string();
    }),

    cardCVC: yup.lazy(() => {
      if (isCreditCard) {
        return yup
          .string()
          .required("Required")
          .test("test-number", "Invalid", (value) => valid.cvv(value).isValid);
      }

      return yup.string();
    }),

    swish: yup.lazy(() => {
      if (isSwish) {
        return yup
          .string()
          .required("Required")
          .matches(phoneRegExp, "Invalid phone number");
      }
      return yup.string();
    }),

    invoice: yup.lazy(() => {
      if (isInvoice) {
        return yup
          .string()
          .required("Required")
          .matches(personalIdentityRegExp, "Invalid personal identity number");
      }
      return yup.string();
    }),
  });

  return (
    <Formik
      initialValues={InitialValue}
      validationSchema={ValidationSchema}
      onSubmit={(values: FormValues) => {
        let promise = new Promise((resolve) => {
          setTimeout(() => {
            createOrder(values);
            resolve(values);
          }, 2000);
        });
        promise
          .then(() => {
            navigate("/confirmation");
            emptyCart();
          })
          .catch((error: Error) => {
            alert(error.message);
          });
      }}
    >
      <Form>
        <DeliveryOptions />
        <DeliveryDetails />
        <PaymentMethod />
        <PriceOverview />
        <Box style={{ textAlign: "center" }}>
          <Button
            size="large"
            variant="contained"
            style={{
              textAlign: "center",
              margin: "2rem",
              backgroundColor: "#CAC2B9",
              color: "white",
              letterSpacing: "3px",
            }}
            sx={{
              width: {
                xs: "300px",
                sm: "400px",
                md: "400px",
                lg: "400px",
              },
            }}
            type="submit"
          >
            Confirm purchase
          </Button>
        </Box>
      </Form>
    </Formik>
  );
}

export default CheckoutFormContainer;
