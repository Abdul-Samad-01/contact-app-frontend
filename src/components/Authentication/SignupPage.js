import React from "react";
import "../../css/authentication/SignUp.css";

const SignupPage = () => {
  const handleSignup = () => {
    window.location.href = "http://localhost:8080/signup";
  };

  return (
    <div className="signup-body">
      <div className="sign-up-container">
        <h2>Sign up to Contact Management</h2>
        <button className="google-btn" onClick={handleSignup}>
          Sign up with Google
        </button>
      </div>
    </div>
  );
};

export default SignupPage;
