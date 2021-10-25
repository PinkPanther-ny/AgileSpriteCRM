import React from "react";
import { Link } from "react-router-dom";
import BackgroundBorder from "../BackgroundBorder";
import Group143614 from "../Group143614";
import Group1436142 from "../Group1436142";
import "./Login.css";
import "./LoginLoading.css";
import {validateLogin} from "./loginValidation";

function Login(props) {
  const {
    path4606,
    path4643,
    signInPage,
    agilesprite,
    logIn,
    spanText,
    spanText2,
    path54,
    inputType,
    inputPlaceholder,
    spanText3,
    spanText4,
    lock,
    inputType2,
    inputPlaceholder2,
    login,
    forgotPassword,
    signUpNow,
    text6,
  } = props;

  return (
    <div className="container-center-horizontal">
      <form className="loginForm animate-enter2 screen" name="login" onSubmit={validateLogin}>
        <div className="loginWholePage">

          <img className="backgroundShapeLeft" src={path4606}  alt={""}/>
          <img className="backgroundShapeRight" src={path4643}  alt={""}/>
          <div className="insidePageComponents">
            <img className="sign-in-page" src={signInPage}  alt={""}/>
            <div className="form border-1px-alto">

              <img className="agile-sprite-login_image" src={agilesprite} alt={""}/>
              <div className="log-in-text tahoma-bold-blueberry-35px">{logIn}</div>


              <div className="login_loading" id="login_loading"/>

              <div className="email">
                <div className="email-1 tahoma-normal-blueberry-16px">
                  <span className="tahoma-regular-normal-scarpa-flow-16px">{spanText}</span>
                  <span className="tahoma-regular-normal-blueberry-16px">{spanText2}</span>
                </div>
                <div className="overlap-group2-2 border-1-5px-iron">
                  <div className="overlap-group-8">
                    <div className="rectangle-52 border-1-5px-dove-gray"/>
                    <img className="path-54" src={path54}  alt={""}/>
                  </div>
                  <input
                    className="enter-email-address tahoma-regular-normal-dove-gray-16px"
                    name="email"
                    placeholder={inputPlaceholder}
                    type={inputType}
                    required
                  />
                </div>
              </div>
              <div className="password">
                <div className="password-1 tahoma-normal-blueberry-16px">
                  <span className="tahoma-regular-normal-scarpa-flow-16px">{spanText3}</span>
                  <span className="tahoma-regular-normal-blueberry-16px">{spanText4}</span>
                </div>
                <div className="overlap-group1-2 border-1-5px-iron">
                  <div className="lock" style={{backgroundImage: `url(${lock})`}}/>
                  <input
                    className="password-2 tahoma-regular-normal-dove-gray-16px"
                    name="password"
                    placeholder={inputPlaceholder2}
                    type={inputType2}
                    required
                  />
                </div>
              </div>
              <input className="login-btn smart-layers-pointers"
                     value={login}
                     type={"submit"}
              />
              <div className="flex-row">
                <Link to="/forgotpassword">
                  <div className="forgot-password tahoma-regular-normal-blueberry-17px">{forgotPassword}</div>
                </Link>
                <Link to="/signup">
                  <div className="sign-up-now tahoma-regular-normal-blueberry-17px">{signUpNow}</div>
                </Link>
              </div>
            </div>
          </div>
          <div className="loginPageHeaderBar">
            <BackgroundBorder />
            <div className="menu-2">
              <div className="login-4 smart-layers-pointers">
                <Group143614 />
              </div>
              <Link to="/signup">
                <div className="signup-2 smart-layers-pointers">
                  <Group1436142 />
                </div>
              </Link>
            </div>
            <Link to="/homepage">
              <div className="text-6 smart-layers-pointers tahoma-bold-ebony-clay-35px">{text6}</div>
            </Link>
          </div>

        </div>
      </form>
    </div>
  );
}

export default Login;
