import React from "react";
import Validator from "validator";
import InlineError from "./InlineError";
import PropTypes from "prop-types";
import { Form} from "semantic-ui-react";
import { Link } from "react-router-dom";
import signInPage from "../../images/sign in page.png";
import logo from "../../images/AgileSprite logo.png";
import { HomePageContainer } from "./HomePageContainer";
import "./signup.css";

class EventForm extends React.Component {
  state = {
    data: {
      date: "",
      time: "",
      content: "",
    },
    loading: false,
    errors: {},
  };

  onChange = (e) =>
    this.setState({
      ...this.state,
      data: { ...this.state.data, [e.target.name]: e.target.value },
    });

  onSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate(this.state.data);
    this.setState({ errors });
    if (Object.keys(errors).length === 0) {
      this.setState({ loading: true });
      localStorage.setItem("start date", this.state.data.date);
      localStorage.setItem("start time", this.state.data.time);
      localStorage.setItem("content", this.state.data.content);
    }
  };

  validate = (data) => {
    const errors = {};
    if (!Validator.isDate(data.date)) errors.date = "Invalid date";
    return errors;
  };

  render() {
    return (
      <HomePageContainer>
        <Form onSubmit={this.onSubmit} loading={this.loading}>
          <div>
            <img src={logo} alt="Logo" height="200px" width="200px" />
            <img className="sign-in-page" src={signInPage}  alt={''}/>
          </div>
          <div>
            <Form.Field error={!!this.state.errors.date}>
              <label htmlFor="date">Enter your date </label>
              <input
                type="date"
                id="date"
                name="date"
                placeholder="Enter your start event date"
                value={this.state.data.date}
                onChange={this.onChange}
              />
              {this.state.errors.date && (
                <InlineError text={this.state.errors.date} />
              )}
            </Form.Field>
            <Form.Field>
              <label htmlFor="time*">Enter your time </label>
              <input
                type="time"
                id="time"
                name="time"
                placeholder="Enter your start time"
                value={this.state.data.time}
                onChange={this.onChange}
              />
            </Form.Field>

            <Form.Field>
              <label htmlFor="content*">Enter your event content </label>
              <input
                type="word"
                id="content"
                name="content"
                placeholder="describe what your event is about?"
                value={this.state.data.content}
                onChange={this.onChange}
              />
            </Form.Field>
          </div>
          <Link to="/calendar">
            <button type="submit">Save</button>
          </Link>
        </Form>
      </HomePageContainer>
    );
  }
}

EventForm.propTypes = {
  submit: PropTypes.func.isRequired,
};

export default EventForm;
