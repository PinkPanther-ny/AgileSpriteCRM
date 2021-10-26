import React from "react";
import { Link } from "react-router-dom";
import StartButton from "../StartButton";
import Logo from "../Logo";
import "./Homepage.css";


function Homepage(props) {
  const {
    gradientbg,
    bluebg,
    orangebg,
    copyright,
    path2,
    crmimage,
    text3,
    spanText,
    spanText2,
    agilesprite,
    path4599,
    logIn,
    path45992,
    signUp,
    startButtonProps,
    logoProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="homepage animate-enter1 screen">
        <div className="whole-home-page">
          <div className="bottom-layer-images">
            <div className="lightblue-bg"/>
            <img className="gradient-bg" src={gradientbg} alt={" "}/>
            <img className="blue-bg" src={bluebg} alt={" "}/>
            <img className="orange-bg" src={orangebg} alt={" "}/>
            <div className="copyright">{copyright}</div>
            <img className="path-2" src={path2} alt={" "}/>
            <img className="crm-image" src={crmimage} alt={" "}/>
          </div>
          <div className="text-area">
            <h1 className="text-3">{text3}</h1>
            <div className="overlap-group1-1">
              <div className="text-4">
                <span className="span0">{spanText}</span>
                <span className="span1">{spanText2}</span>
              </div>
              <StartButton overlapGroup={startButtonProps.overlapGroup} startNow={startButtonProps.startNow} />
            </div>
          </div>
          <div className="home-page-head-bar">
            <div className="white-bg-4"/>
            <div className="head-bar-sep-line"/>
            <img className="agile-sprite-1" src={agilesprite}  alt={" "}/>
            <Logo>{logoProps.children}</Logo>
            <div className="menu-1">

              <Link to="/login">
                <div className="login-1 smart-layers-pointers">
                  <div className="group-143614-5 smart-layers-pointers">
                    <div className="overlap-group-5">
                      <img className="path-4599-5" src={path4599}  alt={" "}/>
                      <div className="log-in-4 tahoma-regular-normal-blueberry-22px">{logIn}</div>
                    </div>
                  </div>
                </div>
              </Link>

              <Link to="/signup">
                <div className="signup-1 smart-layers-pointers">
                  <div className="group-143614-6 smart-layers-pointers">
                    <div className="overlap-group-5">
                      <img className="path-4599-5" src={path45992}  alt={" "}/>
                      <div className="sign-up-1 tahoma-regular-normal-blueberry-22px">{signUp}</div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
