import React from "react";

export default function SearchGames({ validateQGame }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Search for a game"
        onKeyPress={validateQGame}
      />
    </div>
  );
}
