import { Box, Typography } from "@mui/material";
import { CSSProperties, useEffect, useState } from "react";
import { useAdmin } from "../context/AdminPageContext";
import { numWithSpaces } from "../Helper";
import { ProductData } from "../ProductData";

const StartPage = () => {
  const { products } = useAdmin();
  const [randomProducts, setRandomProducts] = useState<ProductData[]>([]);

  useEffect(() => {
    const getRandomProduct = () => {
      let randoms: ProductData[] = [];
      const numOfRandomProducts: number = 3;
      while (randoms.length < numOfRandomProducts) {
        let random: ProductData =
          products[Math.floor(Math.random() * products.length)];
        if (randoms.indexOf(random) === -1) {
          randoms.push(random);
        }
      }

      setRandomProducts(randoms);
    };
    getRandomProduct();
  }, [products]);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      {randomProducts.map((product) => (
        <Box
          key={product.title}
          sx={{
            display: "flex",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <img src={product.image} alt={product.title} style={imageStyle} />
          <Box
            style={{
              position: "absolute",
              top: Math.floor(Math.random() * (250 - 10) + 10),
              left: Math.floor(Math.random() * (400 - 10) + 10),
              textAlign: "center",
            }}
          >
            <Typography
              variant="h5"
              color="white"
              fontFamily="Prata"
              style={{
                textShadow: "#3c3c3c 1px 0 20px",
              }}
            >
              {product.title} <br />
            </Typography>
            <Typography
              variant="subtitle2"
              color="white"
              fontFamily="Prata"
              style={{ textShadow: "#3c3c3c 1px 0 20px" }}
            >
              {numWithSpaces(product.price)} SEK
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

const imageStyle: CSSProperties = {
  width: `calc(100vw/3)`,
};

export default StartPage;
