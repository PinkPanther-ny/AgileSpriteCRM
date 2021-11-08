import React from "react";
import "./Email.css";

function Email(props) {
    const { className } = props;

    return (
        <div className={`email-2 ${className || ""}`}>
            <div className="email-3 tahoma-normal-blueberry-16px">
                <span className="span-2 tahoma-regular-normal-scarpa-flow-16px">Email</span>
                <span className="span-2 tahoma-regular-normal-blueberry-16px"> *</span>
            </div>
            <div className="overlap-group3-2 border-1-5px-iron">
                <div className="overlap-group-15">
                    <div className="rectangle-52-1 border-1-5px-dove-gray"/>
                    <img className="path-54-1" src={"/img/path-54-1@1x.png"} alt={" "}/>
                </div>
                <input
                    className="enter-email-address-1 tahoma-regular-normal-dove-gray-16px"
                    name="email"
                    placeholder="Enter email address"
                    type="email"
                    required
                />
            </div>
        </div>
    );
}

export default Email;
