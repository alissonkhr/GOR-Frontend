import React from "react";
import { useNavigate } from "react-router-dom";

let baseUrl = process.env.REACT_APP_BACKEND_URL;

export default function Test() {
  const navigate = useNavigate();
  const test = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(baseUrl + "/user/logged_in", {
        credentials: "include",
      });
      if (res.status === 200) {
        console.log("user logged in currently");
      } else if (res.status === 401) {
        console.log("unauth");
        navigate("/login");
      }
    } catch (err) {
      console.log("Error => ", err);
    }
  };

  return (
    <div>
      <button onClick={test}>are you logged in</button>
    </div>
  );
}
