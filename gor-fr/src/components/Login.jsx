import React from "react";
import { useNavigate } from "react-router-dom";

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
    <div>
      <h2>Login Page</h2>
      <form onSubmit={loginUser}>
        <div>
          <label htmlFor="name">Username: </label>
          <input type="text" id="username" name="username" />
        </div>
        <div>
          <label htmlFor="name">Password: </label>
          <input type="password" id="password" name="password" />
        </div>
        <div>
          <input type="submit" value="Login" />
        </div>
      </form>
    </div>
  );
}
