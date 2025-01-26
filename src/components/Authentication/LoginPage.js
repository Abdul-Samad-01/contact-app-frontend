import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import apiService from "../../service/ApiService";
import "../../css/authentication/LoginPage.css";

const LoginPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const isAuthenticated = await apiService.checkAuthStatus();
        if (isAuthenticated) {
          console.log("User is already authenticated");
          // navigate("/home"); // Redirect to the home page if logged in
        }
      } catch (error) {
        console.error("Authentication check failed:", error);
      }
    };

    checkAuth();
  }, [navigate]);

  const handleLogin = () => {
    window.location.href = "http://localhost:8080/signin";
  };

  return (
    <div className="login-body">
      <div className="sign-in-container">
        <h2>Log in to Contact Management</h2>
        <button className="google-btn" onClick={handleLogin}>
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
