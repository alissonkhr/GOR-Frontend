import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

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
      <Button
        sx={{ fontFamily: "Handlee" }}
        onClick={logoutUser}
        variant="contained"
        color="secondary"
      >
        Logout
      </Button>
    </div>
  );
}
