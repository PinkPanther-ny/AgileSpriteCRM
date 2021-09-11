import "./App.css";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import Signup from "./components/Signup";
import Login from "./components/Login";

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/:path(|homepage)">
                    <Homepage {...homepageData} />
                </Route>
                <Route path="/signup">
                    <Signup {...signupData} />
                </Route>
                <Route path="/login">
                    <Login {...loginData} />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
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
    text1: "Why do we choose Agile Sprite?",
    spanText: <>All IN ONE SCHEDULING<br /></>,
    spanText2: <>Schedule events with our specialized <br />calendar<br /><br />CLIENT MANAGEMENT<br />Identify and anticipate needs, manage <br />all clients efficiently</>,
    agilesprite: "/img/agilesprite@1x.png",
    path4599: "/img/path-4599-1@1x.png",
    logIn: "Log in",
    path45992: "/img/path-4599-1@1x.png",
    signUp: "Sign up",
    startButtonProps: startButtonData,
    logoProps: logoData,
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
    spanText: "Email",
    spanText2: " *",
    path54: "/img/path-54-1@1x.png",
    inputType3: "email",
    inputPlaceholder3: "Enter email address",
    spanText3: "Password ",
    spanText4: "*",
    lock: "/img/combined-shape-1@1x.png",
    inputType4: "password",
    inputPlaceholder4: "Password",
    spanText5: "Confiirm Password ",
    spanText6: "*",
    lock2: "/img/combined-shape-1@1x.png",
    inputType5: "password",
    inputPlaceholder5: "Confirm Password",
    signUp2: "Sign Up",
    text4: "Already have an account? Sign in here",
    path4599: "/img/path-4599-1@1x.png",
    signUp3: "Sign up",
    text5: "AGILE SPRITE PERSONAL CRM",
    path4643: "/img/path-4643-1@1x.png",
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
    path4599: "/img/path-4599-1@1x.png",
    signUp: "Sign up",
    text6: "AGILE SPRITE PERSONAL CRM",
};

