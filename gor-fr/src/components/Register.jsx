import React from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button } from "@mui/material";

let baseUrl = process.env.REACT_APP_BACKEND_URL;

export default function Register() {
  const navigate = useNavigate();
  const register = async (e) => {
    e.preventDefault();
    const url = baseUrl + "/user/register";
    try {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify({
          username: e.target.username.value,
          password: e.target.password.value,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.status === 201) {
        console.log("user registered");
        navigate("/login");
      }
    } catch (err) {
      console.log("Error => ", err);
    }
  };

  return (
    <div className="registrationForm">
      <h2>Registration</h2>
      <form id="register-form" onSubmit={register}>
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
        <div>
          <Button
            sx={{ fontFamily: "Handlee" }}
            type="submit"
            variant="contained"
            color="secondary"
          >
            Register
          </Button>
        </div>
      </form>
    </div>
  );
}
