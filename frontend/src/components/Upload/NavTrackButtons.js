import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";

import './Upload.css';

function TrackNavButtons() {

	const history = useHistory();
const sessionUser = useSelector((state) => state.session.user);

// if user is not signed in for /upload or /yourtracks
// rerouted to the login page
	if (!sessionUser) {
		return history.push('/login');;
	}

	return (
		<div className="track-nav-buttons">
				<li>
					<NavLink id="up-button" to="/upload">Upload</NavLink>
				</li>
				<li>
					<NavLink id="your-button" to="/yourtracks">Your Tracks</NavLink>
				</li>
		</div>
	);
}

export default TrackNavButtons;
