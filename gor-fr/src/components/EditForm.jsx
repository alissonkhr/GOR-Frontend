import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

let baseUrl = process.env.REACT_APP_BACKEND_URL;

export default function EditForm() {
  const [post, setPost] = useState([]);
  const navigate = useNavigate();
  let { id } = useParams();

  const getOnePostById = (id) => {
    fetch(baseUrl + "/posts/" + id)
      .then((res) => res.json())
      .then((data) => {
        setPost(data.data);
      })
      .catch((error) => console.log(error));
  };

  const editPost = (post) => {
    fetch(baseUrl + "/posts/" + post, {
      credentials: "include",
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: post.message }),
    })
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        } else {
          navigate("/login");
        }
      })
      .then((data) => {
        console.log(data.data);
        getOnePostById(id);
        navigate("/posts");
      });
  };

  useEffect(() => {
    getOnePostById(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = (e) => {
    setPost(() => ({ ...post, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    editPost(id);
    setPost({
      message: "",
    });
  };

  return (
    <div>
      <h3>Resubmit Thoughts Here</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Your new message to the world: </label>
        <input
          id="message"
          type="text"
          name="message"
          value={post.message}
          onChange={handleChange}
        />
        <input type="submit" value="Update your Record" />
      </form>
    </div>
  );
}
