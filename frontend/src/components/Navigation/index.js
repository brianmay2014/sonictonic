import React from "react";
import { useSelector } from "react-redux";
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
    <div className='login-links'>
        <NavLink to='/login'>
            Login
        </NavLink>
        <NavLink to='/signup'>
            Sign Up
        </NavLink>
   </div>
   );
    }

	return (
		<div>
			<div className="top-bar"></div>
			<nav>
				<div className="left-nav-links">
					<li>
						<NavLink exact to="/">
							Home
						</NavLink>
					</li>
					<li>
						<NavLink exact to="/cabinet">
							Cabinet
						</NavLink>
					</li>
					<li>
						<NavLink exact to="/upload">
							Upload
						</NavLink>
					</li>
				</div>
				<li>{isLoaded && sessionLinks}</li>
			</nav>
		</div>
	);
}

export default Navigation;
