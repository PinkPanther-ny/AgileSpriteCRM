import Personal from "./personal";
import Add from "./add";
import React  from 'react';
import cookie from "react-cookies";
import {postDataToBackend} from "../../helper";
import {CONTACT_GET_ALL_SUCCESS} from "../../backendReturnCodeHandling";

export default class Contact extends React.Component  {
  constructor(props) {
    super(props);

    this.state = {
      contact : [],
      current : "",
    };
    this.handleAdd= this.handleAdd.bind(this);
    this.setCurrent= this.setCurrent.bind(this);
    this.setContact= this.setContact.bind(this);
    this.loadAllContact();
  }

  // const [current, setCurrent] = useState("");
  //
  // const [contact, setContact] = useState(contactList);
  // const [contact, setAllContact] = useState("");

  loadAllContact(){
    const token = {'token': cookie.load('userToken')}
    postDataToBackend("contact/get_all", token)
        .then((responseJson) => {
          if(responseJson['code']===CONTACT_GET_ALL_SUCCESS){
            this.setState({ contact : responseJson['contacts'] })
          }else {
            // token error
            alert(responseJson['msg'])
            window.location.href = "/login";
          }
        });
  }

  handleAdd(){
    this.setCurrent("add")
  }

  handleDelete(){
    this.state.contact.forEach((person, index) => {
      if (person.id === this.state.current.id) {
        this.state.contact.splice(index, 1);
        this.setContact([...this.state.contact]);
      }

    });
    this.setCurrent("");
  }
  setContact=(contact)=>{
    this.setState({contact : contact})
  }
  setCurrent(current){
    this.setState({current : current})
  }

  renderPersonal(){
    switch (this.state.current) {
      case "":
        this.loadAllContact()
        return (
            <img
                src="../images/Contact front page.png"
                alt="ContactFrontpage"
                className="contactImg"
            />
        );
      case "add":
        return (
            <Add
                contact={this.state.contact}
                setContact={this.setContact}
                setCurrent={this.setCurrent}
            />
        );
      default:
        return (
            <Personal
                person={this.state.current}
                contact={this.state.contact}
                setContact={this.loadAllContact}
            />
        );
    }
  }

  render(){
    return(
        <React.Fragment>
          <section>
            <div>
              <span>Contact</span>
              <span>
              <span className={"add"} onClick={this.handleAdd}>
                +
              </span>

              <span className={"delete"} onClick={this.handleDelete}>
                -
              </span>
            </span>
            </div>

            <div className={"search"}>
              <input type="text" />
            </div>

            <div className={"contact"}>
              {this.state.contact.map((person, index) => (
                  <div
                      key={index}
                      className={
                        this.state.current.id === person.id ? "checked person" : "person"
                      }
                      onClick={() => {
                        this.setCurrent(person);
                      }}
                  >
                    <img src={person.image_address} alt="Avatar" />
                    <span>{person.first_name + ' ' + person.last_name}</span>
                  </div>
              ))}
            </div>
          </section>
          <article>{this.renderPersonal()}</article>
        </React.Fragment>
    )
  }
};

