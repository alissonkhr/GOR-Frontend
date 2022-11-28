import React from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button } from "@mui/material";

let baseUrl = process.env.REACT_APP_BACKEND_URL;

export default function Login() {
  const navigate = useNavigate();
  const loginUser = async (e) => {
    e.preventDefault();
    const url = baseUrl + "/user/login";
    const loginBody = {
      username: e.target.username.value,
      password: e.target.password.value,
    };
    try {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(loginBody),
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      if (response.status === 200) {
        console.log("this is the login:", loginBody.username);
        navigate("/games");
      }
    } catch (err) {
      console.log("Error => ", err);
    }
  };

  return (
    <div className="loginForm">
      <h2>Login</h2>
      <form onSubmit={loginUser}>
        <div>
          <TextField
            id="username"
            label="Username"
            variant="outlined"
            type="text"
            margin="normal"
            color="secondary"
          />
        </div>
        <div>
          <TextField
            id="password"
            label="Password"
            variant="outlined"
            type="password"
            margin="normal"
            color="secondary"
          />
        </div>
        <div className="submissionButton">
          <Button
            type="submit"
            variant="contained"
            color="secondary"
            sx={{ fontFamily: "Handlee", mt: 2 }}
          >
            Login
          </Button>
        </div>
      </form>
    </div>
  );
}
