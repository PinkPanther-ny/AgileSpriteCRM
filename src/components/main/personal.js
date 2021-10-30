import { useState, useEffect } from "react";
import { Switch, Route, Link, useLocation, useHistory } from "react-router-dom";
import React  from 'react';

const articleText = `Lorem ipsum dolor sit amet,consectetur adipiscing elit. Nuncmaximus,nulla ut commodo sagittis,sapien dui mattis dui, non pulvinarlorem felis nec eratLorem ipsumdolor sit amet, consectetur adipiscing elit. Nunc maximus, nullaut commodo sagittis, sapien duimattis dui, non pulvinar lorem felisnec eratLorem ipsum dolor sit amet,consectetur adipiscing elit. Nuncmaximus, nulla ut commodo sagittis, sapien dui mattis dui,non pulvinar lorem felis neceratLorem ipsum dolor sit amet,consectetur adipiscing elit. Nuncmaximus, nulla ut commodo sagittis,sapien dui mattis dui, non pulvinarlorem felis nec eratLorem ipsum
`;

const Personal = ({ person, contact, setContact }) => {
  const path = useLocation().pathname;

  const history = useHistory();

  const [disabled, setDisabled] = useState(true);

  const [fields, setFields] = useState({ ...person });

  useEffect(() => {
    setFields({ ...person });
    setDisabled(true);
    history.push("/contact");
  }, [person]);

  const handleChange = (e) => {
    setFields({ ...fields, [e.target.name]: e.target.value });
  };

  const handleEidt = () => {
    setDisabled(false);
  };

  const handleSubmit = () => {
    contact.forEach((person) => {
      if (person.name === fields.name) {
        person.profile = fields.profile;
        person.company = fields.company;
        person.email = fields.email;
        person.phone = fields.phone;
        person.mobile = fields.mobile;
        person.address = fields.address;
        person.birthday = "xxxxxxxx";
        person.relationship = "xxxxxxxx";
        setContact([...contact]);
        setDisabled(true);
      }
    });
  };

  return (
    <div className="personal">
      <h6>
        <Link to="/contact" className={path.includes("story") ? "" : "check"}>
          Detail
        </Link>
        <Link
          to="/contact/story"
          className={path.includes("story") ? "check" : ""}
        >
          Story
        </Link>
      </h6>
      <Switch>
        <Route path="/contact" exact>
          <img src={person.profile} alt="profile" align="left" />
          <form
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            <div>
              <label htmlFor="name">Name: </label>
              <input
                type="text"
                id="name"
                value={fields.name}
                disabled={true}
                onChange={handleChange}
                name="name"
              />
            </div>
            <div>
              <label htmlFor="company">Company: </label>
              <input
                type="text"
                id="company"
                value={fields.company}
                disabled={disabled}
                onChange={handleChange}
                name="company"
              />
            </div>
            <div>
              <label htmlFor="email">Email: </label>
              <input
                type="text"
                id="email"
                value={fields.email}
                disabled={disabled}
                onChange={handleChange}
                name="email"
              />
            </div>
            <div>
              <label htmlFor="phone">Phone: </label>
              <input
                type="text"
                id="phone"
                value={fields.phone}
                disabled={disabled}
                onChange={handleChange}
                name="phone"
              />
            </div>
            <div>
              <label htmlFor="mobile">Mobile: </label>
              <input
                type="text"
                id="mobile"
                value={fields.mobile}
                disabled={disabled}
                onChange={handleChange}
                name="mobile"
              />
            </div>
            <div>
              <label htmlFor="address">Address: </label>
              <input
                type="text"
                id="address"
                value={fields.address}
                disabled={disabled}
                onChange={handleChange}
                name="address"
              />
            </div>
          </form>
          <h5>
            <span>
              Birthday : &nbsp;
              <input type="date" name="" id="" />
            </span>
            <span>
              Relationship : &nbsp;
              <select defaultValue="relationship" name="relationship">
                <option value="relationship">relationship</option>
                <option value="parent">parent</option>
              </select>
            </span>
          </h5>
          <div className="notes">
            <h1>Notes</h1>
            <textarea
              name=""
              id=""
              cols="125"
              rows="4"
              placeholder="Add a note ..."
            ></textarea>
            <h1>Invited Events</h1>
            <input type="text" />
          </div>
          <div className="buttons">
            <button onClick={handleEidt}>edit</button>
            <button onClick={handleSubmit}>save</button>
          </div>
        </Route>
        <Route path="/contact/story">
          <div className="story">
            <div className="title">
              <div>3</div>
              <div>Stories</div>
            </div>
            <div className="stories">
              <div>
                <h1>Melbourne,4/9/2021</h1>
                <img
                  src="/images/contact story page.jpeg"
                  alt="contact story page"
                />
                <div className="article">{articleText}</div>
              </div>
              <div>
                <h1>Melbourne,4/9/2021</h1>
                <div className="article last-article">{articleText}</div>
              </div>
            </div>
          </div>
        </Route>
      </Switch>
    </div>
  );
};

export default Personal;
