import {
  Card,
  CardActionArea,
  CardActions,
  CardMedia,
  SxProps,
  Theme,
  Typography,
} from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import { CSSProperties, useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContextProvider";
import { ProductData } from "../ProductData";

//import { Data } from "../ProductData";

interface Props {
  product: ProductData;
}

function ProductCard(props: Props) {
  const { addToCart } = useCart();
  const [isLoading, setIsLoading] = useState(false);

  const buttonOnLoad = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1000);
  };

  return (
    <Card sx={cardStyle}>
      <Link to={`/detail/${props.product.id}`} style={linkStyle}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="250"
            style={imgStyle}
            src={props.product.image}
            title={props.product.title}
            id={props.product.id}
          ></CardMedia>
        </CardActionArea>
        <Typography
          style={{ marginTop: "1rem" }}
          gutterBottom
          variant="h5"
          component="h2"
        >
          {props.product.title}
        </Typography>
      </Link>
      <div
        style={{
          display: "flex",
          gap: "2rem",
          alignItems: "center",
        }}
      >
        <Typography variant="body2" color="text.secondary">
          {props.product.price} SEK:-
        </Typography>
        <CardActions>
          <LoadingButton
            size="small"
            variant="contained"
            loading={isLoading}
            loadingIndicator="Adding..."
            style={{
              backgroundColor: "#CAC2B9",
            }}
            onClick={() => {
              addToCart(props.product);
              buttonOnLoad();
            }}
          >
            {}
            Add to cart
          </LoadingButton>
        </CardActions>
      </div>
    </Card>
  );
}

const cardStyle: SxProps<Theme> = {
  width: 250,
  padding: "1rem",
  maxWidth: 345,
  boxShadow: "none",
};
const imgStyle: CSSProperties = {
  height: 350,
};
const linkStyle: CSSProperties = {
  textDecoration: "none",
  color: "#333",
};

export default ProductCard;
