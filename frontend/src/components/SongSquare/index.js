import React from 'react';
import './SongSquare.css';


function SongSquare( ) {
    const song = {
        url: "https://sonictonicsongseeders.s3.us-west-1.amazonaws.com/sonictonicseeder/UltraMono/01War.mp3",
        username: "IDLES",
        songName: "War",
        albumName: "Ultra Mono",
        imageUrl: "https://media.pitchfork.com/photos/5f6ce8e1ffb0eebbb428ceff/1:1/w_600/ultra%20mono_idles.jpg",
    };

    return (
		<div className="song-square">
			<img
				className="album-art-square"
				src={song.imageUrl}
				alt={`${song.albumName} artwork`}
			></img>
			<h4>{song.username}</h4>
			<h5>{song.songName}</h5>
		</div>
	);
};

export default SongSquare;
