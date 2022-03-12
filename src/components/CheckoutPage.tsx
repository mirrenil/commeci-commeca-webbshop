import { Box, Button, Checkbox, TextField, Typography } from "@mui/material";
import PostnordLogo from "../assets/images/PostnordLogo.webp";
import DhlLogo from "../assets/images/DhlLogo.png";

function CheckoutPage() {
  return (
    <div style={{ display: "flex", flexDirection: "column", margin: "3rem" }}>
      <Typography variant="h5" gutterBottom style={{ marginTop: "1rem" }}>
        1. Shopping Cart
      </Typography>
      <Box
        sx={{
          height: 400,
          backgroundColor: "#F3F2F0",
        }}
      />

      <Typography variant="h5" gutterBottom style={{ marginTop: "2rem" }}>
        2. Delivery method
      </Typography>
      <Box
        sx={{
          height: 400,
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

        <Box
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginLeft: "2rem",
          }}
        >
          <Checkbox />
          <Box
            component="img"
            display="flex"
            style={{ height: "20px", margin: "2rem", justifyContent: "center" }}
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
          <Checkbox />
          <Box
            component="img"
            display="flex"
            style={{ height: "20px", margin: "2rem", justifyContent: "center" }}
            src={DhlLogo}
          />
          <Typography style={{}}>345:- (5-7 Weekdays)</Typography>
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
          <Typography
            variant="body1"
            style={{ marginLeft: "2rem", fontWeight: "bold" }}
          >
            Pick up on terminal
          </Typography>
          <Typography style={{ marginLeft: "1rem" }}>
            0:- (2-3 Weekdays)
          </Typography>
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
            id="name-input"
            name="name"
            label="Name"
            type="text"
            color="primary"
            margin="normal"
          />
          <TextField
            id="address-input"
            name="address"
            label="Home Address"
            type="text"
            color="primary"
            margin="normal"
          />
          <TextField
            id="email-input"
            name="email"
            label="Emailaddress"
            type="text"
            color="primary"
            margin="normal"
          />
          <TextField
            id="phonennumber-input"
            name="phonenumber"
            label="Phonenumber"
            type="text"
            color="primary"
            margin="normal"
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
        }}
      />

      <Button
        size="large"
        variant="contained"
        style={{
          textAlign: "center",
          margin: "2rem",
          width: "400px",
          backgroundColor: "#CAC2B9",
          color: "black",
          letterSpacing: "3px",
        }}
      >
        Confirm purchase
      </Button>
    </div>
  );
}

export default CheckoutPage;
