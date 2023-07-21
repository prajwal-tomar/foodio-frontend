import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleLoginSubmit = async (event) => {
    event.preventDefault();

    try {
      // Send the form data to the /login route using Axios
      const response = await axios.post(
        "http://localhost:4000/login",
        formData,
        {
          withCredentials: true, // Include credentials (cookies) in the request
        }
      );

      // Check the response status and handle it accordingly
      if (response.status === 200) {
        localStorage.setItem("authToken", response.data.authToken);
        console.log(localStorage.getItem("authToken"));
        console.log(response.data.message);
        // Successful login, redirect to homepage
        navigate("/");
      } else {
        // Error response, handle it based on your application's logic
        setError("Invalid credentials. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setError("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="container mt-5">
      <h1>Login to Foodio</h1>
      <form onSubmit={handleLoginSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password:
          </label>
          <input
            type="password"
            className="form-control"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Log in
        </button>
        <Link to="/signup" className="btn btn-danger ms-2">
          Not a user? Register Now!
        </Link>
        {error && <div className="alert alert-danger mt-3">{error}</div>}
      </form>
    </div>
  );
}

export default Login;
