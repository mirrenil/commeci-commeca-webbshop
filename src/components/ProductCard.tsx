import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { CSSProperties } from "react";

const rootStyle: CSSProperties = {
  maxWidth: 345,
};
const cardStyle: CSSProperties = {
  height: 250,
};

function ProductCard() {
  return (
    <Container maxWidth="lg">
      <Grid
        container
        direction="column"
        justifyContent="space-evenly"
        alignItems="center"
      >
        <Grid item xs={12} sm={4}>
          <Card style={rootStyle}>
            <CardActionArea>
              <CardMedia
                style={cardStyle}
                image="../assets/products/soffbord.png"
                title="table"
              ></CardMedia>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  CATALINA sidobord 3-pack
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  3699:-
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Lägg till i varukorgen
              </Button>
            </CardActions>

            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                style={cardStyle}
                image="../assets/products/soffbord.png"
                title="table"
              ></CardMedia>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  CATALINA sidobord 3-pack
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  3699:-
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Lägg till i varukorgen
              </Button>
            </CardActions>

            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                style={cardStyle}
                image="../assets/products/soffbord.png"
                title="table"
              ></CardMedia>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  CATALINA sidobord 3-pack
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  3699:-
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Lägg till i varukorgen
              </Button>
            </CardActions>

            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                style={cardStyle}
                image="../assets/products/soffbord.png"
                title="table"
              ></CardMedia>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  CATALINA sidobord 3-pack
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  3699:-
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Lägg till i varukorgen
              </Button>
            </CardActions>

            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                style={cardStyle}
                image="../assets/products/soffbord.png"
                title="table"
              ></CardMedia>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  CATALINA sidobord 3-pack
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  3699:-
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Lägg till i varukorgen
              </Button>
            </CardActions>

            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                style={cardStyle}
                image="../assets/products/soffbord.png"
                title="table"
              ></CardMedia>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  CATALINA sidobord 3-pack
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  3699:-
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Lägg till i varukorgen
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default ProductCard;
