import React, { Fragment } from "react";
import { Paper, ImageList, ImageListItem } from "@mui/material";
import Progress from "./Progress";

const style = {
  background: "linear-gradient(#e5bdf6, #d8dede)",
  marginBottom: 2,
  padding: 1
};

const GameScreenshots = ({ doneFetchScreenshots, screenshots }) => {
  return (
    <Fragment>
      {doneFetchScreenshots && screenshots ? (
        screenshots.results.length ? (
          <Paper elevation={3} sx={style}>
            <ImageList variant="masonry" cols={2} gap={8}>
              {screenshots.results.map((screenshot) => (
                <ImageListItem key={screenshot.id}>
                  <img
                    src={`${screenshot.image}?w=248&fit=crop&auto=format`}
                    srcSet={`${screenshot.image}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    alt="game screenshots"
                    loading="lazy"
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </Paper>
        ) : (
          <p>There are no screenshots available for this title</p>
        )
      ) : (
        <Progress />
      )}
    </Fragment>
  );
};

export default GameScreenshots;
