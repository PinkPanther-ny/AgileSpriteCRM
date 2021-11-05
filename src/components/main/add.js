import React from 'react';
import { useState } from "react"
import {postDataToBackend, validateCookie} from "../../helper";
import cookie from "react-cookies";
import {CONTACT_ADD_SUCCESS} from "../../backendReturnCodeHandling";

const Add = ({ contact, setContact, setCurrent }) => {
    const [fields, setFields] = useState({
        'token'         : cookie.load('userToken'),

        'first_name'    : '',
        'last_name'     : '',

        'company'       : '',
        'email'         : '',
        'phone'         : '',
        'mobile'        : '',
        'address'       : '',
        'birthday'      : '',
        'relationship'  : '',
        'notes'         : '',
        'image_address' : '',

    })


    const handleChange = (e) => {
        setFields({ ...fields, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        validateCookie()

        console.log(fields)
        postDataToBackend("contact/add", fields)
            .then((responseJson) => {
                if (responseJson['code'] === CONTACT_ADD_SUCCESS) {

                    contact.push(fields);
                    setContact([...contact]);
                    console.log(fields)
                    setCurrent("");

                } else {
                    alert(responseJson['msg'])
                }
            });


    }

    return (
        <div className="add">
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="first_name">First Name : </label>
                    <span>
                        <input type="text" id="first_name" name="first_name" onChange={handleChange} required="required" placeholder={'required'}/>
                    </span>
                </div>

                <div>
                    <label htmlFor="last_name">Last Name : </label>
                    <span>
                        <input type="text" id="last_name" name="last_name" onChange={handleChange} required="required" placeholder={'required'}/>
                    </span>
                </div>

                <div>
                    <label htmlFor="company">Company : </label>
                    <span>
                        <input type="text" id="company" name="company" onChange={handleChange} />
                    </span>
                </div>

                <div>
                    <label htmlFor="email">Email : </label>
                    <span>
                        <input type="text" id="email" name="email" onChange={handleChange} />
                    </span>
                </div>

                <div>
                    <label htmlFor="phone">Phone : </label>
                    <span>
                        <input type="text" id="phone" name="phone" onChange={handleChange} />
                    </span>
                </div>

                <div>
                    <label htmlFor="mobile">Mobile : </label>
                    <span>
                        <input type="text" id="mobile" name="mobile" onChange={handleChange} />
                    </span>
                </div>

                <div>
                    <label htmlFor="address">Address : </label>
                    <span>
                        <input type="text" id="address" name="address" onChange={handleChange} />
                    </span>
                </div>

                <div>
                    <label htmlFor="birthday">Birthday : </label>
                    <span>
                        <input type="date" id="birthday" name="birthday" onChange={handleChange} />
                    </span>
                </div>

                <div>
                    <label htmlFor="relationship">Relationship : </label>
                    <span>
                        <input type="text" id="relationship" name="relationship" onChange={handleChange} />
                    </span>
                </div>

                <div>
                    <label htmlFor="avatar">Avatar link: </label>
                    <span>
                        <input type="text" id="image_address" name="image_address" onChange={handleChange} />
                    </span>
                </div>

                <div>
                    <label htmlFor="notes">Notes : </label>
                    <span>
                        <textarea
                            name="notes"
                            id="notes"
                            cols="125"
                            rows="4"
                            onChange={handleChange}
                        >
              </textarea>
                    </span>
                </div>

                <div className="submit">
                    <input type="submit" value="Submit" />
                </div>
            </form>
        </div>
    )
}

export default Add;