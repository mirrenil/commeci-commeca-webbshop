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

const cardStyle: CSSProperties = {
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
  margin: "2rem",
  justifyContent: "space-evenly",
};

function ProductCard() {
  return (
    <div style={divStyle}>
      <Card style={cardStyle} sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            style={imgStyle}
            image=""
            title=""
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
          <Button size="small" color="primary">
            Lägg till i varukorgen
          </Button>
        </CardActions>
      </Card>

      <Card style={cardStyle} sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            style={imgStyle}
            image="../assets/products/soffbord.png"
            title="table"
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

      <Card style={cardStyle} sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            style={imgStyle}
            image="../assets/products/soffbord.png"
            title="table"
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

      <Card style={cardStyle} sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            style={imgStyle}
            image="../assets/products/soffbord.png"
            title="table"
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

      <Card style={cardStyle} sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            style={imgStyle}
            image="../assets/products/soffbord.png"
            title="table"
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
      <Card style={cardStyle}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            style={imgStyle}
            image="../assets/products/soffbord.png"
            title="table"
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
      <Card style={cardStyle} sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            style={imgStyle}
            image="../assets/products/soffbord.png"
            title="table"
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
      <Card style={cardStyle} sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            style={imgStyle}
            image="../assets/products/soffbord.png"
            title="table"
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
      <Card style={cardStyle} sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            style={imgStyle}
            image="../assets/products/soffbord.png"
            title="table"
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

export default ProductCard;
