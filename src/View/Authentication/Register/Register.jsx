import React, { useEffect } from "react";
import "./Register.css";
import { NavLink, useNavigate } from "react-router-dom";
import loginPageLogo from "../../../assets/Untitled-design-1.png";
import emailIcon from "../../../assets/email (1) 1.png";
import hideSymbol from "../../../assets/visibility-off 1.png";
import googleLogo from "../../../assets/google logo.png";
import registerLeftImg from "../../../assets/ffc8d7f63cbbcb11078ba33cc7a584b0.jpg";

const Register = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="universal_container0">
        <div className="register-page-wrapper">
          <div className="register-left">
            <img src={registerLeftImg} alt="" />
          </div>
          <div className="register-right">
            <h2 className="register-heading">Create Account</h2>

            <form className="register-form">
              <div className="form-group icon-input">
                <label htmlFor="email">Name</label>
                <div className="form-group-input">
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your name"
                    required
                  />
                  {/* <i className="fas fa-envelope icon"></i> */}
                </div>
              </div>
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
                <label htmlFor="email">Set Password</label>
                <div className="form-group-input">
                  <input
                    type="password"
                    id="password"
                    placeholder="Set password"
                    required
                  />
                  <i className="fas fa-eye-slash icon"></i>
                </div>
              </div>
              <div className="form-group icon-input">
                <label htmlFor="email">Confirm Password</label>
                <div className="form-group-input">
                  <input
                    type="password"
                    id="password"
                    placeholder="Confirm password"
                    required
                  />
                  <i className="fas fa-eye-slash icon"></i>
                </div>
              </div>

              <button
                onClick={() => navigate("/login")}
                className="register-button"
                type="submit"
              >
                Register
              </button>

              {/* Forgot Password Link */}
              {/* <div className="forgot-password">
                <NavLink to="/forgot-password">Forgot Password?</NavLink>
              </div> */}

              <div className="divider">
                <span>Or continue with</span>
              </div>

              <div className="social-icons">
                <i className="fab fa-google"></i>
                <i className="fab fa-facebook-f"></i>
                <i className="fab fa-twitter"></i>
              </div>

              <p className="login-link">
                Already have an account ? <NavLink to="/login">Login</NavLink>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
