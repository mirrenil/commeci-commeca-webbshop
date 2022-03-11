import { Box, Button, Typography } from "@mui/material";

function CheckoutPage() {
  return (
    <div style={{ display: "flex", flexDirection: "column", background: "red", margin: "3rem"}}>
      <Typography variant="h5" gutterBottom style={{ background: "yellow", marginTop: "1rem"}}>
        1. Shopping Cart
      </Typography>
      <Box
      sx={{
        height: 300,
        backgroundColor: "yellow",
      }}
    />

    <Typography variant="h5" gutterBottom style={{ background: "yellow", marginTop: "1rem"}}>
        2. Delivery method
      </Typography>
      <Box
      sx={{
        height: 300,
        backgroundColor: "yellow",
      }}
    />

    <Typography variant="h5" gutterBottom style={{ background: "yellow", marginTop: "1rem"}}>
        3. Contact details
      </Typography>
      <Box
      sx={{
        height: 300,
        backgroundColor: "yellow",
      }}
    />

    <Typography variant="h5" gutterBottom style={{ background: "yellow", marginTop: "1rem"}}>
        4. Payment method
      </Typography>
      <Box
      sx={{
        height: 300,
        backgroundColor: "yellow",
      }}
    />

    <Button
            size="large"
            variant="contained"
            style={{
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
