import { Box, Button, FormControl, Input, InputLabel, Typography } from "@mui/material";
import PostnordLogo from "../assets/images/PostnordLogo.webp"
import DhlLogo from "../assets/images/DhlLogo.png"

function CheckoutPage() {
  return (
    <div style={{ display: "flex", flexDirection: "column", margin: "3rem"}}>
      <Typography variant="h5" gutterBottom style={{ marginTop: "1rem"}}>
        1. Shopping Cart
      </Typography>
      <Box
      sx={{
        height: 400,
        backgroundColor: "#F3F2F0",
      }}
    />

    <Typography variant="h5" gutterBottom style={{ marginTop: "1rem"}}>
        2. Delivery method
      </Typography>
      <Box
      sx={{
        height: 400,
        backgroundColor: "#F3F2F0",
      }}
      > 
      <Typography variant="h6" gutterBottom style={{ marginTop: "2rem", marginLeft: "2rem"}}>
        Choose delivery:
      </Typography>
      <Box
          component="img"
          display="flex"
          style={{ height: "25px", margin: "2rem" }}
          src={PostnordLogo}
          >
      </Box>
        <Box
          component="img"
          style={{ height: "25px", margin: "2rem" }}
          src={DhlLogo}
        />
         <Typography variant="body1" gutterBottom style={{marginLeft: "2rem"}}>
        Pick up on terminal
      </Typography>
      </Box>

    <Typography variant="h5" gutterBottom style={{ marginTop: "1rem"}}>
        3. Contact details
      </Typography>
      <Box
      sx={{
        height: 300,
        backgroundColor: "#F3F2F0",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
      }}
      >
      <FormControl variant="filled" style={{width: "200px", alignItems: "center" }}>
      <InputLabel htmlFor="component-simple">Name</InputLabel>
      <Input id="filled-basic" />
    </FormControl>
    <FormControl variant="standard">
      <InputLabel htmlFor="component-simple">Address</InputLabel>
      <Input id="component-simple" />
    </FormControl>
    <FormControl variant="standard">
      <InputLabel htmlFor="component-simple">Phonenumber</InputLabel>
      <Input id="component-simple" />
    </FormControl>
    <FormControl variant="standard">
      <InputLabel htmlFor="component-simple">Emailaddress</InputLabel>
      <Input id="component-simple" />
    </FormControl>
    </Box>

    <Typography variant="h5" gutterBottom style={{ marginTop: "1rem"}}>
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
