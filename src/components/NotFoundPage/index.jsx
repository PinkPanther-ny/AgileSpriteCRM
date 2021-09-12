import React from "react";
import { Link } from "react-router-dom";
import Bgborder from "../Bgborder";
import Group143614 from "../Group143614";
import "./NotFoundPage.css";

function NotFoundPage(props) {
  const { path4606, agilesprite, address, text1, backToHomePage, path4599, signUp, text2, path4643 } = props;

  return (
    <div className="container-center-horizontal">
      <div className="notfoundpage animate-enter screen">
        <div className="overlap-group2">
          <img className="path-4606" src={path4606} />
          <div className="x404-nf">
            <Link to="/homepage">
              <img className="agile-sprite" src={agilesprite} />
            </Link>
            <div className="address tahoma-bold-blueberry-35px">{address}</div>
            <div className="text-1 tahoma-regular-normal-dove-gray-17px">{text1}</div>
            <Link to="/homepage">
              <div className="back-to-home-page smart-layers-pointers">{backToHomePage}</div>
            </Link>
          </div>
          <div className="overlap-group1">
            <Bgborder />
            <div className="menu">
              <Link to="/login">
                <div className="login smart-layers-pointers">
                  <Group143614 />
                </div>
              </Link>
              <div className="signup smart-layers-pointers">
                <Link to="/signup">
                  <div className="group-143614 smart-layers-pointers">
                    <div className="overlap-group">
                      <img className="path-4599" src={path4599} />
                      <div className="sign-up tahoma-regular-normal-unmellow-yellow-22px">{signUp}</div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <Link to="/homepage">
              <div className="text-2 smart-layers-pointers tahoma-bold-ebony-clay-35px">{text2}</div>
            </Link>
          </div>
        </div>
        <img className="path-4643" src={path4643} />
      </div>
    </div>
  );
}

export default NotFoundPage;
