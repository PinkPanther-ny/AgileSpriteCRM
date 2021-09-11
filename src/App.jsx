import "./App.css";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Web1920Homepage from "./components/Web1920Homepage";
import Web1920Signup from "./components/Web1920Signup";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:path(|web-1920-homepage)">
          <Web1920Homepage {...web1920HomepageData} />
        </Route>
        <Route path="/signup">
          <Web1920Signup {...web1920SignupData} />
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

const web1920HomepageData = {
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

const web1920SignupData = {
    path4606: "/img/path-4606@1x.png",
    path4643: "/img/path-4643@1x.png",
    signInPage: "/img/sign-in-page@1x.png",
    agilesprite: "/img/agilesprite-1@1x.png",
    signUp: "Sign Up",
    fullName: "Full Name",
    path51: "/img/path-51@1x.png",
    inputType: "text",
    inputPlaceholder: "Enter full name",
    spanText: "Password ",
    spanText2: "*",
    lock: "/img/combined-shape-1@1x.png",
    inputType2: "password",
    inputPlaceholder2: "Password",
    spanText3: "Confirm Password ",
    spanText4: "*",
    lock2: "/img/combined-shape-1@1x.png",
    inputType3: "password",
    inputPlaceholder3: "Confirm Password",
    signUp2: "Sign Up",
    path4599: "/img/path-4599-1@1x.png",
    logIn: "Log in",
    path45992: "/img/path-4599-1@1x.png",
    signUp3: "Sign up",
    text4: "AGILE SPRITE PERSONAL CRM",
};

