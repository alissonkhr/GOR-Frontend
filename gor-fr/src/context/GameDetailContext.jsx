import React, { createContext, useState, useEffect } from "react";

export const GameDetailContext = createContext();
let baseUrl = process.env.REACT_APP_BACKEND_URL;

const GameDetailContextProvider = ({ children }) => {
  const game_id = window.location.pathname.split("/")[3];
  const [doneFetchGameDetails, setDoneFetchGameDetails] = useState(false);
  const [doneFetchGameScreenshots, setDoneFetchGameScreenshots] =
    useState(false);
  const [gameDetails, setGameDetails] = useState();
  const [gameScreenshots, setGameScreenshots] = useState();

  useEffect(() => getGameDetails(game_id), [game_id]);
  useEffect(() => getGameScreenshots(game_id), [game_id]);

  const getGameDetails = (game_id) => {
    fetch(baseUrl + "/games/details/" + game_id)
      .then((res) => res.json())
      .then((data) => {
        setDoneFetchGameDetails(true);
        setGameDetails(data);
      })
      .catch((error) => console.log(error));
  };

  const getGameScreenshots = (game_id) => {
    fetch(baseUrl + "/games/screenshots/" + game_id)
      .then((res) => res.json())
      .then((data) => {
        setDoneFetchGameScreenshots(true);
        setGameScreenshots(data);
      })
      .catch((error) => console.log(error));
  };

  return (
    <GameDetailContext.Provider
      value={{
        doneFetchGameDetails,
        gameDetails,
        doneFetchGameScreenshots,
        gameScreenshots,
      }}
    >
      {children}
    </GameDetailContext.Provider>
  );
};

export default GameDetailContextProvider;
