import React from "react";
import { Link } from "react-router-dom";
import Email from "../Email";
import BackgroundBorder from "../BackgroundBorder";
import LoginLink from "../LoginLink";
import SignupLink from "../SignupLink";
import "./ForgotPassword.css";
import {displayLoading, formToJSON, hideLoading, postDataToBackend} from "../../helper";
import {ACCOUNT_USERNAME_EXIST} from "../../backendReturnCodeHandling";

function onSubmitForm(event){
  event.preventDefault();
  const loader = document.querySelector("#loading");
  const form = document.getElementsByName('forgotpassword')[0];
  displayLoading(loader)
  // Call our function to get the form data.
  const data = formToJSON(form.elements);
  postDataToBackend('account/forgotpassword', {'email': data['email']}).then((response)=>{

    hideLoading(loader);
    if(response['code']===ACCOUNT_USERNAME_EXIST){
      alert(response['msg']);
      window.location.href = '/login'
    }else{
      alert(response['msg']);
    }
  })
}

function ForgotPassword(props) {
  const { path4606, agilesprite, accountRecovery, confirm, text9, text10, path4643, emailProps } = props;

  return (
      <div className="container-center-horizontal">
        <form className="forgotpassword animate-enter4 screen" name="forgotpassword" onSubmit={onSubmitForm}>
          <div className="overlap-group4-2">
            <img className="path-4606-3" src={path4606}  alt={" "}/>
            <div className="overlap-group2-4">
              <div className="form-2 border-1px-alto">
                <img className="agile-sprite-4" src={agilesprite} alt={" "}/>
                <div className="account-recovery tahoma-bold-blueberry-35px">{accountRecovery}</div>
                <Email className={emailProps.className} />
                <button className="align-self-flex-start">
                  <div className="signup-btn-2 smart-layers-pointers">
                    <div className="overlap-group-17">
                      <div className="hover-2 smart-layers-pointers hidden"/>
                      <div className="confirm tahoma-regular-normal-white-18px">{confirm}</div>
                    </div>
                  </div>
                </button>
              </div>
              <div className="text-9 tahoma-regular-normal-dove-gray-17px">{text9}</div>
            </div>
            <div className="overlap-group3-3">
              <BackgroundBorder />
              <div className="menu-4">
                <Link to="/login">
                  <div className="login-6 smart-layers-pointers">
                    <LoginLink />
                  </div>
                </Link>
                <Link to="/signup">
                  <div className="signup-5 smart-layers-pointers">
                    <SignupLink />
                  </div>
                </Link>
              </div>
              <Link to="/homepage">
                <div className="text-10 smart-layers-pointers tahoma-bold-ebony-clay-35px">{text10}</div>
              </Link>
            </div>
          </div>
          <img className="path-4643-3" src={path4643} alt={" "}/>
          <div className="loading" id="loading"/>
        </form>
      </div>
  );
}

export default ForgotPassword;
