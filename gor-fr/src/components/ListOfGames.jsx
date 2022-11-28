import React, { Fragment } from "react";
import Game from "./Game";

export default function ListOfGames({ popularGames, upcomingGames, newGames }) {
  return (
    <Fragment>
      <div className="homepageGames">
        <ul className="homepageGamesList">
          <li className="gamesList">
            <h3>Popular Games</h3>
            <Game games={popularGames} listofgames />
          </li>
          <li className="gamesList">
            <h3>Upcoming Games</h3>
            <Game games={upcomingGames} listofgames />
          </li>
          <li className="gamesList">
            <h3>New Games</h3>
          <Game games={newGames} listofgames />
          </li>
        </ul>
      </div>
    </Fragment>
  );
}
