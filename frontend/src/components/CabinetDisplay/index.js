import React, { useEffect, useState } from 'react';
import SongSquare from '../SongSquare';
import { useDispatch, useSelector } from 'react-redux';
import getAllSongs from '../../store/song';


function CabinetDisplay() {

    const dispatch = useDispatch();
    const songList = useSelector((state) => state.song.songs);

    useEffect(() => {
        dispatch(getAllSongs());
    }, [dispatch]);

    
    return (
        <div className="cabinet-display">
            <p>Hello
                </p>
                {/* {songList}; */}
        </div>
    )
}

export default CabinetDisplay;