import { Box, Button } from "@mui/material";
import valid from "card-validator";
import { Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { useCart } from "../context/CartContextProvider";
import { useOrder } from "../context/OrderContextProvider";
import DeliveryDetails from "./DeliveryDetails";
import DeliveryOptions from "./DeliveryOptions";
import PaymentMethod from "./PaymentMethod";
import PriceOverview from "./PriceOverview";

export interface FormValues {
  name: string;
  email: string;
  address: string;
  phoneNumber: number | "";
  cardNumber: number | "";
  cardExpiry: number | "";
  cardCVC: number | "";
  swish: number | "";
  invoice: number | "";
}
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

function CheckoutFormContainer() {
  const navigate = useNavigate();
  const { emptyCart, paymentMethod } = useCart();
  const { createOrder } = useOrder();

  const phoneRegExp = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
  const personalIdentityRegExp =
    /^(19|20)?(\d{6}([-+]|\s)\d{4}|(?!19|20)\d{10})$/;

  console.log(
    "Credit Card: " + Boolean(paymentMethod === "creditcard").toString()
  );
  console.log("Swish: " + Boolean(paymentMethod === "swish").toString());
  console.log("Invoice: " + Boolean(paymentMethod === "invoice").toString());

  const ValidationSchema = yup.object({
    name: yup.string().min(2).required("Required"),
    address: yup.string().min(5).required("Required"),
    email: yup.string().email("Invalid email").required("Required"),
    phoneNumber: yup
      .string()
      .required("Required")
      .matches(phoneRegExp, "Invalid phone number"),

    cardNumber: yup.string().when("paymentMethod", {
      is: (paymentMethod) => paymentMethod === "creditcard",
      then: yup
        .string()
        .test(
          "test-number",
          "Invalid card number",
          (value) => valid.number(value).isValid
        ),
      otherwise: yup.string(),
    }),

    cardExpiry: yup.string().when("paymentMethod", {
      is: (paymentMethod) => paymentMethod === "creditcard",
      then: yup
        .string()
        .test(
          "test-number",
          "Invalid",
          (value) => valid.expirationDate(value).isValid
        ),
      otherwise: yup.string(),
    }),

    cardCVC: yup.string().when("paymentMethod", {
      is: (paymentMethod) => paymentMethod === "creditcard",
      then: yup
        .string()
        .test("test-number", "Invalid", (value) => valid.cvv(value).isValid),
      otherwise: yup.string(),
    }),

    swish: yup.string().when(Boolean(paymentMethod === "swish").toString(), {
      is: true,
      then: yup
        .string()
        .matches(phoneRegExp, "Invalid phone number")
        .required("this must be filled"),
      otherwise: yup.string().required("this is required"),
    }),

    invoice: yup.string().when("paymentMethod", {
      is: (paymentMethod) => paymentMethod === "invoice",
      then: yup
        .string()
        .matches(personalIdentityRegExp, "Invalid personal identity number"),
      otherwise: yup.string(),
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
        promise.then(() => {
          navigate("/confirmation");
          emptyCart();
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
              width: "400px",
              backgroundColor: "#CAC2B9",
              color: "white",
              letterSpacing: "3px",
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
