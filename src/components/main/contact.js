import Personal from "./personal";
import Add from "./add";
import React  from 'react';
import cookie from "react-cookies";
import {postDataToBackend} from "../../helper";
import {CONTACT_DELETE_SUCCESS, CONTACT_GET_ALL_SUCCESS} from "../../backendReturnCodeHandling";
import {BooleanPrompt} from "../BooleanPrompt";

export default class Contact extends React.Component  {
  constructor(props) {
    super(props);

    this.state = {
      contact : [],
      current : "",
      deleteContactPromptOpen : false
    };
    this.handleAdd= this.handleAdd.bind(this);
    this.handleDelete= this.handleDelete.bind(this);
    this.setCurrent= this.setCurrent.bind(this);
    this.setContact= this.setContact.bind(this);
  }

  componentDidMount(){
    const allContacts = cookie.load('all_contacts');
    if((typeof allContacts) !== 'undefined'){
      console.log(allContacts)
      this.setState({ contact : allContacts })

    }

    this.loadAllContact()
  }

  loadAllContact(){
    const token = {'token': cookie.load('userToken')}
    postDataToBackend("contact/get_all", token)
        .then((responseJson) => {
          if(responseJson['code']===CONTACT_GET_ALL_SUCCESS){
            this.setState({ contact : responseJson['contacts'] })
            cookie.save('all_contacts', responseJson['contacts'], {path: "/"})
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
        postDataToBackend("contact/delete",
            {
              'token': cookie.load('userToken'),
              'contact_id' : this.state.current.id}
        ).then((responseJson) => {

          if(responseJson['code']!==CONTACT_DELETE_SUCCESS){
            alert(responseJson['code'])
          }

        }).then(()=>{

              this.state.contact.splice(index, 1);
              this.setContact([...this.state.contact]);

              this.setCurrent("");
            }
        )
      }

    });
  }

  handleClosePrompt = (value) => {
    this.setState({deleteContactPromptOpen : false})
    if(value===0){
      this.handleDelete()
    }

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

              <span className={"delete"} onClick={()=>{

                this.setState({deleteContactPromptOpen : true})
              }}>
                -
              </span>
                <div>
                  <BooleanPrompt open={this.state.deleteContactPromptOpen} onClose={this.handleClosePrompt} title={"Are you sure you want to delete this contact?"}/>
                </div>
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

