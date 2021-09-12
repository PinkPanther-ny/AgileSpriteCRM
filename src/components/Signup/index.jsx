import React from "react";
import { Link } from "react-router-dom";
import Email from "../Email";
import Bgborder from "../Bgborder";
import Group143614 from "../Group143614";
import Group1436142 from "../Group1436142";
import "./Signup.css";

function Signup(props) {
  const {
    path4606,
    agilesprite,
    signUp,
    firstName,
    path51,
    inputType,
    inputPlaceholder,
    lastName,
    path512,
    inputType2,
    inputPlaceholder2,
    spanText,
    spanText2,
    lock,
    inputType3,
    inputPlaceholder3,
    spanText3,
    spanText4,
    lock2,
    inputType4,
    inputPlaceholder4,
    signUp2,
    text7,
    text8,
    path4643,
  } = props;

  return (
    <div className="container-center-horizontal">
      <form className="signup-3 animate-enter3 screen" name="form2" action="form2" method="post">
        <div className="overlap-group5">
          <img className="path-4606-2" src={path4606} />
          <div className="group-4808-1">
            <div className="form-1 border-1px-alto">
              <img className="agile-sprite-3" src={agilesprite} />
              <div className="sign-up-5 tahoma-bold-blueberry-35px">{signUp}</div>
              <div className="name">
                <div className="full-name">
                  <div className="first-name tahoma-regular-normal-scarpa-flow-16px">{firstName}</div>
                  <div className="overlap-group1-3 border-1-5px-iron">
                    <div className="icon">
                      <div className="ellipse-7 border-1-5px-dove-gray"></div>
                      <img className="path-51" src={path51} />
                    </div>
                    <input
                      className="enter-first-name tahoma-regular-normal-dove-gray-16px"
                      name="enter-first-name2"
                      placeholder={inputPlaceholder}
                      type={inputType}
                    />
                  </div>
                </div>
                <div className="last-name">
                  <div className="last-name-1 tahoma-regular-normal-scarpa-flow-16px">{lastName}</div>
                  <div className="overlap-group-13 border-1-5px-iron">
                    <div className="icon">
                      <div className="ellipse-7-1 border-1-5px-dove-gray"></div>
                      <img className="path-51" src={path512} />
                    </div>
                    <input
                      className="enter-last-name tahoma-regular-normal-dove-gray-16px"
                      name="enter-last-name2"
                      placeholder={inputPlaceholder2}
                      type={inputType2}
                    />
                  </div>
                </div>
              </div>
              <Email />
              <div className="password-3">
                <div className="password-4 tahoma-normal-blueberry-16px">
                  <span className="tahoma-regular-normal-scarpa-flow-16px">{spanText}</span>
                  <span className="tahoma-regular-normal-blueberry-16px">{spanText2}</span>
                </div>
                <div className="overlap-group1-4 border-1-5px-iron">
                  <div className="lock-1" style={{ backgroundImage: `url(${lock})` }}></div>
                  <input
                    className="password-5 tahoma-regular-normal-dove-gray-16px"
                    name="password32"
                    placeholder={inputPlaceholder3}
                    type={inputType3}
                    required
                  />
                </div>
              </div>
              <div className="password-3">
                <div className="confiirm-password tahoma-normal-blueberry-16px">
                  <span className="tahoma-regular-normal-scarpa-flow-16px">{spanText3}</span>
                  <span className="tahoma-regular-normal-blueberry-16px">{spanText4}</span>
                </div>
                <div className="overlap-group2-3 border-1-5px-iron">
                  <div className="lock-1" style={{ backgroundImage: `url(${lock2})` }}></div>
                  <input
                    className="confirm-password tahoma-regular-normal-dove-gray-16px"
                    name="confirm-password3"
                    placeholder={inputPlaceholder4}
                    type={inputType4}
                    required
                  />
                </div>
              </div>
              <a href="javascript:SubmitForm('form2')">
                <div className="signup-buton-1 smart-layers-pointers">
                  <div className="overlap-group-14">
                    <div className="hover-1 smart-layers-pointers hidden"></div>
                    <div className="sign-up-6 tahoma-regular-normal-white-18px">{signUp2}</div>
                  </div>
                </div>
              </a>
              <Link to="/login" className="align-self-flex-end">
                <div className="text-7">{text7}</div>
              </Link>
            </div>
          </div>
          <div className="overlap-group4-1">
            <Bgborder />
            <div className="menu-3">
              <Link to="/login">
                <div className="login-5 smart-layers-pointers">
                  <Group143614 />
                </div>
              </Link>
              <div className="signup-4 smart-layers-pointers">
                <Group1436142 />
              </div>
            </div>
            <Link to="/homepage">
              <div className="text-8 smart-layers-pointers tahoma-bold-ebony-clay-35px">{text8}</div>
            </Link>
          </div>
        </div>
        <img className="path-4643-2" src={path4643} />
      </form>
    </div>
  );
}

export default Signup;
