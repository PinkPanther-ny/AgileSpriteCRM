import React from "react";
import { Link } from "react-router-dom";
import cookie from "react-cookies";

function Home(props) {
    const {} = props;

    return (
        <div >
            Home<br/>
            User: {cookie.load('userEmail')}<br/>
            Token: {cookie.load('userToken')}<br/>
        </div>
    );
}

export default Home;
