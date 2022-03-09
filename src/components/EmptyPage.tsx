import { Box, Container, Typography } from "@mui/material";

interface Props {
  page: string;
}

const EmptyPage = (props: Props) => {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        padding: "1rem",
      }}
    >
      <Typography
        sx={{ textTransform: "uppercase", fontFamily: "Prata", mt: "1rem" }}
        variant="h5"
      >
        {props.page}
      </Typography>
      <Box
        sx={{
          height: "20rem",
          pt: "10rem",
        }}
      >
        <Typography sx={{ textAlign: "center", fontFamily: "Prata" }}>
          We are working hard to source new products from worldwide. <br />
          Sign up for our membership to make sure you are the first to be
          notified when we officially launch our store.
        </Typography>
      </Box>
    </Container>
  );
};

export default EmptyPage;
