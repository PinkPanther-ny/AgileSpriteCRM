import React from "react";
import { Link } from "react-router-dom";
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
    path54,
    inputType3,
    inputPlaceholder3,
    spanText3,
    spanText4,
    lock,
    inputType4,
    inputPlaceholder4,
    spanText5,
    spanText6,
    lock2,
    inputType5,
    inputPlaceholder5,
    signUp2,
    text4,
    text5,
    path4643,
  } = props;

  return (
    <div className="container-center-horizontal">
      <form className="signup-1 animate-enter1 screen" name="form1" action="form1" method="post">
        <div className="overlap-group5">
          <img className="path-4606" src={path4606} />
          <div className="group-4808">
            <div className="form border-1px-alto">
              <img className="agile-sprite-1" src={agilesprite} />
              <div className="sign-up-1 tahoma-bold-blueberry-35px">{signUp}</div>
              <div className="name">
                <div className="full-name">
                  <div className="first-name tahoma-regular-normal-scarpa-flow-16px">{firstName}</div>
                  <div className="overlap-group1-1 border-1-5px-iron">
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
                  <div className="overlap-group-3 border-1-5px-iron">
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
              <div className="email">
                <div className="email-1 tahoma-normal-blueberry-16px">
                  <span className="tahoma-regular-normal-scarpa-flow-16px">{spanText}</span>
                  <span className="tahoma-regular-normal-blueberry-16px">{spanText2}</span>
                </div>
                <div className="overlap-group3-1 border-1-5px-iron">
                  <div className="overlap-group-4">
                    <div className="rectangle-52 border-1-5px-dove-gray"></div>
                    <img className="path-54" src={path54} />
                  </div>
                  <input
                    className="enter-email-address tahoma-regular-normal-dove-gray-16px"
                    name="enter-email-address2"
                    placeholder={inputPlaceholder3}
                    type={inputType3}
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
                    name="password3"
                    placeholder={inputPlaceholder4}
                    type={inputType4}
                    required
                  />
                </div>
              </div>
              <div className="password">
                <div className="confiirm-password tahoma-normal-blueberry-16px">
                  <span className="tahoma-regular-normal-scarpa-flow-16px">{spanText5}</span>
                  <span className="tahoma-regular-normal-blueberry-16px">{spanText6}</span>
                </div>
                <div className="overlap-group2-1 border-1-5px-iron">
                  <div className="lock" style={{ backgroundImage: `url(${lock2})` }}></div>
                  <input
                    className="confirm-password tahoma-regular-normal-dove-gray-16px"
                    name="confirm-password3"
                    placeholder={inputPlaceholder5}
                    type={inputType5}
                    required
                  />
                </div>
              </div>
              <a href="javascript:SubmitForm('form1')">
                <div className="signup-buton smart-layers-pointers">
                  <div className="overlap-group-5">
                    <div className="hover smart-layers-pointers hidden"></div>
                    <div className="sign-up-2 tahoma-regular-normal-white-18px">{signUp2}</div>
                  </div>
                </div>
              </a>
              <Link to="/login" className="align-self-flex-end">
                <div className="text-4">{text4}</div>
              </Link>
            </div>
          </div>
          <div className="overlap-group4">
            <Bgborder />
            <div className="menu-1">
              <Link to="/login">
                <div className="login-1 smart-layers-pointers">
                  <Group143614 />
                </div>
              </Link>
              <div className="signup-2 smart-layers-pointers">
                <Group1436142 />
              </div>
            </div>
            <div className="text-5 smart-layers-pointers tahoma-bold-ebony-clay-35px">{text5}</div>
          </div>
        </div>
        <img className="path-4643" src={path4643} />
      </form>
    </div>
  );
}

export default Signup;
