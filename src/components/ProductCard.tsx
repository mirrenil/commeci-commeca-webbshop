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
import { Data } from "../ProductData";

interface Props {
  product: Data;
}

function ProductCard(props: Props) {
  return (
    <div style={rootStyle}>
      <Card style={cardStyle} sx={{ maxWidth: 345 }}>
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
          <Button size="small" color="primary">
            Lägg till i varukorgen
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

const cardStyle: CSSProperties = {
  width: 250,
  padding: "1rem",
};
const imgStyle: CSSProperties = {
  height: 250,
};
const rootStyle: CSSProperties = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "space-around",
};

export default ProductCard;
