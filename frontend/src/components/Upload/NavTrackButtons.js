import React from "react";
import { NavLink } from "react-router-dom";

import './Upload.css';

function TrackNavButtons() {
	console.log("inside track buttons");

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
