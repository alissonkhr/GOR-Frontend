import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import Logout from "./Logout";

export default function Navi() {
  let activeStyle = {
    backgroundColor: "#91cbcc",
  };

  return (
    <Fragment>
      <nav>
        <ul className="navBar">
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
          {/*<li>
          <NavLink
            to="/logged_in"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            TEST LOGIN{" "}
          </NavLink>
        </li>*/}
          <li>
            <Logout />
          </li>
        </ul>
      </nav>
    </Fragment>
  );
}
