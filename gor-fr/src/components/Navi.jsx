import React, { Fragment } from "react";
import Logout from "./Logout";
import { Button, Menu, MenuItem, Link } from "@mui/material";

export default function Navi() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Fragment>
      <nav>
        <Button
          sx={{ fontFamily: "Handlee" }}
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          color="secondary"
        >
          Menu
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={handleClose}>
            <Link
              href="/register"
              underline="hover"
              color="secondary"
              sx={{ fontFamily: "Handlee" }}
            >
              Register
            </Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link
              href="/login"
              underline="hover"
              color="secondary"
              sx={{ fontFamily: "Handlee" }}
            >
              Login
            </Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link
              href="/games"
              underline="hover"
              color="secondary"
              sx={{ fontFamily: "Handlee" }}
            >
              Games
            </Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link
              href="/records"
              underline="hover"
              color="secondary"
              sx={{ fontFamily: "Handlee" }}
            >
              Records
            </Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Logout />
          </MenuItem>
        </Menu>
        <h1>Gamers, On Record</h1>
      </nav>
    </Fragment>
  );
}
