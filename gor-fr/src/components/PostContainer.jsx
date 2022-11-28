import React, { Fragment, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

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
        <h3>Having Second Thoughts?</h3>
        {post.id ? (
          <>
            <div>
              <h2>Game:</h2>
              <h3>{post.game}</h3>
              <h2>Message:</h2>
              <h3>{post.message}</h3>
              <h2>Written by:</h2>
              <h3>{post.user.username}</h3>
            </div>
            <div>
              <button onClick={() => navigate(`/edit/${post.id}`)}>
                Edit Record
              </button>
              <button onClick={() => navigate(`/delete/${post.id}`)}>
                Delete Record
              </button>
            </div>
          </>
        ) : null}
      </div>
    </Fragment>
  );
}
