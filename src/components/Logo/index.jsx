import React from "react";
import "./Logo.css";

function Logo(props) {
  const { children } = props;

  return (
    <a href="https://dashboard.heroku.com/apps/test0agilesprite" target="_blank">
      <div className="logo smart-layers-pointers">
        <div className="text-5 tahoma-bold-ebony-clay-35px">{children}</div>
      </div>
    </a>
  );
}

export default Logo;
