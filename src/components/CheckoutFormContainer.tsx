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
  isSwish: boolean;
  isCreditCard: boolean;
  isInvoice: boolean;
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
  isSwish: false || true,
  isCreditCard: false || true,
  isInvoice: false || true,
  cardNumber: "",
  cardExpiry: "",
  cardCVC: "",
  swish: "",
  invoice: "",
};

function CheckoutFormContainer() {
  const navigate = useNavigate();
  const { emptyCart } = useCart();
  const { createOrder } = useOrder();
  console.log(InitialValue);

  const phoneRegExp = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
  const personalIdentityRegExp =
    /^(19|20)?(\d{6}([-+]|\s)\d{4}|(?!19|20)\d{10})$/;

  const ValidationSchema = yup.object().shape({
    name: yup.string().min(2).required("Required"),
    address: yup.string().min(5).required("Required"),
    email: yup.string().email("Invalid email").required("Required"),
    phoneNumber: yup
      .string()
      .required("Required")
      .matches(phoneRegExp, "Invalid phone number"),

    isCreditCard: yup.boolean(),
    cardNumber: yup.string().when("isCreditCard", {
      is: true,
      then: yup
        .string()
        .test(
          "test-number",
          "Invalid card number",
          (value) => valid.number(value).isValid
        )
        .required("Required"),
      otherwise: yup.string(),
    }),

    cardExpiry: yup.string().when("isSwish", {
      is: true,
      then: yup
        .string()
        .test(
          "test-number",
          "Invalid",
          (value) => valid.expirationDate(value).isValid
        )
        .required("Required"),
      otherwise: yup.string(),
    }),

    cardCVC: yup.string().when("isSwish", {
      is: true,
      then: yup
        .string()
        .test("test-number", "Invalid", (value) => valid.cvv(value).isValid),
      otherwise: yup.string().required(),
    }),

    isSwish: yup.boolean(),
    swish: yup.string().when("isSwish", {
      is: true,
      then: yup
        .string()
        .matches(phoneRegExp, "Invalid phone number")
        .required("Required"),
      otherwise: yup.string(),
    }),

    isInvoice: yup.boolean(),
    invoice: yup.string().when("isInvoice", {
      is: true,
      then: yup
        .string()
        .matches(personalIdentityRegExp, "Invalid personal identity number")
        .required("Required"),
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
