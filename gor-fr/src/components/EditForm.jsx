import React, { useState, useEffect } from "react";
import { Typography, TextField, Button } from "@mui/material";
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
      <h3>Record Resubmission</h3>
      <form onSubmit={handleSubmit}>
        <Typography
          sx={{
            fontFamily: "Handlee",
            textAlign: "center",
            mt: 2,
            fontSize: 13,
          }}
          color="text.secondary"
        >
          Having second thoughts? You can fix that here!
        </Typography>
        <div className="textField">
          <TextField
            id="message"
            value={post.message}
            variant="outlined"
            type="text"
            margin="normal"
            color="secondary"
            onChange={handleChange}
            name="message"
          />
        </div>
        <div className="modalButton">
          <Button
            sx={{ fontFamily: "Handlee", mt: 2 }}
            type="submit"
            variant="contained"
            color="secondary"
          >
            Update Record
          </Button>
        </div>
      </form>
    </div>
  );
}
