import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  FormGroup,
  TextField,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import DhlLogo from "../assets/images/DhlLogo.png";
import PostnordLogo from "../assets/images/PostnordLogo.webp";
import SwishLogo from "../assets/images/SwishLogo.svg";
import { useCart } from "../context/CartContextProvider";
import EmptyCart from "./EmptyCart";
import ShoppingCart from "./ShoppingCart";

interface FormValues {
  name: string;
  email: string;
  address: string;
  phonenumber: number;
}

const InitialValue: FormValues = {
  name: "Name",
  address: "Address",
  email: "Email",
  phonenumber: 12345,
};

const validationSchema = yup.object({
  name: yup.string().required("Name is required"),
  address: yup.string().required("Address is required"),
  email: yup.string().required("Email is required"),
  phonenumber: yup
    .string()
    .min(10, "Phonenumber should be minimum 10 characters"),
});

function CheckoutPage() {
  const { cart, numWithSpaces, sumCartAmount } = useCart();
  const { values, errors, touched, handleSubmit, handleChange } =
    useFormik<FormValues>({
      initialValues: InitialValue,
      validationSchema: validationSchema,
      onSubmit: (values) => {
        alert(JSON.stringify(values, null, 2));
        console.log("submitted");
      },
    });

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
              padding: "1rem",
            }}
          >
            {/* <Typography variant="h6" gutterBottom>
              Choose delivery:
            </Typography> */}
            <FormGroup>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label={
                  <Box sx={{ display: "flex" }}>
                    <img src={PostnordLogo} alt="Postnord" height="20px" />
                    <Typography style={{ marginLeft: "1rem" }}>
                      495 SEK (3-5 Weekdays)
                    </Typography>
                  </Box>
                }
              />
              <FormControlLabel
                control={<Checkbox />}
                label={
                  <Box sx={{ display: "flex" }}>
                    <img src={DhlLogo} alt="Postnord" height="20px" />
                    <Typography style={{ marginLeft: "1rem" }}>
                      345 SEK (5-7 Weekdays)
                    </Typography>
                  </Box>
                }
              />
              <FormControlLabel
                control={<Checkbox />}
                label={
                  <Box sx={{ display: "flex" }}>
                    <Typography style={{ fontWeight: "bold" }}>
                      Pick up on terminal
                    </Typography>
                    <Typography style={{ marginLeft: "1rem" }}>
                      Free (2-3 Weekdays)
                    </Typography>
                  </Box>
                }
              />
            </FormGroup>
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
                name="phonenumber"
                label="Phonenumber"
                type="text"
                margin="normal"
                value={values.phonenumber}
                onChange={handleChange}
                error={touched.phonenumber && Boolean(errors.phonenumber)}
                helperText={errors.phonenumber}
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
              padding: "1rem",
            }}
          >
            {/* <Typography variant="h6" gutterBottom>
              Choose payment method:
            </Typography> */}
            <FormGroup>
              <FormControlLabel
                control={<Checkbox />}
                label={
                  <Box sx={{ display: "flex" }}>
                    <Typography style={{ fontWeight: "bold" }}>Kort</Typography>
                  </Box>
                }
              />
              <FormControlLabel
                control={<Checkbox />}
                label={
                  <Box sx={{ display: "flex" }}>
                    <img src={SwishLogo} alt="Swish" height="20px" />
                  </Box>
                }
              />
              <FormControlLabel
                control={<Checkbox />}
                label={
                  <Box sx={{ display: "flex" }}>
                    <Typography style={{ fontWeight: "bold" }}>
                      Invoice
                    </Typography>
                  </Box>
                }
              />
            </FormGroup>
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
                fontFamily: "Prata",
              }}
            >
              Total: {numWithSpaces(sumCartAmount())} SEK
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
