import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { CSSProperties } from "react";
import { useCart } from "../context/CartContextProvider";
import { ProductData } from "../ProductData";

interface Props {
  product: ProductData;
}

function ProductCard(props: Props) {
  const { addToCart } = useCart();

  return (
    <div style={divStyle}>
      <Card style={rootStyle} sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="auto"
            style={imgStyle}
            src={props.product.image}
            title={props.product.title}
            id={props.product.id}
            /* onClick={() => onselect()} */
          ></CardMedia>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              NAME OF PRODUKT
            </Typography>
            <Typography variant="body2" color="text.secondary">
              PRICE HERE:-
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            size="small"
            color="primary"
            onClick={() => addToCart(props.product)}
          >
            Lägg till i varukorgen
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

const rootStyle: CSSProperties = {
  maxWidth: 330,
  padding: "2rem",
};
const imgStyle: CSSProperties = {
  height: 250,
};
const divStyle: CSSProperties = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  margin: "4rem",
  justifyContent: "space-evenly",
};

export default ProductCard;
