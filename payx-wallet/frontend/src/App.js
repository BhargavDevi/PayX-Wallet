import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Signup from "./Signup";
import Login from "./Login";

function App() {
  return (
    <Router>
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <nav>
          <Link to="/signup" style={{ margin: "0 10px" }}>Signup</Link>
          <Link to="/login" style={{ margin: "0 10px" }}>Login</Link>
        </nav>
      </div>

      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
