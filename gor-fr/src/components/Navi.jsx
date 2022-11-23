import React from "react";
import { NavLink } from "react-router-dom";

export default function Navi() {
  let activeStyle = {
    backgroundColor: "gold",
  };

  return (
    <nav>
      <NavLink to="/register" style={({ isActive }) => (isActive ? activeStyle : undefined)}>REGISTER </NavLink>
      <br />
      <NavLink
        to="/login"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        LOGIN
      </NavLink>
      <br />
      <NavLink
        to="/games"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        GAMES
      </NavLink>
      <br />
      <NavLink
        to="/logged_in"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        TEST LOGIN
      </NavLink>
    </nav>
  );
}
