import React, { useEffect, useState } from 'react';
import SongSquare from '../SongSquare';
import { useDispatch, useSelector } from 'react-redux';
import { getAllSongs } from '../../store/song';


function CabinetDisplay() {

    const [songArray, setSongArray] = useState([]);
    const dispatch = useDispatch();
    const songList = useSelector((state) => state.song.songs);

    useEffect(() => {
        dispatch(getAllSongs());
    }, [dispatch]);

    useEffect(() => {
        setSongArray(songList.map(song => {
            return {
                songName: song.songName,
                albumName: song.Album.albumName,
                albumArt: song.Album.imageUrl,    
            }
        }))
    }, [songList]);


    
    return (
		<div className="cabinet-display">
			<p>Hello</p>
            
			<p>Album Artwork {songList[0].songName}</p>
			<p>Album Artwork {songArray.songName}</p>
			<p>Artist {songList[0].Album.albumName}</p>
			<p>Song {songList[0].Album.imageUrl}</p>
			{/* {songList}; */}
		</div>
	);
}

export default CabinetDisplay;