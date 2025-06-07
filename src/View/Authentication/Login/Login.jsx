import React, { useEffect } from "react";
import "./Login.css";
import { NavLink, useNavigate } from "react-router-dom";
import loginPageLogo from "../../../assets/Untitled-design-1.png";
import registerLeftImg from "../../../assets/ffc8d7f63cbbcb11078ba33cc7a584b0.jpg";

const Login = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);
  const navigate = useNavigate();
  return (
    <>
      <div className="universal_container0">
        <div className="register-page-wrapper">
          <div className="register-left">
            <img src={registerLeftImg} alt="" />
          </div>
          <div className="register-right">
            <h2 className="register-heading">Log In</h2>

            <form className="register-form">
              <div className="form-group icon-input">
                <label htmlFor="email">Email ID</label>
                <div className="form-group-input">
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    required
                  />
                  <i className="fas fa-envelope icon"></i>
                </div>
              </div>

              <div className="form-group icon-input">
                <label htmlFor="email">Password</label>
                <div className="form-group-input">
                  <input
                    type="password"
                    id="password"
                    placeholder="Enter password"
                    required
                  />
                  <i className="fas fa-eye-slash icon"></i>
                </div>
              </div>

              <button
                onClick={() => navigate("/profile")}
                className="register-button"
                type="submit"
              >
                Login
              </button>

              {/* Forgot Password Link */}
              <div className="forgot-password">
                <NavLink to="/forgot-password">Forgot Password?</NavLink>
              </div>

              <div className="divider">
                <span>Or continue with</span>
              </div>

              <div className="social-icons">
                <i className="fab fa-google"></i>
                <i className="fab fa-facebook-f"></i>
                <i className="fab fa-twitter"></i>
              </div>

              <p className="login-link">
                Not registered yet ?{" "}
                <NavLink to="/register">Create Account</NavLink>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
