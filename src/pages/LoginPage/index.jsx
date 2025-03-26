import React, { useState } from "react";
import axios from "axios";
import { Formik, Form, ErrorMessage, Field } from "formik";
import * as Yup from "yup";
import { useNavigate, Link } from "react-router-dom";
import "./LoginPage.css";

const LoginPage = () => {
  const navigate = useNavigate();
  const [requestResponse, setRequestResponse] = useState({
    message: "",
    alertClassName: "",
  });

  const initialValues = {
    email: "",
    password: "",
  };

  const onSubmit = (values) => {
    values = {
      ...values,
      usernameOrEmail: values.email,
    };
    axios
      .post("http://localhost:8080/api/auth/login", values)
      .then(
        (response) => {
          setRequestResponse({
            message: "User login successful",
            alertClassName: "success",
          });
          localStorage.setItem("token", response.data);
          navigate("/");
        },
        (error) => {
          setRequestResponse({
            message: "Invalid email or password",
            alertClassName: "error",
          });
          console.error(error);
        }
      )
      .catch((error) => console.error(error));
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .required("Please enter email")
      .email("Please enter a valid email"),
    password: Yup.string()
      .required("Please enter password")
      .min(6, "Password must be at least 6 characters"),
  });

  return (
    <div className="login-page">
      <div className="login-container">
        <h1 className="login-title">EShop - Login</h1>
        {requestResponse.message && (
          <div className={`alert ${requestResponse.alertClassName}`}>
            {requestResponse.message}
          </div>
        )}
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
          validateOnMount
        >
          {(formik) => (
            <Form className="login-form">
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <Field
                  type="text"
                  name="email"
                  className={`form-field ${
                    formik.errors.email && formik.touched.email ? "error-field" : ""
                  }`}
                />
                <ErrorMessage
                  name="email"
                  component="small"
                  className="error-message"
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <Field
                  type="password"
                  name="password"
                  className={`form-field ${
                    formik.errors.password && formik.touched.password
                      ? "error-field"
                      : ""
                  }`}
                />
                <ErrorMessage
                  name="password"
                  component="small"
                  className="error-message"
                />
              </div>
              <button
                type="submit"
                className="login-button"
                disabled={!formik.isValid}
              >
                Login
              </button>
            </Form>
          )}
        </Formik>
        <p className="signup-link">
          New User? <Link to="/register">Click Here</Link> 
        </p>
      </div>
    </div>
  );
};

export default LoginPage;