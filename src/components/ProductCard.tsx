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
  data: Data;
}

function ProductCard(props: Props) {
  return (
    <div style={divStyle}>
      <Card style={rootStyle}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            style={cardStyle}
            src={props.data.image}
            title={props.data.title}
            id={props.data.id}
            /* onClick={() => onselect()} */
          ></CardMedia>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.data.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {props.data.price}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Lägg till i varukorgen
          </Button>
        </CardActions>
      </Card>
      <Card style={rootStyle}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            style={cardStyle}
            src={props.data.image}
            title={props.data.title}
            id={props.data.id}
          ></CardMedia>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              NAME OF PRODUKT
            </Typography>
            <Typography variant="body2" color="text.secondary">
              PRICE:-
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Lägg till i varukorgen
          </Button>
        </CardActions>
      </Card>
      <Card style={rootStyle}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            style={cardStyle}
            src={props.data.image}
            title={props.data.title}
            id={props.data.id}
          ></CardMedia>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              NAME OF PRODUKT
            </Typography>
            <Typography variant="body2" color="text.secondary">
              PRICE:-
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Lägg till i varukorgen
          </Button>
        </CardActions>
      </Card>
      <Card style={rootStyle}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            style={cardStyle}
            src={props.data.image}
            title={props.data.title}
            id={props.data.id}
          ></CardMedia>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              NAME OF PRODUKT
            </Typography>
            <Typography variant="body2" color="text.secondary">
              PRICE:-
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Lägg till i varukorgen
          </Button>
        </CardActions>
      </Card>
      <Card style={rootStyle}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            style={cardStyle}
            src={props.data.image}
            title={props.data.title}
            id={props.data.id}
          ></CardMedia>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              NAME OF PRODUKT
            </Typography>
            <Typography variant="body2" color="text.secondary">
              PRICE:-
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Lägg till i varukorgen
          </Button>
        </CardActions>
      </Card>
      <Card style={rootStyle}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            style={cardStyle}
            src={props.data.image}
            title={props.data.title}
            id={props.data.id}
          ></CardMedia>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              NAME OF PRODUKT
            </Typography>
            <Typography variant="body2" color="text.secondary">
              PRICE:-
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Lägg till i varukorgen
          </Button>
        </CardActions>
      </Card>
      <Card style={rootStyle}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            style={cardStyle}
            src={props.data.image}
            title={props.data.title}
            id={props.data.id}
          ></CardMedia>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              NAME OF PRODUKT
            </Typography>
            <Typography variant="body2" color="text.secondary">
              PRICE:-
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Lägg till i varukorgen
          </Button>
        </CardActions>
      </Card>
      <Card style={rootStyle}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            style={cardStyle}
            src={props.data.image}
            title={props.data.title}
            id={props.data.id}
          ></CardMedia>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              NAME OF PRODUKT
            </Typography>
            <Typography variant="body2" color="text.secondary">
              PRICE:-
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Lägg till i varukorgen
          </Button>
        </CardActions>
      </Card>
      <Card style={rootStyle}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            style={cardStyle}
            src={props.data.image}
            title={props.data.title}
            id={props.data.id}
          ></CardMedia>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              NAME OF PRODUKT
            </Typography>
            <Typography variant="body2" color="text.secondary">
              PRICE:-
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

const rootStyle: CSSProperties = {
  maxWidth: 330,
  padding: "2rem",
};
const cardStyle: CSSProperties = {
  height: 250,
};
const divStyle: CSSProperties = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  margin: "2rem",
  justifyContent: "space-evenly",
};

export default ProductCard;
