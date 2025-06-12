import React from "react";
import loginPageLogo from "../../../assets/Untitled-design-1.png";
import registerLeftImg from "../../../assets/ffc8d7f63cbbcb11078ba33cc7a584b0.jpg";
import { useNavigate } from "react-router-dom";

const NewPassword = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="universal_container0">
        <div className="register-page-wrapper">
          <div className="register-left">
            <img src={registerLeftImg} alt="" />
          </div>
          <div className="register-right">
            <h2 className="register-heading">Create New Password</h2>
            <p className="instruction-text">
              The password link will be sent via email, so the email must be
              active and match the one registered.
            </p>

            <form className="register-form">
              <div className="form-group icon-input">
                <label htmlFor="password">New Password</label>
                <div className="form-group-input">
                  <input
                    type="password"
                    id="password"
                    placeholder="New password"
                    required
                  />
                  <i className="fas fa-eye-slash icon"></i>
                </div>
              </div>

              <div className="form-group icon-input">
                <label htmlFor="password">New Confirm Password</label>
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
                Continue
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewPassword;
