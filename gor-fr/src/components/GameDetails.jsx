import React, { Fragment } from "react";
import parse from "html-react-parser";
import {
  Grid,
  Typography,
  Paper,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import GameScreenshots from "./GameScreenshots";

const style = {
  background: "linear-gradient(#e5bdf6, #d8dede)",
};

const GameDetails = ({
  gameDetails,
  gameScreenshots,
  doneFetchGameScreenshots,
}) => {
  const { name, description, released } = gameDetails;

  return (
    <Fragment>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <h2>{name}</h2>
          <Typography
            sx={{ fontSize: 12, fontFamily: "Handlee", textAlign: "center" }}
            color="text.secondary"
          >
            Release date: {released}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Paper elevation={2} sx={style}>
            <Accordion>
              <AccordionSummary
                expandIcon="^"
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography sx={{ fontFamily: "Handlee", color: "#9c27b0" }}>
                  Game Details
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <div className="gameDetailsDescription">
                  {parse(description)}
                </div>
              </AccordionDetails>
            </Accordion>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <GameScreenshots
            doneFetchScreenshots={doneFetchGameScreenshots}
            screenshots={gameScreenshots}
          />
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default GameDetails;
