import React, { Fragment, useContext } from "react";
import { GameDetailContext } from "../context/GameDetailContext";
import Progress from "./Progress";
import GameDetails from "./GameDetails";

const GameDetailsContainer = () => {
  const {
    doneFetchGameDetails,
    gameDetails,
    doneFetchGameScreenshots,
    gameScreenshots,
  } = useContext(GameDetailContext);
  return (
    <Fragment>
      {doneFetchGameDetails && gameDetails ? (
        <Fragment>
          <GameDetails
            gameDetails={gameDetails}
            gameScreenshots={gameScreenshots}
            doneFetchGameScreenshots={doneFetchGameScreenshots}
          />
        </Fragment>
      ) : (
        <Progress />
      )}
    </Fragment>
  );
};

export default GameDetailsContainer;