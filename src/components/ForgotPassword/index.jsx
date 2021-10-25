import React from "react";
import { Link } from "react-router-dom";
import Email from "../Email";
import BackgroundBorder from "../BackgroundBorder";
import Group143614 from "../Group143614";
import Group1436142 from "../Group1436142";
import "./ForgotPassword.css";

function ForgotPassword(props) {
  const { path4606, agilesprite, accountRecovery, confirm, text9, text10, path4643, emailProps } = props;

  return (
    <div className="container-center-horizontal">
      <form className="forgotpassword animate-enter4 screen" name="form3" method="post">
        <div className="overlap-group4-2">
          <img className="path-4606-3" src={path4606}  alt={" "}/>
          <div className="overlap-group2-4">
            <div className="form-2 border-1px-alto">
              <img className="agile-sprite-4" src={agilesprite} alt={" "}/>
              <div className="account-recovery tahoma-bold-blueberry-35px">{accountRecovery}</div>
              <Email className={emailProps.className} />
              <a href="" className="align-self-flex-start">
                <div className="signup-btn-2 smart-layers-pointers">
                  <div className="overlap-group-17">
                    <div className="hover-2 smart-layers-pointers hidden"/>
                    <div className="confirm tahoma-regular-normal-white-18px">{confirm}</div>
                  </div>
                </div>
              </a>
            </div>
            <div className="text-9 tahoma-regular-normal-dove-gray-17px">{text9}</div>
          </div>
          <div className="overlap-group3-3">
            <BackgroundBorder />
            <div className="menu-4">
              <Link to="/login">
                <div className="login-6 smart-layers-pointers">
                  <Group143614 />
                </div>
              </Link>
              <Link to="/signup">
                <div className="signup-5 smart-layers-pointers">
                  <Group1436142 />
                </div>
              </Link>
            </div>
            <Link to="/homepage">
              <div className="text-10 smart-layers-pointers tahoma-bold-ebony-clay-35px">{text10}</div>
            </Link>
          </div>
        </div>
        <img className="path-4643-3" src={path4643} alt={" "}/>
      </form>
    </div>
  );
}

export default ForgotPassword;
