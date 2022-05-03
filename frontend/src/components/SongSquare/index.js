import React from 'react';
import './SongSquare.css';


function SongSquare( {song} ) {

	console.log('song',song);
	console.log('song.Album')
    return (
		<div className="song-square">
			<img
				className="album-art-square"
				src={song?.Album?.imageUrl}
				alt={`${song?.albumName} artwork`}
			></img>
			<h4>{song?.userName}</h4>
			<h5>{song?.songName}</h5>
		</div>
	);
};

export default SongSquare;
