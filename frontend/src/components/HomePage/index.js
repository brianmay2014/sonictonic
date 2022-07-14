import React, { useEffect } from "react";
import "../../index.css";
import "./HomePage.css";
import SongSquare from "../SongSquare";
import { useDispatch, useSelector } from "react-redux";
import { getAllSongs } from "../../store/song";

function HomePage() {
	const dispatch = useDispatch();
	const songsObj = useSelector((state) => state.song);
	const songList = Object.values(songsObj);

	useEffect(() => {
		dispatch(getAllSongs());
	}, [dispatch]);

	return (
		<div className="splash-body">
			<div>
				<div className="cover-image"></div>
				<div className="splash-overlay"></div>
			</div>
			<div className="splash-text">
				<h2 className="header-text">
					{" "}
					What's next in music is first on Sonic Tonic
				</h2>
				<p>
					SonicTonic is a simple music player to share your songs with
					the world, and a place to see what's new in the world of
					music.
				</p>
			</div>
			<div className="featured-tracks-container">
				<h2> Featured Tracks on SonicTonic</h2>
				<div className="featured-tracks">
					<SongSquare song={songsObj[3]} />
					<SongSquare song={songsObj[14]} />
					<SongSquare song={songsObj[23]} />
					<SongSquare song={songsObj[38]} />
				</div>
			</div>
			<div id="calling-creator-container">
				<div id="creators-text">
					<h3>Calling all creators</h3>
					<p>
						Get on SonicTonic to share your sounds, and grow your
						audience.
					</p>
					<p> What're you waiting for?</p>
					<div id="splash-account-links">
						<h3>
							<a className="splash-btn" href="/signup">
								Sign Up
							</a>{" "}
							to upload your own tracks!
						</h3>
						<h4>
							{" "}
							Already have an account?{" "}
							<a className="splash-btn" href="/login">
								Log in
							</a>
						</h4>
					</div>
				</div>
				<img
					id="creator-image"
					src="https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
					alt="live concert"
				></img>
			</div>

			<div className="footer-spacer"></div>
		</div>
	);
}

export default HomePage;
