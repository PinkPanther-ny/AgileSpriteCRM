import React from 'react';
import { useState } from "react"
import {postDataToBackend, validateCookie} from "../../helper";
import cookie from "react-cookies";
import {CONTACT_ADD_SUCCESS} from "../../backendReturnCodeHandling";
import "./prettyForm.css";

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
                    window.location.href = '/contact'

                } else {
                    alert(responseJson['msg'])
                }
            });


    }

    return (
        <div className="pretty-form-container">
            <div className="card">
                <form onSubmit={handleSubmit} className="card_form">

                    <div className="input">
                        <input className="input_field" type="text" id="first_name" name="first_name" onChange={handleChange} required="required"/>
                        <label className="input_label">First Name : </label>
                    </div>

                    <div className="input">
                        <input className="input_field" type="text" id="last_name" name="last_name" onChange={handleChange} required="required"/>
                        <label className="input_label">Last Name : </label>
                    </div>

                    <div className="input">
                        <input className="input_field" type="text" id="company" name="company" onChange={handleChange}/>
                        <label className="input_label">Company : </label>
                    </div>

                    <div className="input">
                        <input className="input_field" type="text" id="email" name="email" onChange={handleChange}/>
                        <label className="input_label">Email : </label>
                    </div>

                    <div className="input">
                        <input className="input_field" type="text" id="phone" name="phone" onChange={handleChange}/>
                        <label className="input_label">Phone : </label>
                    </div>

                    <div className="input">
                        <input className="input_field" type="text" id="mobile" name="mobile" onChange={handleChange}/>
                        <label className="input_label">Mobile : </label>
                    </div>

                    <div className="input">
                        <input className="input_field" type="text" id="address" name="address" onChange={handleChange}/>
                        <label className="input_label">Address : </label>
                    </div>

                    <div className="input">
                        <input className="input_field" type="text" id="relationship" name="relationship" onChange={handleChange}/>
                        <label className="input_label">Relationship : </label>
                    </div>

                    <div className="input">
                        <input className="input_field" type="text" id="image_address" name="image_address" onChange={handleChange}/>
                        <label className="input_label">Avatar link: </label>
                    </div>

                    <div className="input">

                        <label className="input_label datepicker birthday">Birthday: <span role="img" aria-label={"calendar"}>📆</span><input className="input_field" type="date" id="birthday" name="birthday" onChange={handleChange} onKeyDown="return false" /></label>

                    </div>

                    <div className="input">
                        <label className="input_label notes">Notes : </label>
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

                    <button type={"submit"} className="card_button">Add new contact</button>
                </form>
            </div>
        </div>
    )
}

export default Add;