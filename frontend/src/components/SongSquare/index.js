import React from "react";
import "./SongSquare.css";

function SongSquare({ song }) {
	return (
		<div className="song-square">
			<a href={`/song/${song?.id}`}>
				<img
					className="album-art-square"
					src={song?.Album?.imageUrl}
					alt={`${song?.Album?.albumName} artwork`}
				></img>
				<h4>{song?.User?.username}</h4>
				<h5>{song?.songName}</h5>
			</a>
		</div>
	);
}

export default SongSquare;
