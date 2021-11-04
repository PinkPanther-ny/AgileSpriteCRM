import { TopBar } from './style';
import React from "react";
import {validateCookie} from "../../helper";

export default class Header extends React.Component  {

    constructor(props) {
        super(props);
    }
    componentDidMount(){
        validateCookie();
    }
    render(){
        return(
            <TopBar>
                <div>A G I L E S P R I T E</div>
                <img src="/images/logo.jpg" alt="logo" />
            </TopBar>
        );
    }
}