import { Link, useLocation } from "react-router-dom";
import React  from 'react';

const Nav = () => {
    const path = useLocation().pathname;

    return (
        <nav>
            <Link to="/me" className={path.includes("me") ? "checked" : ""}>
                <img src={"/images/iconme.png"} alt="" />
            </Link>

            <Link to="/contact" className={path.includes("contact") ? "checked" : ""}>
                <img src={"/images/iconcontact.png"} alt="" />
            </Link>

            <Link to="/group" className={path.includes("group") ? "checked" : ""}>
                <img src={"/images/icongroup.png"} alt="" />
            </Link>

            <Link to="/calendar" className={path.includes("calendar") ? "checked" : ""} >
                <img src={"/images/iconcalendar.png"} alt="" />
            </Link>

        </nav>
    );
};

export default Nav;
