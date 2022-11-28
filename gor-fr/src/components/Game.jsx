import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";

export default function Game({ games, listofgames }) {
  const navigate = useNavigate();

  return (
    <Fragment>
      <div className="gameCardDiv">
        {games.map((game) => {
          const { id, background_image, name, released } = game;
          const imgSrc = background_image;
          return (
            <Grid
              key={id}
              item
              xs={12}
              sm={listofgames ? 12 : 6}
              md={listofgames ? 12 : 4}
            >
              <Card sx={{ maxWidth: 250, mb: 2.5 }}>
                <CardMedia
                  component="img"
                  height="140"
                  image={imgSrc}
                  alt="game background"
                />
                <CardContent className="gameCardContent">
                  <h4>{name}</h4>
                  <p>Release Date: {released}</p>
                </CardContent>
                <CardActions className="gameCardButton">
                  <Button
                    sx={{ fontFamily: "Handlee" }}
                    size="small"
                    type="button"
                    color="secondary"
                    onClick={() => {
                      navigate("/records");
                    }}
                  >
                    Thoughts?
                  </Button>
                  <Button
                    sx={{ fontFamily: "Handlee" }}
                    size="small"
                    type="button"
                    color="secondary"
                    onClick={() => {
                      navigate(`/games/details/${id}`);
                    }}
                  >
                    See More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </div>
    </Fragment>
  );
}
