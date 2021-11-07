import { Link, useLocation} from "react-router-dom";
import React from 'react';
import {BooleanPrompt} from "../BooleanPrompt";
import {postDataToBackend} from "../../helper";
import cookie from "react-cookies";
import {ACCOUNT_LOGOUT_SUCCESS} from "../../backendReturnCodeHandling";

const Nav = () => {
    let path = useLocation().pathname;
    const [open, setOpen] = React.useState(false);

    const handleClose = (value) => {
        setOpen(false);
        if(value===0){
            postDataToBackend("account/logout", {'token': cookie.load('userToken')})
                .then((responseJson) => {
                    if(responseJson['code']===ACCOUNT_LOGOUT_SUCCESS){
                        window.location.href = "/";
                    }else{
                        alert(responseJson['msg'])
                        window.location.href = "/";
                    }
                });
        }
    };

    return (
        <nav>
            <Link to="/me" className={path.includes("me") ? "checked" : "not_checked"}>
                <img src={"/images/iconme.png"} alt="" />
            </Link>

            <Link to="/contact" className={path.includes("contact") ? "checked" : "not_checked"}>
                <img src={"/images/iconcontact.png"} alt="" />
            </Link>

            <Link to="/group" className={path.includes("group") ? "checked" : "not_checked"}>
                <img src={"/images/icongroup.png"} alt="" />
            </Link>

            <Link to="/calendar" className={path.includes("calendar") ? "checked" : "not_checked"} >
                <img src={"/images/iconcalendar.png"} alt="" />
            </Link>


            <Link to="/" className={path.includes("me") ? "logout" : "not_checked"}
                  onClick={event=>{
                      event.preventDefault();
                      setOpen(true)
                  }}>
                <img src={"/images/icon_logout.png"} alt="" />
            </Link>
            <div>
                <BooleanPrompt open={open} onClose={handleClose} title={"Are you sure you want to logout?"}/>
            </div>

        </nav>
    );
};

export default Nav;
