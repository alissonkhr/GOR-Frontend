import React, { Fragment, useContext } from "react";
import { GameContext } from "../context/GameContext";
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
        <div className="gameContainers">
          <div>
            <SearchGames validateQGame={validateQGame} />
          </div>
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
            <Game games={searchedGames} />
          ) : (
            <p>No results found</p>
          )}
        </div>
      </div>
    </Fragment>
  );
}
