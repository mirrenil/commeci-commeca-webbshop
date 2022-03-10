import { Box, Container, Typography } from "@mui/material";

const NotFound = () => {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        padding: "1rem",
      }}
    >
      <Box
        sx={{
          height: "20rem",
          pt: "10rem",
        }}
      >
        <Typography sx={{ textAlign: "center", fontFamily: "Prata" }}>
          This page doesn't seem to exist.
        </Typography>
      </Box>
    </Container>
  );
};

export default NotFound;
