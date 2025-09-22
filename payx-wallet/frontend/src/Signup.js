import React, { useState } from "react";

const Signup = () => {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [response, setResponse] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      setResponse(data.message || data.error);
    } catch (error) {
      setResponse("Log in fails");
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "50px auto", textAlign: "center" }}>
      <h1>Signup</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" onChange={handleChange} required /><br /><br />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required /><br /><br />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} required /><br /><br />
        <button type="submit">Signup</button>
      </form>
      <p>{response}</p>
    </div>
  );
};

export default Signup;
