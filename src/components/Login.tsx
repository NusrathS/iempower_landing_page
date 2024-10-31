import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';  // Importing Formik components for form handling
import * as Yup from 'yup';  // Importing Yup for form validation
import '../App.css';  // Import the CSS file for styling the login form
import { useNavigate } from 'react-router-dom';  // React Router hook for navigation

/*
  Project:     iEmpower Landing Page
  Module:      Login Page
  Component:   Login.tsx
  Logic:       Login form using Formik and Yup for form validation.
  Author:      Nusrath
  Date:        2024-10-23
*/

// Validation schema for the login form using Yup
const validationSchema = Yup.object({
  email: Yup.string()
    .email('Invalid email address')  // Check for a valid email format
    .required('Email is required'),  // Email is required
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')  // Minimum length for password
    .required('Password is required'),  // Password is required
});

// Define the Login component
const Login: React.FC = () => {
  const navigate = useNavigate();  // Hook to programmatically navigate between pages

  // Function to handle login service call
  const handleLoginSubmit = async (values: { email: string; password: string }) => {
    try {
      // Example of calling a Node.js API endpoint to validate login
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        console.log('Login successful');
        navigate('/dashboard');  // Navigate to dashboard or any other screen upon successful login
      } else {
        console.error('Login failed');
        // Handle login failure (e.g., show an error message)
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <div className="login-container">  {/* Main container for the login form */}
      <h2>Login</h2>  {/* Header for the login form */}
      <Formik
        initialValues={{ email: '', password: '' }}  // Initial values for the form fields
        validationSchema={validationSchema}  // Validation schema for the form
        onSubmit={(values) => handleLoginSubmit(values)}  // On submit, call handleLoginSubmit
      >
        {({ handleReset }) => (
          <Form className="login-form">  {/* Main form element */}
            <div className="form-group">  {/* Container for email input */}
              <label htmlFor="email">Email</label>  {/* Label for email input */}
              <Field
                name="email"  // Name of the input field
                type="email"  // Input type
                className="form-control"  // CSS class for styling
                placeholder="Enter your email"  // Placeholder text
              />
              <ErrorMessage name="email" component="div" className="error-message" />  {/* Display validation error for email */}
            </div>
            <div className="form-group">  {/* Container for password input */}
              <label htmlFor="password">Password</label>  {/* Label for password input */}
              <Field
                name="password"  // Name of the input field
                type="password"  // Input type
                className="form-control"  // CSS class for styling
                placeholder="Enter your password"  // Placeholder text
              />
              <ErrorMessage name="password" component="div" className="error-message" />  {/* Display validation error for password */}
            </div>
            <div className="button-group">  {/* Group for submit and cancel buttons */}
              <button type="submit" className="login-btn">  {/* Submit button */}
                Login
              </button>
              <button
                type="button"
                className="cancel-btn"
                onClick={() => navigate('/navbar')}  // On click, navigate back to the Navbar
              >
                Cancel
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;  // Exporting the Login component
