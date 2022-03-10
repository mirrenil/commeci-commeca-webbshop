import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  SxProps,
  Theme,
  Typography,
} from "@mui/material";
import { CSSProperties } from "react";
import { Data } from "../ProductData";

interface Props {
  product: Data;
}

function ProductCard(props: Props) {
  return (
    <div>
      <Card sx={cardStyle}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="250"
            style={imgStyle}
            src={props.product.image}
            title={props.product.title}
            id={props.product.id}
            /* onClick={() => onselect()} */
          ></CardMedia>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.product.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {props.product.price}:-
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="inherit" variant="contained">
            Add to cart
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

const cardStyle: SxProps<Theme> = {
  width: 250,
  padding: "1rem",
  maxWidth: 345,
  boxShadow: "none",
};
const imgStyle: CSSProperties = {
  height: 250,
};

export default ProductCard;
