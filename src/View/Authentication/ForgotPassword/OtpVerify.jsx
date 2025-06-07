import React from "react";
import loginPageLogo from "../../../assets/Untitled-design-1.png";
import { useNavigate } from "react-router-dom";
import registerLeftImg from "../../../assets/ffc8d7f63cbbcb11078ba33cc7a584b0.jpg";

const OtpVerify = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="universal_container0">
        <div className="register-page-wrapper">
          <div className="register-left">
            <img src={registerLeftImg} alt="" />
          </div>
          <div className="register-right">
            <h2 className="register-heading">OTP Verification</h2>
            <p className="instruction-text">
              The password link will be sent via email, so the email must be
              active and match the one registered.
            </p>

            <form className="register-form">
              <div className="otp-inputs">
                <input type="text" maxLength="1" required />
                <input type="text" maxLength="1" required />
                <input type="text" maxLength="1" required />
                <input type="text" maxLength="1" required />
              </div>

              <button
                onClick={() => navigate("/confirm-password")}
                className="register-button"
                type="submit"
              >
                Verify OTP
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default OtpVerify;
