// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getAllSongs } from "../../store/song";
// import { useParams } from "react-router-dom";
import './SongPage.css';

function MusicPlayer({song, currentUser}) {
	// const dispatch = useDispatch();

    const currentUsername = currentUser?.username;
	// const { id } = useParams();
	// console.log(id);
	// const song = useSelector((state) => state.song[id]);

	// console.log(song);

	// useEffect(() => {
	// 	dispatch(getAllSongs());
	// }, [dispatch]);

	return (
		<div className="music-player">
			<p>This is where the Music Player will go</p>
			{/* <p>{song.songName} will be the song playing here</p> */}
            {currentUsername}
		</div>
	);
}

export default MusicPlayer;
