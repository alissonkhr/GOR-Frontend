import React from "react";
import { Link, Typography } from "@mui/material";

export default function Footer() {
  return (
    <div className="footer--pin">
      <footer>
        <Typography
          sx={{ fontFamily: "Handlee", p: 1 }}
          variant="body2"
          color="secondary"
        >
          Powered by
          <Link
            href="/register"
            underline="hover"
            color="secondary"
            sx={{ fontFamily: "Handlee", p: 1 }}
          >
            rawg.io
          </Link>
          API
        </Typography>
      </footer>
    </div>
  );
}
