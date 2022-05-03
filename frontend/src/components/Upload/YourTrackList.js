import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { useHistory } from "react-router-dom";
import { getAllSongs } from '../../store/song';
import YourTrackRow from './YourTrackRow';

const YourTrackList = () => {

    const dispatch = useDispatch();
    // const songList = useSelector((state) => state.song.songs);
    const songsObj = useSelector(state => state.song);
    const songList = Object.values(songsObj);
    const [yourSongList, setYourSongList] = useState([]);
    const currentUser = useSelector((state) => state.session.user.id);

    //pull the entire song list
    useEffect(() => {
		dispatch(getAllSongs());
	}, [dispatch]);

	//map out array used to
	useEffect(() => {
		// let mapped = songList?.map((song) => {
		// 		return {
		// 			songName: song?.songName,
		// 			albumName: song?.Album?.albumName,
		// 			albumArt: song?.Album?.imageUrl,
		// 			songId: song?.id,
		// 			userName: song?.User?.username,
        //             userId: song?.User?.id,
        //             genreId: song?.Genre?.id,
        //             genreName: song?.Genre.name
		// 		};
		// 	});

        //     setYourSongList(mapped?.filter(song => song.userId === currentUser));
        console.log(songList);

	}, [songList, currentUser]);

    return (
        <div className="your-track-list">
            
            {yourSongList?.map((song) => {
                return (
                    <YourTrackRow key={song.songId} song={song} />
                )
            })}
        </div>
    )
}

export default YourTrackList;