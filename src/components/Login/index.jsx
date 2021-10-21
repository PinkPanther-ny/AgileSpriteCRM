import React from "react";
import { Link } from "react-router-dom";
import Bgborder from "../Bgborder";
import Group143614 from "../Group143614";
import Group1436142 from "../Group1436142";
import "./Login.css";
import "./Loading.css";




// showing loading
function displayLoading() {
  // selecting loading div
  const loader = document.querySelector("#loading");
  loader.classList.add("display");
  // to stop loading after some time
  setTimeout(() => {
    loader.classList.remove("display");
  }, 4000);
}

// hiding loading
function hideLoading() {
  const loader = document.querySelector("#loading");
  loader.classList.remove("display");
}



/**
 * Adopted from https://www.learnwithjason.dev/blog/get-form-values-as-json
 * Retrieves input data from a form and returns it as a JSON object.
 * @param  {HTMLFormControlsCollection} elements  the form elements
 * @return {Object}                               form data as an object literal
 */
const formToJSON = (elements) =>
    [].reduce.call(
        elements,
        (data, element) => {
          data[element.name] = element.value;
          return data;
        },
        {},
    );

function validateLogin(event) {
  // Stop the form from submitting since we’re handling that with AJAX.
  event.preventDefault();
  const form = document.getElementsByName('login')[0];

  // Call our function to get the form data.
  const data = formToJSON(form.elements);

  // displayLoading();
  fetch('https://agilespritebackend.herokuapp.com/account/login', {
    body: JSON.stringify(data), // must match 'Content-Type' header
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, same-origin, *omit
    headers: {
      'user-agent': 'Mozilla/4.0 MDN Example',
      'content-type': 'application/json'
    },
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, cors, *same-origin
    redirect: 'follow', // manual, *follow, error
    referrer: 'no-referrer', // *client, no-referrer
  }).then((response) => response.json())
      .then((response) => {
        console.log(response['code']);
        console.log(response['msg']);
        const ret_code = response['code'];
        if(ret_code === 101){
          alert("Wrong username/password!")
        }else if(ret_code===100){
          alert("User: "+ response['token'] + "\n" +
              "Login successfully! Let's go!")
          window.location.href = "/homepage";
        }else{
          alert("Error! Please refresh the page and try again!")
        }
      });

}


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
      <form className="login-2 animate-enter2 screen" name="login" onSubmit={validateLogin}>
        <div className="overlap-group4">
          <img className="path-4606-1" src={path4606} />
          <img className="path-4643-1" src={path4643} />
          <div className="group-4808">
            {/*<div className="loading" id="loading"></div>*/}
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
