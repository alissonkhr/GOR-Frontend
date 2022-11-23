import React, { Fragment } from "react";
import { Grid } from "@mui/material";
import Progress from "./Progress";

const GameScreenshots = ({ doneFetchScreenshots, screenshots }) => {
  return (
    <Fragment>
      {doneFetchScreenshots && screenshots ? (
        screenshots.results.length ? (
          screenshots.results.map((screenshot) => (
            <Grid item xs={12} sm={6} key={screenshot.id}>
              <img src={screenshot.image} alt={screenshot.id} />
            </Grid>
          ))
        ) : (
          <p>There are no screenshots available for this title</p>
        )
      ) : (
        <Progress />
      )}
    </Fragment>
  );
};

export default GameScreenshots;
