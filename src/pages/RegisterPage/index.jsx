import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import "./RegisterPage.css";
import { Link, useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [backendErrors, setBackendErrors] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null); 
  const navigate = useNavigate();

  const initialValues = {
    firstName: "",
    email: "",
    username: "",
    password: "",
    role: "USER",
  };

  const onSubmit = async (values) => {
    setIsLoading(true);
    setBackendErrors(null);
    try {
      const response = await axios.post(
        "http://localhost:8080/api/auth/register",
        values,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        setSuccessMessage("Registration successful!"); 
        setTimeout(() => {
          setSuccessMessage(null);
          navigate("/login");
        }, 2000);
      } else {
        console.error("Registration failed:", response);
        setBackendErrors({ general: "Registration failed. Please try again." });
      }
    } catch (error) {
      console.error("Registration error:", error);
      if (error.response && error.response.data) {
        if (typeof error.response.data === "object") {
          setBackendErrors(error.response.data);
        } else if (typeof error.response.data === "object" && error.response.data.message) {
          setBackendErrors({ general: error.response.data.message });
        } else {
          setBackendErrors({ general: "An error occurred during registration." });
        }
      } else {
        setBackendErrors({ general: "An error occurred during registration." });
      }
    } finally {
      setIsLoading(false);
    }
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required("first name is required"),
    email: Yup.string().email("Invalid email format").required("email is required"),
    username: Yup.string().required("username is required"),
    password: Yup.string().required("password is required").min(6, "password must be at least 6 characters"),
    role: Yup.string().required("Role is required"),
  });

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });

  return (
    <div className="register-page">
      <div className="register-container">
        <h1 className="register-title">EShop - Register</h1>
        {backendErrors && backendErrors.general && <div className="error-message-backend">{backendErrors.general}</div>}
        {successMessage && <div className="success-message">{successMessage}</div>} 
        <form onSubmit={formik.handleSubmit} className="register-form">
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              className={`form-field ${formik.errors.firstName && formik.touched.firstName ? "error-field" : ""}`}
              value={formik.values.firstName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.firstName && formik.touched.firstName && <small className="error-message">{formik.errors.firstName}</small>}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              id="email"
              className={`form-field ${formik.errors.email && formik.touched.email ? "error-field" : ""}`}
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.email && formik.touched.email && <small className="error-message">{formik.errors.email}</small>}
            {backendErrors && backendErrors.email && <small className="error-message">{backendErrors.email}</small>}
          </div>

          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              id="username"
              className={`form-field ${formik.errors.username && formik.touched.username ? "error-field" : ""}`}
              value={formik.values.username}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.username && formik.touched.username && <small className="error-message">{formik.errors.username}</small>}
            {backendErrors && backendErrors.username && <small className="error-message">{backendErrors.username}</small>}
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              className={`form-field ${formik.errors.password && formik.touched.password ? "error-field" : ""}`}
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.password && formik.touched.password && <small className="error-message">{formik.errors.password}</small>}
          </div>

          <div className="form-group">
            <label htmlFor="role">Role</label>
            <select
              name="role"
              id="role"
              className={`form-field ${formik.errors.role && formik.touched.role ? "error-field" : ""}`}
              value={formik.values.role}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            >
              <option value="USER">USER</option>
              <option value="ADMIN">ADMIN</option>
            </select>
            {formik.errors.role && formik.touched.role && <small className="error-message">{formik.errors.role}</small>}
          </div>

          <button
            type="submit"
            className="register-button"
            disabled={!formik.isValid || isLoading}
          >
            {isLoading ? "Registering..." : "Register"}
          </button>
        </form>
        <p className="signup-link">
          Already Registered? <Link to="/login">Click Here</Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;