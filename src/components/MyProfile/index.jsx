import React from "react";
import cookie from "react-cookies";
import {postDataToBackend, validateCookie} from "../../helper";
import {ACCOUNT_GET_SUCCESS} from "../../backendReturnCodeHandling";

export default class MyProfile extends React.Component  {

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
                    this.setState({ data : responseJson['details'] })
                }else {
                    // token error
                    alert(responseJson['code'])
                    window.location.href = "/login";
                }
            });
    }

    render(){
        return(
            <div>Hello. <br/>
                {JSON.stringify(this.state.data,null,2)}
            </div>
        );
    }
}