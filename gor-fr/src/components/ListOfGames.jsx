import React, { Fragment } from "react";
import { Grid } from "@mui/material";
import Game from "./Game";

export default function ListOfGames({ popularGames, upcomingGames, newGames }) {
  return (
    <Fragment>
      <Grid item xs={12} md={6} lg={4}>
        <h3>Popular Games</h3>
        <Grid container spacing={2}>
          <Game games={popularGames} listofgames />
        </Grid>
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <h3>Upcoming Games</h3>
        <Grid container spacing={2}>
          <Game games={upcomingGames} listofgames />
        </Grid>
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <h3>New Games</h3>
        <Grid container spacing={2}>
          <Game games={newGames} listofgames />
        </Grid>
      </Grid>
    </Fragment>
  );
}
