import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{ padding: "1rem", background: "#f4f4f4" }}>
      <Link to="/" style={{ margin: "0 10px" }}>Home</Link>
      <Link to="/signup" style={{ margin: "0 10px" }}>Signup</Link>
      <Link to="/login" style={{ margin: "0 10px" }}>Login</Link>
    </nav>
  );
};

export default Navbar;
