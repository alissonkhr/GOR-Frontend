import React from "react";
import { useNavigate } from "react-router-dom";

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
    <div>
      <h2>Registration Page</h2>
      <form id="register-form" onSubmit={register}>
        <div>
          <label htmlFor="name">Username: </label>
          <input type="text" id="username" name="username" />
        </div>
        <div>
          <label htmlFor="name">Password: </label>
          <input type="password" id="password" name="password" />
        </div>
        <div>
          <input type="submit" value="Register" />
        </div>
      </form>
    </div>
  );
}
