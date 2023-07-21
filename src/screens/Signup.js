import React from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  let navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get the form data
    const formData = new FormData(event.target);
    const formObject = {};
    formData.forEach((value, key) => {
      formObject[key] = value;
    });

    try {
      // Send the form data to the /signup route using Axios
      const response = await axios.post(
        "http://localhost:4000/signup",
        formObject
      );

      // Check the response status and handle it accordingly
      if (response.status === 200) {
        // Successful response, handle it based on your application's logic
        console.log("User signed up successfully!");
        navigate("/");
      } else {
        // Error response, handle it based on your application's logic
        console.log("Error:", response.data.errors);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="container mt-5">
      <h1>Register to Foodio</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name:
          </label>
          <input type="text" className="form-control" name="name" required />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input type="email" className="form-control" name="email" required />
        </div>
        <div className="mb-3">
          <label htmlFor="location" className="form-label">
            Location:
          </label>
          <input
            type="text"
            className="form-control"
            name="location"
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
            required
          />
        </div>
        <button type="submit" className="btn btn-success">
          Sign Up
        </button>
        <Link to="/login" className="btn btn-danger ms-2">
          Already a User?
        </Link>
      </form>
    </div>
  );
};

export default Signup;
