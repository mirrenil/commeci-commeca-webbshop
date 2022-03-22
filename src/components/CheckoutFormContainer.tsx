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

export interface FormValues {
  name: string;
  email: string;
  address: string;
  phoneNumber: number;
  card: number;
  swish: number;
  invoice: number;
}
const InitialValue: FormValues = {
  name: "Name",
  address: "Address",
  email: "Email",
  phoneNumber: 1234567890,
  card: 1234,
  swish: 1234,
  invoice: 1234,
};

const ContactValidationSchema = yup.object({
  name: yup.string().required("Name is required"),
  address: yup.string().required("Address is required"),
  email: yup.string().required("Email is required"),
  phoneNumber: yup.string().required("Phone number is required"),
  card: yup.string().required("Card number is required"),
  swish: yup.string().required("Phone number is required"),
  invoice: yup.string().required("Personal number is required"),
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
