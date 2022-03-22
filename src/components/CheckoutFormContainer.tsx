import { Button } from "@mui/material";
import { Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { useCart } from "../context/CartContextProvider";
import { useOrder } from "../context/OrderContextProvider";
import DeliveryDetails from "./DeliveryDetails";
import DeliveryOptions from "./DeliveryOptions";
import PaymentMethod from "./PaymentMethod";
import PriceOverview from "./PriceOverview";
import valid from "card-validator";

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

const phoneRegExp = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
const personalIdentityRegExp =
  /^(19|20)?(\d{6}([-+]|\s)\d{4}|(?!19|20)\d{10})$/;

const ContactValidationSchema = yup.object({
  name: yup.string().min(2).required("Required"),
  address: yup.string().min(5).required("Required"),
  email: yup.string().email("Invalid email").required("Required"),
  phoneNumber: yup
    .string()
    .required("Required")
    .matches(phoneRegExp, "Invalid phone number"),
  cardNumber: yup
    .string()
    .test(
      "test-number",
      "Invalid card number",
      (value) => valid.number(value).isValid
    )
    .required(),
  cardExpiry: yup
    .string()
    .test(
      "test-number",
      "Invalid",
      (value) => valid.expirationDate(value).isValid
    )
    .required(),
  cardCVC: yup
    .string()
    .test("test-number", "Invalid", (value) => valid.cvv(value).isValid)
    .required(),
  swish: yup.string().matches(phoneRegExp, "Invalid phone number"),
  invoice: yup
    .string()
    .matches(personalIdentityRegExp, "Invalid personal identity number"),
});

function CheckoutFormContainer() {
  const navigate = useNavigate();
  const { emptyCart } = useCart();
  const { createOrder } = useOrder();

  return (
    <Formik
      initialValues={InitialValue}
      validationSchema={ContactValidationSchema}
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
      </Form>
    </Formik>
  );
}

export default CheckoutFormContainer;
