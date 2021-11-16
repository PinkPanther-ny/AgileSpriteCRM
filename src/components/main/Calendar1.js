import Calendar from "react-awesome-calendar";
import React from "react";
import { Link } from "react-router-dom";
import "./calendar.css";
import styled from "styled-components";
import cookie from "react-cookies";
import { postDataToBackend } from "../../helper";
import {
  EVENT_DELETE_SUCCESS,
  CONTACT_GET_ALL_SUCCESS,
} from "../../backendReturnCodeHandling";
const Button1 = styled.button`
  background: #3180e8;
  color: white;

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 10em;
  border-radius: 13px;
`;
class Calendar1 extends React.Component {
  constructor(props) {
    super(props);
    this.loadAllBirthday();

    this.state = {
      events: [],
      current: "",
    };
    this.onSelectEvent = this.onSelectEvent.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  loadAllBirthday() {
    const token = { token: cookie.load("userToken") };
    postDataToBackend("contact/get_all", token).then((responseJson) => {
      if (responseJson["code"] === CONTACT_GET_ALL_SUCCESS) {
        var arrayLength = responseJson["contacts"].length;

        var currentYear = new Date().getFullYear();
        for (var i = 0; i < arrayLength; i++) {
          var from = new Date(
            `${responseJson["contacts"][i]["birthday"]}T01:00:00+00:00`
          );
          this.state.events.push({
            id: responseJson["contacts"][i]["id"],
            color: "#34d8eb",
            from: `${currentYear}-${("0" + (from.getMonth() + 1)).slice(-2)}-${(
              "0" + from.getUTCDate()
            ).slice(-2)}T01:00:00+00:00`,
            to: `${currentYear}-${("0" + (from.getMonth() + 1)).slice(-2)}-${(
              "0" + from.getUTCDate()
            ).slice(-2)}T02:00:00+00:00`,
            title: `${responseJson["contacts"][i]["first_name"]} ${responseJson["contacts"][i]["last_name"]}
              's birthday!`,
          });
        }
      } else {
        // token error
        alert(responseJson["msg"]);
        window.location.href = "/login";
      }
    });
  }
  onSelectEvent(pEvent) {
    const r = window.confirm("Would you like to remove this event?");
    if (r === true) {
      this.handleDelete(pEvent);
    }
  }
  handleDelete(pEvent) {
    postDataToBackend("calendar/delete_event/", {
      token: cookie.load("userToken"),
      id: pEvent,
    })
      .then((responseJson) => {
        if (responseJson["code"] !== EVENT_DELETE_SUCCESS) {
          alert(responseJson["code"]);
        }
      })
      .then(() => {
        const idx = this.state.events.indexOf(pEvent);
        this.state.events.splice(idx, 1);
      });
  }

  render() {
    return (
      <div className="calendar">
        <div className="button">
          <Link to="/form">
            <Button1>Add New Event!!</Button1>{" "}
          </Link>
        </div>
        <Calendar
          className="wrapper"
          onClickEvent={this.onSelectEvent}
          events={this.state.events}
        />
      </div>

      // <React.Fragment>
      //   <Calendar events={events} />
      // </React.Fragment>
    );
  }
}

export default Calendar1;
