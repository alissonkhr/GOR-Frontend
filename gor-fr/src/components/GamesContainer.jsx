import React, { Fragment, useContext } from "react";
import { GameContext } from "../context/GameContext";
import { Grid } from "@mui/material";
import SearchGames from "./SearchGames";
import ListOfGames from "./ListOfGames";
import Progress from "./Progress";
import Game from "./Game";

export default function GamesContainer() {
  const {
    doneFetchPopularGames,
    doneFetchUpcomingGames,
    doneFetchNewGames,
    doneFetchSearchedGames,
    popularGames,
    upcomingGames,
    newGames,
    searchedGames,
    validateQGame,
  } = useContext(GameContext);

  return (
    <Fragment>
      <div id="allGames">
        <div className="searchBar">
          <SearchGames validateQGame={validateQGame} />
        </div>
        <div className="gameContainers">
          {!doneFetchSearchedGames ? (
            doneFetchPopularGames &&
            doneFetchUpcomingGames &&
            doneFetchNewGames ? (
              <ListOfGames
                popularGames={popularGames}
                upcomingGames={upcomingGames}
                newGames={newGames}
              />
            ) : (
              <Progress />
            )
          ) : searchedGames.length ? (
            <Grid item xs={12} md={6} lg={4}>
              <h3>Search Results</h3>
              <Grid container spacing={2}>
                <Game games={searchedGames} listofgames />
              </Grid>
            </Grid>
          ) : (
            <p>No results found</p>
          )}
        </div>
      </div>
    </Fragment>
  );
}
