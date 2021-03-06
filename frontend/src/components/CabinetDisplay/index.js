import React, { useEffect, useState } from 'react';
import SongSquare from '../SongSquare';
import { useDispatch, useSelector } from 'react-redux';
import { getAllSongs } from '../../store/song';

import './CabinetDisplay.css';

function CabinetDisplay() {

    // const [songArray, setSongArray] = useState([]);
    const dispatch = useDispatch();
    const songsObj = useSelector(state => state.song);
    const songList = Object.values(songsObj);
    // const songList = useSelector((state) => state.song.songs);

    //pull the entire song list
    useEffect(() => {
        dispatch(getAllSongs());
    }, [dispatch]);


    //map out array used to
    // useEffect(() => {
    //     setSongArray(songList?.map(song => {
    //         return {
    //             songName: song?.songName,
    //             albumName: song?.Album.albumName,
    //             albumArt: song?.Album.imageUrl,
    //             songId: song?.id,
    //             userName: song?.User.username,
    //         }
    //     }))
    // }, [songList]);


    if (!songList) return;
    
    return (
		<div className="cabinet-display">
            {songList?.filter(song => song?.id).map((song) => {
                return (
                    <SongSquare key={`song${song?.id}`} song={song} />
                )
            })}



		</div>
	);
}

export default CabinetDisplay;