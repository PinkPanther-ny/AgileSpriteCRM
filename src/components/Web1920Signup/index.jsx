import React from "react";
import "./Web1920Signup.css";
import {Link} from "react-router-dom";

function Web1920Signup(props) {
  const {
    path4606,
    path4643,
    signInPage,
    agilesprite,
    signUp,
    fullName,
    path51,
    inputType,
    inputPlaceholder,
    spanText,
    spanText2,
    lock,
    inputType2,
    inputPlaceholder2,
    spanText3,
    spanText4,
    lock2,
    inputType3,
    inputPlaceholder3,
    signUp2,
    path4599,
    logIn,
    path45992,
    signUp3,
    text4,
  } = props;

  return (
    <div className="container-center-horizontal">
      <form className="web-1920-signup animate-enter1 screen" name="form1" action="form1" method="post">
        <div className="overlap-group5">
          <img className="path-4606" src={path4606} />
          <img className="path-4643" src={path4643} />
          <div className="group-4808">
            <img className="sign-in-page" src={signInPage} />
            <div className="form">
              <img className="agile-sprite-1" src={agilesprite} />
              <div className="sign-up-1">{signUp}</div>
              <div className="full-name">
                <div className="full-name-1 tahoma-regular-normal-scarpa-flow-16px">{fullName}</div>
                <div className="overlap-group1-1 border-1-5px-iron">
                  <div className="icon">
                    <div className="ellipse-7"></div>
                    <img className="path-51" src={path51} />
                  </div>
                  <input
                    className="enter-full-name tahoma-regular-normal-dove-gray-16px"
                    name="enter-full-name2"
                    placeholder={inputPlaceholder}
                    type={inputType}
                  />
                </div>
              </div>
              <div className="password">
                <div className="password-1 tahoma-normal-blueberry-16px">
                  <span className="tahoma-regular-normal-scarpa-flow-16px">{spanText}</span>
                  <span className="tahoma-regular-normal-blueberry-16px">{spanText2}</span>
                </div>
                <div className="overlap-group2-1 border-1-5px-iron">
                  <div className="lock" style={{ backgroundImage: `url(${lock})` }}></div>
                  <input
                    className="password-2 tahoma-regular-normal-dove-gray-16px"
                    name="password3"
                    placeholder={inputPlaceholder2}
                    type={inputType2}
                    required
                  />
                </div>
              </div>
              <div className="password">
                <div className="confiirm-password tahoma-normal-blueberry-16px">
                  <span className="tahoma-regular-normal-scarpa-flow-16px">{spanText3}</span>
                  <span className="tahoma-regular-normal-blueberry-16px">{spanText4}</span>
                </div>
                <div className="overlap-group3-1 border-1-5px-iron">
                  <div className="lock" style={{ backgroundImage: `url(${lock2})` }}></div>
                  <input
                    className="confirm-password tahoma-regular-normal-dove-gray-16px"
                    name="confirm-password3"
                    placeholder={inputPlaceholder3}
                    type={inputType3}
                    required
                  />
                </div>
              </div>
              <a href="javascript:SubmitForm('form1')">
                <div className="signup-buton smart-layers-pointers">
                  <div className="overlap-group-4">
                    <div className="hover smart-layers-pointers hidden"></div>
                    <div className="sign-up-2">{signUp2}</div>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="overlap-group4">
            <div className="bgborder">
              <div className="white-bg-1"></div>
              <div className="border-top-bar-1"></div>
            </div>
            <div className="menu-1">
              <Link to="/login">
                <div className="login-1 smart-layers-pointers">
                  <div className="group-143614-2 smart-layers-pointers">
                    <div className="overlap-group-3">
                      <img className="path-4599-1" src={path4599} />
                      <div className="log-in-1 tahoma-regular-normal-unmellow-yellow-22px">{logIn}</div>
                    </div>
                  </div>
                </div>
              </Link>
              <div className="signup-1 smart-layers-pointers">
                <Link to="/signup">
                  <div className="group-143614-3 smart-layers-pointers">
                    <div className="overlap-group-3">
                      <img className="path-4599-1" src={path45992} />
                      <div className="sign-up-3 tahoma-regular-normal-unmellow-yellow-22px">{signUp3}</div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div className="text-4 smart-layers-pointers tahoma-bold-ebony-clay-35px">{text4}</div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Web1920Signup;
