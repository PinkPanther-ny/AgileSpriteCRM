import { useState, useEffect } from "react";
import { Switch, Route, Link, useLocation, useHistory } from "react-router-dom";
import React  from 'react';
import {postDataToBackend, validateCookie} from "../../helper";
import {CONTACT_UPDATE_SUCCESS} from "../../backendReturnCodeHandling";
import cookie from "react-cookies";
import "./contactDetail.css";

const articleText = `Lorem ipsum dolor sit amet,consectetur adipiscing elit. Nuncmaximus,nulla ut commodo sagittis,sapien dui mattis dui, non pulvinarlorem felis nec eratLorem ipsumdolor sit amet, consectetur adipiscing elit. Nunc maximus, nullaut commodo sagittis, sapien duimattis dui, non pulvinar lorem felisnec eratLorem ipsum dolor sit amet,consectetur adipiscing elit. Nuncmaximus, nulla ut commodo sagittis, sapien dui mattis dui,non pulvinar lorem felis neceratLorem ipsum dolor sit amet,consectetur adipiscing elit. Nuncmaximus, nulla ut commodo sagittis,sapien dui mattis dui, non pulvinarlorem felis nec eratLorem ipsum`;

const Personal = ({ person}) => {
  const path = useLocation().pathname;
  const history = useHistory();

  const [disabled, setDisabled] = useState(true);
  const [fields, setFields] = useState({ person });

  useEffect(() => {
    setFields({ ...person });
    setDisabled(true);
    history.push("/contact");
  }, [person]);

  const handleChange = (e) => {
    setFields({ ...fields, [e.target.name]: e.target.value });
  };

  const handleEdit = () => {

    setDisabled(!disabled);
  };

  const handleSubmit = () => {
    if(disabled){
      return
    }
    setDisabled(true);
    validateCookie()
    const updatedData = {
      // Declare name field even it's not needed.
      'token'       : cookie.load('userToken'),
      'contact_id'  : fields.id,

      'first_name'  : fields.first_name,
      'last_name'   : fields.last_name,

      'company'     : fields.company,
      'email'       : fields.email,
      'phone'       : fields.phone,
      'mobile'      : fields.mobile,
      'address'     : fields.address,
      'birthday'    : fields.birthday,
      'relationship': fields.relationship,
      'notes'       : fields.notes,
      'image_address': fields.image_address

    };
    postDataToBackend("contact/update", updatedData)
        .then((responseJson) => {
          if(responseJson['code']===CONTACT_UPDATE_SUCCESS){
            // alert('Account info updated!')
            // Update success, change local value
            person.company       = fields.company;
            person.email         = fields.email;

            person.phone         = fields.phone;
            person.mobile        = fields.mobile;

            person.address       = fields.address;
            person.birthday      = fields.birthday;
            person.relationship  = fields.relationship;
            person.notes         = fields.notes;
            person.image_address = fields.image_address;
          }else{
            alert(responseJson['msg'])
          }
        });
    //     setContact([...contact]);
    //     setDisabled(true);
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
            <img src={fields.image_address} alt="profile" align="left" />
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
                    value={fields.first_name + ' ' + fields.last_name}
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
              <input type="date"
                     id="birthday"
                     value={fields.birthday}
                     disabled={disabled}
                     onChange={handleChange}
                     name="birthday"
              />
            </span>
              <span>
              Relationship : &nbsp;
                <input type="text"
                       name="relationship"
                       id="relationship"
                       value={fields.relationship}
                       disabled={disabled}
                       onChange={handleChange}
                />
            </span>
            </h5>

            <div className="notes">
              <h1>Notes</h1>
              <textarea
                  name="notes"
                  id="notes"
                  cols="125"
                  rows="6"
                  value={fields.notes}
                  disabled={disabled}
                  onChange={handleChange}
              >
              </textarea>
            </div>
            <div className="buttons">
              <button onClick={handleEdit}>edit</button>
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
                      src="../images/contact story page.jpeg"
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
