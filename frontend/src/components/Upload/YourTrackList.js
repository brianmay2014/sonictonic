import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllSongs } from '../../store/song';
import YourTrackRow from './YourTrackRow';

const YourTrackList = () => {

    const dispatch = useDispatch();
    const songsObj = useSelector(state => state.song);
    const songList = Object.values(songsObj);
    const currentUser = useSelector((state) => state.session.user?.id);

    //pull the entire song list
    useEffect(() => {
		dispatch(getAllSongs());
	}, [dispatch]);


    return (
        <div className="your-track-list">
            {console.log('track list render')}
            {songList?.filter(song => song.userId === currentUser)
            .map((song) => {
                return (
                    
                    <YourTrackRow key={song.id} song={song} />
                    
                )
            })}
        </div>
    )
}

export default YourTrackList;