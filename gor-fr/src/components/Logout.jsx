import React from "react";
import { useNavigate } from "react-router-dom";

let baseUrl = process.env.REACT_APP_BACKEND_URL;

export default function Logout() {
  const navigate = useNavigate();
  const logoutUser = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(baseUrl + "/user/logout", {
        credentials: "include",
      });
      if (res.status === 200) {
        console.log("user logged out");
        navigate("/games");
      } else {
        navigate("/login");
      }
    } catch (err) {
      console.log("Error => ", err);
    }
  };

  return (
    <div>
      <button onClick={logoutUser}>Logout</button>
    </div>
  );
}
