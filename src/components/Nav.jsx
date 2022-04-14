import React from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const Nav = () => {
  return (
    <Box sx={{ "& button": { m: 1 } }}>
      <div>
        <nav className="Nav_bar">
          <Link to="/api/items">
            <Button variant="contained" size="large" className="nav-items">
              All Items
            </Button>
          </Link>
          <Link to="/api/users">
            <p className="nav-items">User Registration</p>
          </Link>
        </nav>
      </div>
    </Box>
  );
};
export default Nav;
