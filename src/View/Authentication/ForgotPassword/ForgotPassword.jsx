import React, { useEffect } from "react";
import "./ForgotPassword.css";
import loginPageLogo from "../../../assets/Untitled-design-1.png";
import { useNavigate } from "react-router-dom";
import registerLeftImg from "../../../assets/ffc8d7f63cbbcb11078ba33cc7a584b0.jpg";

const ForgotPassword = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);
  return (
    <>
      <div className="universal_container0">
        <div className="register-page-wrapper">
          <div className="register-left">
            <img src={registerLeftImg} alt="" />
          </div>
          <div className="register-right">
            <h2 className="register-heading">Forgot Password</h2>
            <p className="instruction-text">
              The password link will be sent via email, so the email must be
              active and match the one registered.
            </p>

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

              <button
                onClick={() => navigate("/otp-verify")}
                className="register-button"
                type="submit"
              >
                Send OTP
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
