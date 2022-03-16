import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  TextField,
  Typography,
  Container,
} from "@mui/material";
import DhlLogo from "../assets/images/DhlLogo.png";
import PostnordLogo from "../assets/images/PostnordLogo.webp";
import SwishLogo from "../assets/images/SwishLogo.svg";
import SkrivbordAlba from "../assets/images/SkrivbordAlba.webp";
import * as yup from "yup";
import { useFormik } from "formik";

interface FormValues {
  name: string;
  email: string;
  address: string;
  phonenumber: string;
}

const InitialValue: FormValues = {
  name: "Name",
  address: "Address",
  email: "Email",
  phonenumber: "Phonenumber",
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
  const { values, errors, touched, handleSubmit, handleChange } =
    useFormik<FormValues>({
      initialValues: InitialValue,
      validationSchema: validationSchema,
      onSubmit: (values) => {
        alert(JSON.stringify(values, null, 2));
        console.log("submitted");
      },
    });

  return (
    <div style={{ display: "flex", flexDirection: "column", margin: "3rem" }}>
      <Typography variant="h5" gutterBottom style={{ marginTop: "1rem" }}>
        1. Shopping Cart
      </Typography>
      <Box
        sx={{
          height: 330,
          backgroundColor: "#F3F2F0",
        }}
      >
        <Box
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Box
            component="img"
            display="flex"
            style={{
              height: "150px",
              margin: "2rem",
              justifyContent: "center",
            }}
            src={SkrivbordAlba}
          />
          <Typography style={{ margin: "1rem" }}>Skrivbord Alba</Typography>
          <Typography style={{ fontWeight: "bold" }}>2999:-</Typography>
        </Box>
        <Typography
          style={{
            fontWeight: "bold",
            marginLeft: "2rem",
            marginTop: "1rem",
          }}
          variant="h5"
        >
          Totalt:
        </Typography>
      </Box>
      <form onSubmit={handleSubmit}>
        <Typography variant="h5" gutterBottom style={{ marginTop: "2rem" }}>
          2. Delivery method
=======
import { useCart } from "../context/CartContextProvider";
import EmptyCart from "./EmptyCart";
import ShoppingCart from "./ShoppingCart";

function CheckoutPage() {
  const { cart, numWithSpaces, sumCartAmount } = useCart();

  return cart.length < 1 ? (
    <EmptyCart />
  ) : (
    <Container>
      <ShoppingCart />
      <Typography variant="h5" gutterBottom style={{ marginTop: "2rem" }}>
        2. Delivery method
      </Typography>

      <Box
        sx={{
          height: 350,
          backgroundColor: "#F3F2F0",
        }}
      >
        <Typography
          variant="h6"
          gutterBottom
          style={{ marginTop: "2rem", marginLeft: "2rem" }}
        >
          Choose delivery:
          </Typography>
          <Checkbox />
          <Box
            component="img"
            display="flex"
            style={{
              height: "20px",
              margin: "2rem",
              justifyContent: "center",
            }}
            src={PostnordLogo}
          />
          <Typography style={{}}>495:- (3-5 Weekdays)</Typography>
        </Box>

          <Box
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginLeft: "2rem",
            }}
          >
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
        </Box>
        <Typography variant="h5" gutterBottom style={{ marginTop: "2rem" }}>
          3. Contact details
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

        <Typography variant="h5" gutterBottom style={{ marginTop: "2rem" }}>
          4. Payment method
        </Typography>
        <Box
          sx={{
            height: 300,
            backgroundColor: "#F3F2F0",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Typography
            variant="h6"
            gutterBottom
            style={{
              margin: "2rem",
            }}
          >
            Choose Payment Method:
          </Typography>
          <Box
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginLeft: "2rem",
              marginBottom: "1rem",
            }}
          >
            <Checkbox />
            <Typography style={{ marginLeft: "1rem", fontWeight: "bold" }}>
              Kort
            </Typography>
          </Box>

          <Box
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginLeft: "2rem",
              marginBottom: "1rem",
            }}
          >
            <Checkbox />
            <Box
              component="img"
              display="flex"
              style={{
                height: "20px",
                justifyContent: "center",
                marginLeft: "1rem",
              }}
              src={SwishLogo}
            />
          </Box>

          <Box
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginLeft: "2rem",
            }}
          >
            <Checkbox />
            <Typography style={{ marginLeft: "1rem", fontWeight: "bold" }}>
              Faktura
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h5"
            style={{ marginTop: "2rem", fontWeight: "bold" }}
          >
            Total:
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

      </Box>
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
        >
          Confirm purchase
        </Button>
      </Box>
    </Container>

  );
}

export default CheckoutPage;
