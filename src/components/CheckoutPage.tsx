import {
  Box,
  Button,
  Container,
  FormControlLabel,
  FormGroup,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import SwishLogo from "../assets/images/SwishLogo.svg";
import { useCart } from "../context/CartContextProvider";
import { useOrder } from "../context/OrderContextProvider";
import { numWithSpaces, UseSumTotal } from "../Helper";
import { shippingProvider } from "../ShippingProviderData";
import EmptyCart from "./EmptyCart";
import ShoppingCart from "./ShoppingCart";
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

function CheckoutPage() {
  const navigate = useNavigate();
  const [value, setValue] = useState("postnord");
  const { cart, emptyCart, selectShippment } = useCart();
  const { createOrder } = useOrder();

  const { values, errors, touched, handleSubmit, handleChange } =
    useFormik<FormValues>({
      initialValues: InitialValue,
      validationSchema: ContactValidationSchema,

      // what to do onSubmit: (1) generate order number -done; (2) save the order number, the purchase and form values -half done, saved order no and part of the form value;
      // (3) empty the cart -done (4) direct to confirmation page -half done for part of the form value
      onSubmit: (values: FormValues) => {
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
      },
    });

  const handleRadioChange = (event: FormEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.value);
  };

  return cart.length < 1 ? (
    <EmptyCart />
  ) : (
    <Container>
      {/* below is for shopping cart */}
      <ShoppingCart />

      {/* below is for delivery method */}
      <Container
        sx={{
          padding: "1rem",
        }}
      >
        <form onSubmit={handleSubmit}>
          <Typography
            sx={{
              textTransform: "uppercase",
              fontFamily: "Prata",
              mt: "1rem",
              mb: "1rem",
            }}
            variant="h5"
          >
            2. Delivery Method
          </Typography>

          <Box
            sx={{
              backgroundColor: "#F3F2F0",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              padding: "2rem",
            }}
          >
            <RadioGroup
              aria-label="delivery method"
              name="delivery"
              onChange={handleRadioChange}
              value={value}
            >
              {shippingProvider.map((provider) => {
                return provider.cost !== 0 ? (
                  <FormControlLabel
                    control={<Radio />}
                    value={provider.providerName}
                    key={provider.providerName}
                    onClick={() => selectShippment(provider)}
                    label={
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-around",
                          m: "1rem 2rem",
                        }}
                      >
                        <img
                          src={provider.logoImage}
                          alt={provider.providerName}
                          height="20px"
                        />
                        <Typography
                          variant="body2"
                          style={{ marginLeft: "1rem" }}
                        >
                          {provider.cost} SEK ({provider.deliveryTime})
                        </Typography>
                      </Box>
                    }
                  />
                ) : (
                  <FormControlLabel
                    control={<Radio />}
                    value={provider.providerName}
                    key={provider.providerName}
                    onClick={() => selectShippment(provider)}
                    label={
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-around",
                          m: "1rem 2rem",
                        }}
                      >
                        <Typography style={{ fontWeight: "bold" }}>
                          {provider.providerName}
                        </Typography>
                        <Typography
                          variant="body2"
                          style={{ marginLeft: "1rem" }}
                        >
                          Free ({provider.deliveryTime})
                        </Typography>
                      </Box>
                    }
                  />
                );
              })}
            </RadioGroup>
          </Box>

          {/* below is for contact details */}
          <Typography
            sx={{
              textTransform: "uppercase",
              fontFamily: "Prata",
              mt: "3rem",
              mb: "1rem",
            }}
            variant="h5"
          >
            3. Contact Details
          </Typography>
          <Box
            sx={{
              height: 470,
              backgroundColor: "#F3F2F0",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "600px",
              }}
            >
              <TextField
                style={{
                  backgroundColor: "white",
                }}
                id="name-input"
                name="name"
                label="Name"
                type="text"
                margin="normal"
                value={values.name}
                onChange={handleChange}
                error={touched.name && Boolean(errors.name)}
                helperText={errors.name}
              />
              <TextField
                style={{
                  backgroundColor: "white",
                }}
                id="address-input"
                name="address"
                label="Home Address"
                type="text"
                margin="normal"
                value={values.address}
                onChange={handleChange}
                error={touched.address && Boolean(errors.address)}
                helperText={errors.address}
              />
              <TextField
                style={{
                  backgroundColor: "white",
                }}
                id="email-input"
                name="email"
                label="Email"
                type="text"
                margin="normal"
                value={values.email}
                onChange={handleChange}
                error={touched.address && Boolean(errors.email)}
                helperText={errors.email}
              />
              <TextField
                style={{
                  backgroundColor: "white",
                }}
                id="phonennumber-input"
                name="phoneNumber"
                label="Phone number"
                type="text"
                margin="normal"
                value={values.phoneNumber}
                onChange={handleChange}
                error={touched.phoneNumber && Boolean(errors.phoneNumber)}
                helperText={errors.phoneNumber}
              />
            </Box>
          </Box>

          {/* below is for payment method */}
          <Typography
            sx={{
              textTransform: "uppercase",
              fontFamily: "Prata",
              mt: "3rem",
              mb: "1rem",
            }}
            variant="h5"
          >
            4. Payment Method
          </Typography>

          <Box
            sx={{
              backgroundColor: "#F3F2F0",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              padding: "2rem",
            }}
          >
            <RadioGroup
              aria-label="payment method"
              name="payment"
              onChange={handleRadioChange}
              value={value}
            >
              <FormGroup>
                <FormControlLabel
                  control={<Radio />}
                  value="card"
                  label={
                    <Box
                      sx={{
                        display: "flex",
                        m: "1rem",
                      }}
                    >
                      <Typography
                        style={{
                          fontWeight: "bold",
                          marginRight: "2.5rem",
                          marginTop: ".5rem",
                          justifyContent: "center",
                        }}
                      >
                        Card
                      </Typography>
                      <TextField
                        style={{
                          backgroundColor: "white",
                          width: "250px",
                        }}
                        id="card-input"
                        name="card"
                        label="Card number"
                        type="text"
                        size="small"
                        onChange={handleChange}
                        error={touched.card && Boolean(errors.card)}
                        helperText={errors.card}
                      />
                    </Box>
                  }
                />
                <FormControlLabel
                  control={<Radio />}
                  value="swish"
                  label={
                    <Box sx={{ display: "flex", m: "1rem" }}>
                      <img
                        src={SwishLogo}
                        alt="Swish"
                        height="20px"
                        style={{ marginTop: ".5rem", marginRight: "1rem" }}
                      />
                      <TextField
                        style={{
                          backgroundColor: "white",
                          width: "250px",
                        }}
                        id="number-input"
                        name="phonenumber"
                        label="Phone number"
                        type="text"
                        size="small"
                        onChange={handleChange}
                        error={touched.swish && Boolean(errors.swish)}
                        helperText={errors.swish}
                      />
                    </Box>
                  }
                />
                <FormControlLabel
                  control={<Radio />}
                  value="invoice"
                  label={
                    <Box sx={{ display: "flex", m: "1rem" }}>
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
                          width: "250px",
                        }}
                        id="number-input"
                        name="personalnumber"
                        label="Personal number"
                        type="text"
                        size="small"
                        onChange={handleChange}
                        error={touched.invoice && Boolean(errors.invoice)}
                        helperText={errors.invoice}
                      />
                    </Box>
                  }
                />
              </FormGroup>
            </RadioGroup>
          </Box>

          {/* below is for total and form submit */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h6"
              style={{
                marginTop: "2rem",
                fontWeight: "bold",
              }}
            >
              {/* this calculation must be updated as shipping cost is not added  */}
              Total: {numWithSpaces(UseSumTotal(cart, true))} SEK
            </Typography>
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
        </form>
      </Container>
    </Container>
  );
}

export default CheckoutPage;
