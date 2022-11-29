import React, { Fragment, useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Typography, Button } from "@mui/material";

let baseUrl = process.env.REACT_APP_BACKEND_URL;

export default function PostContainer() {
  let { id } = useParams();
  const [post, setPost] = useState([]);
  const navigate = useNavigate();

  const getOnePostById = (id) => {
    fetch(baseUrl + "/posts/" + id)
      .then((res) => res.json())
      .then((data) => {
        setPost(data.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getOnePostById(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Fragment>
      <div>
        <h3>This Gamer Once Said...</h3>
        {post.id ? (
          <>
            <div>
              <Typography
                sx={{ fontFamily: "Handlee", textAlign: "center" }}
                variant="h5"
              >
                About {post.game},
              </Typography>
              <Typography
                sx={{ fontFamily: "Handlee", textAlign: "center" }}
                variant="body1"
              >
                "{post.message}"
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Handlee",
                  textAlign: "center",
                  fontSize: 12,
                }}
                variant="body1"
                color="text.secondary"
              >
                -{post.user.username} recorded this on {post.timestamp}
              </Typography>
            </div>
            <div className="crudButtonDiv">
              <Button
                className="crudButton"
                sx={{ fontFamily: "Handlee", m: 1 }}
                size="small"
                type="button"
                color="secondary"
                variant="contained"
                onClick={() => {
                  navigate(`/edit/${post.id}`);
                }}
              >
                Edit
              </Button>
              <Button
                className="crudButton"
                sx={{ fontFamily: "Handlee", m: 1 }}
                size="small"
                type="button"
                color="secondary"
                variant="contained"
                onClick={() => {
                  navigate(`/delete/${post.id}`);
                }}
              >
                Delete
              </Button>
            </div>
          </>
        ) : null}
      </div>
    </Fragment>
  );
}
