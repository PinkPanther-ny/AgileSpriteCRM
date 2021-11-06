import Calendar from "react-awesome-calendar";
import React from "react";
import { Link } from "react-router-dom";
import "./calendar.css";
import styled from "styled-components";
import cookie from "react-cookies";
import { postDataToBackend } from "../../helper";
import { CONTACT_GET_ALL_SUCCESS } from "../../backendReturnCodeHandling";
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

    this.state = {
      events: [],
      current: "",
    };
    this.loadAllBirthday();
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
              "0" + from.getUTCDay()
            ).slice(-2)}T01:00:00+00:00`,
            to: `${currentYear}-${("0" + (from.getMonth() + 1)).slice(-2)}-${(
              "0" + from.getUTCDay()
            ).slice(-2)}T02:00:00+00:00`,
            title: `${responseJson["contacts"][i]["first_name"]} ${responseJson["contacts"][i]["last_name"]}
              's birthday!`,
          });
        }
        console.log(this.state.events);
      } else {
        // token error
        alert(responseJson["msg"]);
        window.location.href = "/login";
      }
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
        <Calendar className="wrapper" events={this.state.events} />
      </div>

      // <React.Fragment>
      //   <Calendar events={events} />
      // </React.Fragment>
    );
  }
}

export default Calendar1;
