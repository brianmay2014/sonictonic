// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getAllSongs } from "../../store/song";
// import { useParams } from "react-router-dom";
import AudioPlayer from "react-h5-audio-player";
// import "react-h5-audio-player/lib/styles.css";
import './SongPage.css';
import './Player.css'

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
			<AudioPlayer
				src={`${song?.url}`}
				showJumpControls={false} />
			{/* <p>{song.songName} will be the song playing here</p> */}

			{currentUsername}
		</div>
	);
}

export default MusicPlayer;
