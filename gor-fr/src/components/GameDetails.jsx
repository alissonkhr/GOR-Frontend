import React, { Fragment } from "react";
import parse from "html-react-parser";
import { Grid } from "@mui/material";
import GameScreenshots from "./GameScreenshots";

const GameDetails = ({
  gameDetails,
  gameScreenshots,
  doneFetchGameScreenshots,
}) => {
  const {
    name,
    description,
    released,
    clip,
  } = gameDetails;

  return (
    <Fragment>
      <Grid container spacing={3}>
        <Grid item sm={12} md={6}>
          <h1>{name}</h1>
          <p>
            <span>Release date:</span> {released}
          </p>
          <div>{parse(description)}</div>
        </Grid>
        <Grid item sm={12} md={6}>
          {clip ? (
            <video width="100%" height="350px" controls autoPlay muted>
              <source src={clip.clip} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : null}
            <Grid container spacing={1}>
              <GameScreenshots
                doneFetchScreenshots={doneFetchGameScreenshots}
                screenshots={gameScreenshots}
              />
            </Grid>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default GameDetails;