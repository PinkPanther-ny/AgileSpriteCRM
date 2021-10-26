import React from "react";
import JSONPretty from 'react-json-pretty';
import cookie from "react-cookies";
import {postDataToBackend} from "../../helper";
import {CONTACT_GET_ALL_SUCCESS} from "../../backendReturnCodeHandling";

export default class Home extends React.Component  {

    constructor(props) {
        super(props);

        this.state = {
            data : null
        };
        this.renderMyData();
    }

    renderMyData(){
        const token = {'token': cookie.load('userToken')}
        postDataToBackend("contact/get_all", token)
            .then((responseJson) => {
                if(responseJson['code']===CONTACT_GET_ALL_SUCCESS){
                    this.setState({ data : responseJson['contacts'] })
                }else {
                    // token error
                    alert(responseJson['msg'])
                    window.location.href = "/login";
                }
            });
    }

    render(){
        return(
            <div>
                <JSONPretty data={this.state.data} theme={require('react-json-pretty/dist/monikai')}/>
            </div>
        );
    }
}