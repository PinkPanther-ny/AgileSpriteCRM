import React from "react";
import { Link } from "react-router-dom";
import Bgborder from "../Bgborder";
import Group143614 from "../Group143614";
import Group1436142 from "../Group1436142";
import "./Login.css";

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
      <form className="login-2 animate-enter2 screen" name="login" action="https://agilespritebackend.herokuapp.com/account/login" method="post">
        <div className="overlap-group4">
          <img className="path-4606-1" src={path4606} />
          <img className="path-4643-1" src={path4643} />
          <div className="group-4808">
            <img className="sign-in-page" src={signInPage} />
            <div className="form border-1px-alto">
              <img className="agile-sprite-2" src={agilesprite} />
              <div className="log-in-5 tahoma-bold-blueberry-35px">{logIn}</div>
              <div className="email">
                <div className="email-1 tahoma-normal-blueberry-16px">
                  <span className="tahoma-regular-normal-scarpa-flow-16px">{spanText}</span>
                  <span className="tahoma-regular-normal-blueberry-16px">{spanText2}</span>
                </div>
                <div className="overlap-group2-2 border-1-5px-iron">
                  <div className="overlap-group-8">
                    <div className="rectangle-52 border-1-5px-dove-gray"></div>
                    <img className="path-54" src={path54} />
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
                  <div className="lock" style={{ backgroundImage: `url(${lock})` }}></div>
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
                     formTarget={'_blank'}
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
          <div className="overlap-group3-1">
            <Bgborder />
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
