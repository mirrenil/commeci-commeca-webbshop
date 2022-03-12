import { Box, Button, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import detailInfo from "../assets/images/detailinfo.png";
import { productData } from "../ProductData";

function DetailPage() {
  const params = useParams<{ id: string }>();
  const product = productData.find((products) => products.id === params?.id);
  if (!product) return null;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "4rem",
        marginBottom: "4rem",
      }}
    >
      <Box
        component="img"
        height="300"
        style={{
          height: "650px",
          maxWidth: "500px",
          marginTop: "2rem",
          marginBottom: "2rem",
        }}
        src={product.image}
        title={product.title}
        id={product.id}
      ></Box>
      <div
        style={{
          marginLeft: "7rem",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box style={{ width: "500px" }}>
          <Typography
            variant="h3"
            gutterBottom
            style={{ fontSize: "2rem", marginLeft: "2rem", marginTop: "4rem" }}
          >
            {product.title}
          </Typography>
          <Typography
            variant="h6"
            gutterBottom
            style={{
              fontSize: "13px",
              marginLeft: "2rem",
              marginTop: "1rem",
              marginBottom: "2rem",
              maxWidth: "400px",
              color: "#545454",
            }}
          >
            {product.description}
          </Typography>
          <Typography
            variant="h4"
            gutterBottom
            style={{
              marginLeft: "2.3rem",
              fontSize: "1.4rem",
            }}
          >
            {product.price}
          </Typography>
          <Button
            size="large"
            variant="contained"
            style={{
              margin: "2rem",
              width: "400px",
              backgroundColor: "#CAC2B9",
              letterSpacing: "3px",
              color: "black",
              fontWeight: "bold",
            }}
          >
            Add to cart
          </Button>
        </Box>
        <Box
          component="img"
          height="300"
          style={{
            height: "130px",
            width: "350px",
            maxWidth: "500px",
            marginLeft: "2.2rem",
          }}
          src={detailInfo}
        ></Box>
      </div>
    </div>
  );
}
export default DetailPage;
