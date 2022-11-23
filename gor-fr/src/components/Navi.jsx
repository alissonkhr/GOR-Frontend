import React from "react";
import { NavLink } from "react-router-dom";

export default function Navi() {
  let activeStyle = {
    backgroundColor: "#91cbcc",
  };

  return (
    <nav>
      <ul>
        <li>
          <NavLink
            to="/register"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            REGISTER{" "}
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/login"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            LOGIN{" "}
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/games"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            GAMES{" "}
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/logged_in"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            TEST LOGIN{" "}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
