import React from "react";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <nav className="Nav_bar">
      <Link to="/api/items">
        <p>All Items</p>
      </Link>
    </nav>
  );
};
export default Nav;
