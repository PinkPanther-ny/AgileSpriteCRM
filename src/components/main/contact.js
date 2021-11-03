import { useState } from "react";
import Personal from "./personal";
import Add from "./add";
import React  from 'react';

const Contact = ({ contact, setContact }) => {
  const [current, setCurrent] = useState("");

  const handleAdd = () => {
    setCurrent("add");
  };

  const handleDelete = () => {
    contact.forEach((person, index) => {
      if (person.name === current.name) {
        contact.splice(index, 1);
        setContact([...contact]);
      }
    });
    setCurrent("");
  };

  const renderPersonal = () => {
    switch (current) {
      case "":
        return (
            <img
                src="/images/Contact front page.png"
                alt="Contactfrontpage"
                className="contactimg"
            />
        );
      case "add":
        return (
            <Add
                contact={contact}
                setContact={setContact}
                setCurrent={setCurrent}
            />
        );
      default:
        return (
            <Personal
                person={current}
                contact={contact}
                setContact={setContact}
            />
        );
    }
  };

  return (
      <React.Fragment>
        <section>
          <div>
            <span>Contact</span>
            <span>
            <span className={"add"} onClick={handleAdd}>
              +
            </span>
            <span className={"delete"} onClick={handleDelete}>
              -
            </span>
          </span>
          </div>
          <div className={"search"}>
            <input type="text" />
          </div>
          <div className={"contact"}>
            {contact.map((person, index) => (
                <div
                    key={index}
                    className={
                      current.name === person.name ? "checked person" : "person"
                    }
                    onClick={() => {
                      setCurrent(person);
                    }}
                >
                  <img src={person.profile} alt="" />
                  <span>{person.name}</span>
                </div>
            ))}
          </div>
        </section>
        <article>{renderPersonal()}</article>
      </React.Fragment>
  );
};

export default Contact;
