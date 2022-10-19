import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";

export default function RecipeReviewCard(props) {
  const [expanded, setExpanded] = React.useState(false);
  const [love, setlove] = React.useState(false);
  function addToFavorites(e) {
    love ? setlove(false) : setlove(true);

    !love ? (e.target.style.color = "red") : (e.target.style.color = "");
  }
  function addToCart(e, w) {
    love ? setlove(false) : setlove(true);
    !love ? (e.target.style.color = "red") : (e.target.style.color = "");
    props.setaddToCart((pry) => {
      return [...pry, w];
    });
  }
  return (
    <>
      <Card sx={{ maxWidth: 400 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              <img src={props.item.images[0]} />
            </Avatar>
          }
          title={props.item.title}
          subheader={props.item.brand}
        />
        <CardMedia
          component="img"
          height="194"
          image={props.item.images[0]}
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary"></Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites" onClick={addToFavorites}>
            <FavoriteIcon />
          </IconButton>
          <IconButton
            aria-label="share"
            onClick={(e) => {
              addToCart(e, props.item.images[0]);
            }}
          >
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
    </>
  );
}
