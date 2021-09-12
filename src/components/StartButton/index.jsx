import React from "react";
import { Link } from "react-router-dom";
import "./StartButton.css";

function StartButton(props) {
  const { overlapGroup, startNow } = props;

  return (
    <div className="start-button smart-layers-pointers">
      <Link to="/signup">
        <div className="button">
          <div className="overlap-group-7" style={{ backgroundImage: `url(${overlapGroup})` }}>
            <div className="start-now">{startNow}</div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default StartButton;
