import React from "react";
import StartButton from "../StartButton";
import Logo from "../Logo";
import "./Web1920Homepage.css";
import {Link} from "react-router-dom";

function Web1920Homepage(props) {
  const {
    gradientbg,
    bluebg,
    orangebg,
    copyright,
    path2,
    crmimage,
    text1,
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
      <div className="web-1920-homepage animate-enter screen">
        <div className="overlap-group3">
          <div className="overlap-group-1">
            <div className="lightblue-bg"></div>
            <img className="gradient-bg" src={gradientbg} />
            <img className="blue-bg" src={bluebg} />
            <img className="orange-bg" src={orangebg} />
            <div className="copyright">{copyright}</div>
            <img className="path-2" src={path2} />
            <img className="crm-image" src={crmimage} />
          </div>
          <div className="text-area">
            <h1 className="text-1">{text1}</h1>
            <div className="overlap-group1">
              <div className="text-2">
                <span className="span0">{spanText}</span>
                <span className="span1">{spanText2}</span>
              </div>
              <StartButton overlapGroup={startButtonProps.overlapGroup} startNow={startButtonProps.startNow} />
            </div>
          </div>
          <div className="overlap-group2">
            <div className="white-bg"></div>
            <div className="border-top-bar"></div>
            <img className="agile-sprite" src={agilesprite} />
            <Logo>{logoProps.children}</Logo>
            <div className="menu">
              <Link to="/login">
                <div className="login smart-layers-pointers">
                  <div className="group-143614 smart-layers-pointers">
                    <div className="overlap-group">
                      <img className="path-4599" src={path4599} />
                      <div className="log-in tahoma-regular-normal-blueberry-22px">{logIn}</div>
                    </div>
                  </div>
                </div>
              </Link>
              <div className="signup smart-layers-pointers">
                <Link to="/signup">
                  <div className="group-143614-1 smart-layers-pointers">
                    <div className="overlap-group">
                      <img className="path-4599" src={path45992} />
                      <div className="sign-up tahoma-regular-normal-blueberry-22px">{signUp}</div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Web1920Homepage;
