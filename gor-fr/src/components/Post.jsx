import React, { Fragment, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Grid,
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from "@mui/material";

let baseUrl = process.env.REACT_APP_BACKEND_URL;

const style = {
  background: "linear-gradient(#e5bdf6, #d8dede)",
  minWidth: 350,
  maxWidth: 350,
};

export default function Post() {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  const getPosts = () => {
    fetch(baseUrl + "/posts/")
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        } else {
          return [];
        }
      })
      .then((data) => {
        setPosts(data.data);
      });
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <Fragment>
      <h3>The Gamers' Records</h3>
      {posts.map((post) => {
        const { id, game, message, timestamp, user } = post;
        return (
          <Grid
            key={id}
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            <div className="postCardDiv">
              <Card sx={style}>
                <CardContent>
                  <Typography
                    sx={{ fontSize: 11, fontFamily: "Handlee" }}
                    color="text.secondary"
                    gutterBottom
                  >
                    {timestamp}
                  </Typography>
                  <Typography
                    sx={{ fontFamily: "Handlee" }}
                    variant="h5"
                    component="div"
                  >
                    {game}
                  </Typography>
                  <Typography
                    sx={{ mb: 1.5, fontFamily: "Handlee" }}
                    color="text.secondary"
                  >
                    recorded by {user.username}
                  </Typography>
                  <Typography sx={{ fontFamily: "Handlee" }} variant="body2">
                    {message}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    sx={{ fontFamily: "Handlee" }}
                    size="small"
                    type="button"
                    color="secondary"
                    onClick={() => {
                      navigate(`/records/${id}`);
                    }}
                  >
                    Details
                  </Button>
                </CardActions>
              </Card>
            </div>
          </Grid>
        );
      })}
    </Fragment>
  );
}
