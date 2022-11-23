import React, { Fragment } from "react";
import Game from "./Game";

export default function ListOfGames({ popularGames, upcomingGames, newGames }) {
  return (
    <Fragment>
      <table>
        <tr>
          <th>Popular Games</th>
          <th>Upcoming Games</th>
          <th>New Games</th>
        </tr>
        <tr>
          <td>
            <Game games={popularGames} listofgames />
          </td>
          <td>
            <Game games={upcomingGames} listofgames />
          </td>
          <td>
            <Game games={newGames} listofgames />
          </td>
        </tr>
      </table>
    </Fragment>
  );
}
