import { Box, Button, Checkbox, TextField, Typography } from "@mui/material";
import PostnordLogo from "../assets/images/PostnordLogo.webp";
import DhlLogo from "../assets/images/DhlLogo.png";
import SwishLogo from "../assets/images/SwishLogo.svg";
import SkrivbordAlba from "../assets/images/SkrivbordAlba.webp";

function CheckoutPage() {
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
          style={{ fontWeight: "bold", marginLeft: "2rem", marginTop: "1rem" }}
          variant="h5"
        >
          Totalt:
        </Typography>
      </Box>

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
            style={{
              backgroundColor: "white",
            }}
            id="name-input"
            name="name"
            label="Name"
            type="text"
            color="primary"
            margin="normal"
          />
          <TextField
            style={{
              backgroundColor: "white",
            }}
            id="address-input"
            name="address"
            label="Home Address"
            type="text"
            color="primary"
            margin="normal"
          />
          <TextField
            style={{
              backgroundColor: "white",
            }}
            id="email-input"
            name="email"
            label="Emailaddress"
            type="text"
            color="primary"
            margin="normal"
          />
          <TextField
            style={{
              backgroundColor: "white",
            }}
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
        >
          Confirm purchase
        </Button>
      </Box>
    </div>
  );
}

export default CheckoutPage;
