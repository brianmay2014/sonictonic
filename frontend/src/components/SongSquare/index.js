import React from 'react';
import './SongSquare.css';


function SongSquare( {song} ) {

    return (
		<div className="song-square">
			<img
				className="album-art-square"
				src={song.albumArt}
				alt={`${song.albumName} artwork`}
			></img>
			<h4>{song.userName}</h4>
			<h5>{song.songName}</h5>
		</div>
	);
};

export default SongSquare;
