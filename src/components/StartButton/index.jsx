import React from "react";
import "./StartButton.css";
import {Link} from "react-router-dom";

function StartButton(props) {
  const { overlapGroup, startNow } = props;

  return (
      <Link to="/login">
      <div className="start-button smart-layers-pointers">
        <div className="button">
          <div className="overlap-group-2" style={{ backgroundImage: `url(${overlapGroup})` }}>
            <div className="start-now">{startNow}</div>
          </div>
        </div>
      </div>
      </Link>
  );
}

export default StartButton;
