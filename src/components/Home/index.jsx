import React from "react";
// import JSONPretty from 'react-json-pretty';
import cookie from "react-cookies";
import {postDataToBackend, validateCookie} from "../../helper";
import {ACCOUNT_GET_SUCCESS, CONTACT_GET_ALL_SUCCESS} from "../../backendReturnCodeHandling";

export default class Home extends React.Component  {

    constructor(props) {
        super(props);

        this.state = {
            data : null
        };
        this.renderMyData();
    }

    renderMyData(){
        validateCookie()
        const token = {'token': cookie.load('userToken')}
        postDataToBackend("account/get", token)
            .then((responseJson) => {
                if(responseJson['code']===ACCOUNT_GET_SUCCESS){
                    this.setState({ data : responseJson })
                }else {
                    // token error
                    alert(responseJson['code'])
                    window.location.href = "/login";
                }
            });
    }

    render(){
        return(
            <div>
                {JSON.stringify(this.state.data,null,2)}
                {/*<JSONPretty data={this.state.data} theme={require('react-json-pretty/dist/monikai')}/>*/}
            </div>
        );
    }
}