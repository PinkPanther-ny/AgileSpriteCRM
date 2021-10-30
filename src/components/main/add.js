import React  from 'react';
import { useState } from "react"

const Add = ({ contact, setContact, setCurrent }) => {
    const [fields, setfields] = useState({
        name: "",
        profile: "",
        company: "",
        email: "",
        phone: "",
        mobile: "",
        address: "",
        birthday: "",
        relationship: ""
    })

    const handleChange = (e) => {
        setfields({ ...fields, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        contact.push(fields);
        setContact([...contact]);
        setCurrent("");
    }

    return (
        <div className="add">
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name : </label>
                    <span>
                        <input type="text" id="name" value={fields.name} name="name" onChange={handleChange} />
                    </span>
                </div>
                <div>
                    <label htmlFor="profile">Profile : </label>
                    <span>
                        <input type="text" id="profile" value={fields.profile} name="profile" onChange={handleChange} />
                    </span>
                </div>
                <div>
                    <label htmlFor="company">Company : </label>
                    <span>
                        <input type="text" id="company" value={fields.company} name="company" onChange={handleChange} />
                    </span>
                </div>
                <div>
                    <label htmlFor="email">Email : </label>
                    <span>
                        <input type="text" id="email" value={fields.email} name="email" onChange={handleChange} />
                    </span>
                </div>
                <div>
                    <label htmlFor="phone">Phone : </label>
                    <span>
                        <input type="text" id="phone" value={fields.phone} name="phone" onChange={handleChange} />
                    </span>
                </div>
                <div>
                    <label htmlFor="mobile">Mobile : </label>
                    <span>
                        <input type="text" id="mobile" value={fields.mobile} name="mobile" onChange={handleChange} />
                    </span>
                </div>
                <div>
                    <label htmlFor="address">Address : </label>
                    <span>
                        <input type="text" id="address" value={fields.address} name="address" onChange={handleChange} />
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