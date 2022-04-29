import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import ProfileButton from "./ProfileButton";

import "./Navigation.css";
import "../../index.css";

function Navigation({isLoaded}) {

    const sessionUser = useSelector((state) => state.session.user);

    let sessionLinks;
    if (sessionUser) {
        sessionLinks = (
            // <button class='btn'>Logout</button>
            <ProfileButton user={sessionUser} />
        )
    } else {
   sessionLinks = (
    <>
        <NavLink to='/login'>
            Login
        </NavLink>
        <NavLink to='/signup'>
            Sign Up
        </NavLink>
   </>
   );
    }

	return (
    <ul>
        <li>
            <NavLink exact to='/'>
                Home
            </NavLink>
            {isLoaded && sessionLinks}
        </li>
        
    </ul>
    );
}

export default Navigation;
