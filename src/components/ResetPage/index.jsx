import React from "react";
import { Link } from "react-router-dom";
import BackgroundBorder from "../BackgroundBorder";
import LoginLink from "../LoginLink";
import "./ResetPage.css";
import {displayLoading, hideLoading, postDataToBackend, validateUrl} from "../../helper";
import {ACCOUNT_UPDATE_SUCCESS} from "../../backendReturnCodeHandling";
import cookie from "react-cookies";

function ResetPage(props) {
  const { path4606, agilesprite, address, path4599, signUp, text2, path4643,
    spanText,
    spanText2,
    inputType,
    inputPlaceholder,
    spanText3,
    spanText4,
    lock,
    inputType2,
    inputPlaceholder2,
    login,} = props;

  const url = window.location.href.split('/')
  const token = url[url.length-1]
  validateUrl(token)
  console.log(token)


  return (
    <div className="container-center-horizontal">
      <div className="not-found-page animate-enter screen">
        <div className="overlap-group2">
          <img className="path-4606" src={path4606} alt={" "}/>
          <div className="x404-nf">
            <Link to="/homepage">
              <img className="agile-sprite" src={agilesprite} alt={" "}/>
            </Link>
            <div className="address tahoma-bold-blueberry-35px">{address}</div>
            {/*<div className="text-1 tahoma-regular-normal-dove-gray-17px">{text1}</div>*/}

            <div className="login_loading profile-loading" id="login_loading"/>

            <form className="reset-page-form"
                onSubmit={e=>{
                  e.preventDefault()
                  const loader = document.querySelector("#login_loading");
                  displayLoading(loader);

                  const pwd = document.getElementsByName('password')[0].value
                  const pwd_confirm = document.getElementsByName('password')[1].value

                  if(pwd===pwd_confirm){
                    postDataToBackend('account/update', {'token': token, 'password': pwd})
                        .then((response) => {
                          hideLoading(loader);

                          const ret_code = response['code'];
                          if (ret_code === ACCOUNT_UPDATE_SUCCESS) {

                            cookie.save('userToken', '', {path: "/"})
                            alert(response['msg']);
                            window.location.href = "/login";

                          } else {
                            alert(response['msg']);
                          }
                        });
                  }else{
                    alert('Please confirm your password!')
                  }
                }} >
              <div className="email">
                <div className="email-1 tahoma-normal-blueberry-16px">
                  <span className="tahoma-regular-normal-scarpa-flow-16px">{spanText}</span>
                  <span className="tahoma-regular-normal-blueberry-16px">{spanText2}</span>
                </div>
                <div className="overlap-group2-2 border-1-5px-iron">

                  <div className="lock" style={{backgroundImage: `url(${lock})`}}/>
                  <input
                      className="enter-email-address tahoma-regular-normal-dove-gray-16px"
                      name="password"
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
            </form>

          </div>
          <div className="overlap-group1">
            <BackgroundBorder />
            <div className="menu">
              <Link to="/login">
                <div className="login smart-layers-pointers">
                  <LoginLink />
                </div>
              </Link>
              <div className="signup smart-layers-pointers">
                <Link to="/signup">
                  <div className="group-143614 smart-layers-pointers">
                    <div className="overlap-group">
                      <img className="path-4599" src={path4599} alt={" "}/>
                      <div className="sign-up tahoma-regular-normal-un-mellow-yellow-22px">{signUp}</div>
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
        <img className="path-4643" src={path4643} alt={" "}/>
      </div>
    </div>
  );
}

export default ResetPage;
