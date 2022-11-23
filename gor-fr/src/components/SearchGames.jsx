import React from "react";
import { TextField } from "@mui/material";

export default function SearchGames({ validateQGame }) {

  return (
      <TextField
        type="text"
        id="q_game"
        label="Search for a game"
        margin="normal"
        variant="outlined"
        fullWidth={true}
        style={{ width: "100%" }}
        onKeyPress={(e) => validateQGame(e)}
      />
  );
}
