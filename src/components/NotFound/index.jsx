import React from "react";
import "./NotFound.css";
function NotFound() {

    return (
        <div className="nf">
            <a href="/">

                <img src={"/img/agilesprite@1x.png"}  alt={"logo"} width="200" height="200"/>
                <p align="center">Back to main page</p>
                <br/><br/><br/>
            </a>
            <h1>PAGE NOT FOUND!</h1>
            <h1>404 ERROR!</h1>
        </div>
    );
}

export default NotFound;
