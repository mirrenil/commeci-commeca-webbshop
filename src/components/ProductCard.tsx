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
import { Link } from "react-router-dom";
import { Data } from "../ProductData";

interface Props {
  product: Data;
}

function ProductCard(props: Props) {
  return (
    <Card sx={cardStyle}>
      <Link to={`/detail/${props.product.id}`}>
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
      </Link>
      <CardActions>
        <Button
          size="small"
          variant="contained"
          style={{
            backgroundColor: "#CAC2B9",
          }}
        >
          Add to cart
        </Button>
      </CardActions>
    </Card>
  );
}

const cardStyle: CSSProperties = {
  width: 250,
  padding: "1rem",
};
const imgStyle: CSSProperties = {
  height: 250,
};

export default ProductCard;
