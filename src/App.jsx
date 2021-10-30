import "./App.css";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import NotFoundPage from "./components/NotFoundPage";
import Homepage from "./components/Homepage";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ForgotPassword from "./components/ForgotPassword";
import Home from "./components/Home";
import Main from "./components/main";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:path(|homepage)">
          <Homepage {...homepageData} />
        </Route>
        <Route path="/login">
          <Login {...loginData} />
        </Route>    
        <Route path="/signup">
          <Signup {...signupData} />
        </Route>
        <Route path="/forgotpassword">
          <ForgotPassword {...forgotPasswordData} />
        </Route>
        <Route path="/home">
            <Home />
        </Route>

          <Main/>
        <Route>
          <NotFoundPage {...notFoundPageData} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const notFoundPageData = {
    path4606: "/img/path-4606-1@1x.png",
    agilesprite: "/img/agilesprite-1@1x.png",
    address: "404 NOT FOUND",
    text1: "OOPS.. This is not the web page you are looking for.",
    backToHomePage: "Back to home page",
    path4599: "/img/path-4599-1@1x.png",
    signUp: "Sign up",
    text2: "AGILE SPRITE PERSONAL CRM",
    path4643: "/img/path-4643-1@1x.png",
};

const startButtonData = {
    overlapGroup: "/img/rectangle-111@1x.png",
    startNow: "Start Now",
};

const logoData = {
    children: "AGILE SPRITE PERSONAL CRM",
};

const homepageData = {
    gradientbg: "/img/gradientbg@1x.png",
    bluebg: "/img/bluebg@1x.png",
    orangebg: "/img/orangebg@1x.png",
    copyright: "© AgileSpriteCRM.com All rights reserved.",
    path2: "/img/path-2@1x.png",
    crmimage: "/img/crmimage@1x.png",
    text3: "Why do we choose Agile Sprite?",
    spanText: ["All IN ONE SCHEDULING",<br />],
    spanText2: ["Schedule events with our specialized", <br />,"calendar",<br />,<br />,"CLIENT MANAGEMENT",<br />,"Identify and anticipate needs, manage", <br />,"all clients efficiently"],
    agilesprite: "/img/agilesprite@1x.png",
    path4599: "/img/path-4599-1@1x.png",
    logIn: "Log in",
    path45992: "/img/path-4599-1@1x.png",
    signUp: "Sign up",
    startButtonProps: startButtonData,
    logoProps: logoData,
};

const loginData = {
    path4606: "/img/path-4606-1@1x.png",
    path4643: "/img/path-4643-1@1x.png",
    signInPage: "/img/sign-in-page-1@1x.png",
    agilesprite: "/img/agilesprite-1@1x.png",
    logIn: "Log in",
    spanText: "Email",
    spanText2: " *",
    path54: "/img/path-54-1@1x.png",
    inputType: "email",
    inputPlaceholder: "Enter email address",
    spanText3: "Password ",
    spanText4: "*",
    lock: "/img/combined-shape-1@1x.png",
    inputType2: "password",
    inputPlaceholder2: "Password",
    login: "Login",
    forgotPassword: "Forgot password?",
    signUpNow: "Sign up now!",
    text6: "AGILE SPRITE PERSONAL CRM",
};

const signupData = {
    path4606: "/img/path-4606@1x.png",
    agilesprite: "/img/agilesprite-1@1x.png",
    signUp: "Sign Up",
    firstName: "First Name",
    path51: "/img/path-51-1@1x.png",
    inputType: "text",
    inputPlaceholder: "Enter first name",
    lastName: "Last Name",
    path512: "/img/path-51-1@1x.png",
    inputType2: "text",
    inputPlaceholder2: "Enter last name",
    spanText: "Password ",
    spanText2: "*",
    lock: "/img/combined-shape-1@1x.png",
    inputType3: "password",
    inputPlaceholder3: "Password",
    spanText3: "Confirm Password ",
    spanText4: "*",
    lock2: "/img/combined-shape-1@1x.png",
    inputType4: "password",
    inputPlaceholder4: "Confirm Password",
    signUp2: "Sign Up",
    text7: "Already have an account? Sign in here",
    text8: "AGILE SPRITE PERSONAL CRM",
    path4643: "/img/path-4643-1@1x.png",
};

const email2Data = {
    className: "email-4",
};

const forgotPasswordData = {
    path4606: "/img/path-4606-1@1x.png",
    agilesprite: "/img/agilesprite-1@1x.png",
    accountRecovery: "Account recovery",
    confirm: "Confirm",
    text9: "Don't worry, we will send you a link to reset your password.",
    text10: "AGILE SPRITE PERSONAL CRM",
    path4643: "/img/path-4643-1@1x.png",
    emailProps: email2Data,
};

