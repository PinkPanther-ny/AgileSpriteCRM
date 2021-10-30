import Calendar from "react-awesome-calendar";
import React from "react";
import { Link } from "react-router-dom";
import "./calendar.css";
import styled from "styled-components";
const Button1 = styled.button`
  background: #3180e8;
  color: white;

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 10em;
  border-radius: 3px;
`;
const events = [
  {
    id: 1,
    color: "#fd3153",
    from:
      localStorage.getItem("start date") +
      "T" +
      localStorage.getItem("start time") +
      ":00+00:00",
    to:
      localStorage.getItem("start date") +
      "T" +
      localStorage.getItem("start time") +
      ":00+00:00",
    title: localStorage.getItem("content"),
  },
  {
    id: 2,
    color: "#1ccb9e",
    from: "2019-05-01T13:00:00+00:00",
    to: "2019-05-05T14:00:00+00:00",
    title: "This is another event",
  },
  {
    id: 3,
    color: "#3694DF",
    from: "2019-05-05T13:00:00+00:00",
    to: "2019-05-05T20:00:00+00:00",
    title: "This is also another event",
  },
];
class Calendar1 extends React.Component {
  render() {
    return (
      <div className="calendar">
        <div className="button">
          <Link to="/form">
            <Button1>Add New Event!!</Button1>{" "}
          </Link>
        </div>
        <Calendar events={events} />
      </div>
    );
  }
}

export default Calendar1;
