import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import * as sessionActions from "../../store/session";

function ProfileButton({ user }) {
	const dispatch = useDispatch();
    //for drop down user menu
	const [showMenu, setShowMenu] = useState(false);


	const openMenu = () => {
        //if showMenu is true, it is already open, nothing should happen
        if (showMenu) return;
        //if showMenu is false, it should be opened, set showMenu to true
		setShowMenu(true);
	};

	useEffect(() => {
        //if menu is not showing, exit useEffect
		if (!showMenu) return;
        
        //if menu is showing

        //function to hide the menu
		const closeMenu = () => {
            setShowMenu(false);
		};
        
        //event listener on the entire document, upon clicking, hide menu
		document.addEventListener("click", closeMenu);

        //clean up function to remove the listener
		return () => document.removeEventListener("click", closeMenu);
	}, [showMenu]);

	const logout = (e) => {
		e.preventDefault();
		dispatch(sessionActions.logout());
	};

	return (
		<>
			<button className='btn' onClick={openMenu}>
				<div className="profile-fa-icon">
					<i className="fa-solid fa-user" />
				</div>
			</button>
			{showMenu && (
				<ul className="profile-dropdown">
					<li>{user.username}</li>
					<li>{user.email}</li>
					<li>
						<button className="btn" onClick={logout}>Log Out</button>
					</li>
				</ul>
			)}
		</>
	);
}

export default ProfileButton;
