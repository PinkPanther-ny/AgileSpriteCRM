import React from "react";
import { Link } from "react-router-dom";
import Email from "../Email";
import Bgborder from "../Bgborder";
import Group143614 from "../Group143614";
import Group1436142 from "../Group1436142";
import "./Signup.css";


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

function check(event) {
  // Stop the form from submitting since we’re handling that with AJAX.
  event.preventDefault();
  const form = document.getElementsByName('register')[0];

  // Call our function to get the form data.
  const data = formToJSON(form.elements);

  if(data['confirm-password']!==data['password']){
    alert("Please confirm your password!")

  }else{
    fetch('https://agilespritebackend.herokuapp.com/account/register', {
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
          if(ret_code === 106){
            alert("Sorry! This email has been used, please try another.")
          }else if(ret_code===105){
            alert("User created successfully!")
          }else{
            alert("Error! Please refresh the page and try again!")
          }
        });

  }

}

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
      <form className="signup-3 animate-enter3 screen" name="register" onSubmit={check}>
        <div className="overlap-group5">
          <img className="path-4606-2" src={path4606} />

          <div className="group-4808-1">
            <div className="form-1 border-1px-alto">
              <img className="agile-sprite-3" src={agilesprite} />
              <div className="sign-up-5 tahoma-bold-blueberry-35px">{signUp}</div>

              {/*FIRST LAST NAME*/}
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
                      name="first_name"
                      placeholder={inputPlaceholder}
                      type={inputType}
                      required
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
                      name="last_name"
                      placeholder={inputPlaceholder2}
                      type={inputType2}
                      required
                    />
                  </div>
                </div>
              </div>

              {/*Email*/}
              <Email />

              {/*P1*/}
              <div className="password-3">
                <div className="password-4 tahoma-normal-blueberry-16px">
                  <span className="tahoma-regular-normal-scarpa-flow-16px">{spanText}</span>
                  <span className="tahoma-regular-normal-blueberry-16px">{spanText2}</span>
                </div>
                <div className="overlap-group1-4 border-1-5px-iron">
                  <div className="lock-1" style={{ backgroundImage: `url(${lock})` }}></div>
                  <input
                    className="password-5 tahoma-regular-normal-dove-gray-16px"
                    name="password"
                    placeholder={inputPlaceholder3}
                    type={inputType3}
                    required
                  />
                </div>
              </div>

              {/*P2 CONFIRM*/}
              <div className="password-3">
                <div className="confirm-password tahoma-normal-blueberry-16px">
                  <span className="tahoma-regular-normal-scarpa-flow-16px">{spanText3}</span>
                  <span className="tahoma-regular-normal-blueberry-16px">{spanText4}</span>
                </div>
                <div className="overlap-group2-3 border-1-5px-iron">
                  <div className="lock-1" style={{backgroundImage: `url(${lock2})`}}/>
                  <input
                    className="confirm-password1 tahoma-regular-normal-dove-gray-16px"
                    name="confirm-password"
                    placeholder={inputPlaceholder4}
                    type={inputType4}
                    required
                  />
                </div>
              </div>


              <input className="signup-btn smart-layers-pointers" name={"signup_btn"}
                  value={signUp2}
                  type={"submit"}
              />

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
