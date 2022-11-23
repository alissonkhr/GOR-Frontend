import React, { Fragment } from "react";
import { Link } from "react-router-dom";

export default function Game({ games }) {
  return (
    <Fragment>
      {games.map((game) => {
        const { id, background_image, name, released } = game;
        const imgSrc = background_image;
        return (
          <div>
            <img src={imgSrc} alt="Game Background"/>
            <div>
              <Link to={`/games/details/${id}`}>
                <h4>{name}</h4>
              </Link>
              <p>Release Date: {released}</p>
            </div>
          </div>
        );
      })}
    </Fragment>
  );
}
