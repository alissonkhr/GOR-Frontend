import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Grid } from "@mui/material";

export default function Game({ games, listofgames }) {
  return (
    <Fragment>
      {games.map((game) => {
        const { id, background_image, name, released } = game;
        const imgSrc = background_image;
        return (
          <Grid key={id} item xs={12} sm={listofgames ? 12 : 6} md={listofgames ? 12 : 4}>
            <div>
              <img src={imgSrc} alt="Game Background" />
              <div>
                <Link to={`/games/details/${id}`}>
                  <h4>{name}</h4>
                </Link>
                <p>Release Date: {released}</p>
              </div>
            </div>
          </Grid>
        );
      })}
    </Fragment>
  );
}
