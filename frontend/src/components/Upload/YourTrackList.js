import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllSongs } from '../../store/song';
import YourTrackRow from './YourTrackRow';
// import { getAllGenres } from "../../store/song";

const YourTrackList = () => {
	const dispatch = useDispatch();
	const songsObj = useSelector((state) => state.song);
	const songList = Object.values(songsObj);
	const currentUser = useSelector((state) => state.session.user?.id);
    // const genreList = useSelector((state) => state.genre.genres);

	//pull the entire song list
	useEffect(() => {
		dispatch(getAllSongs());
	}, [dispatch]);

	// useEffect(() => {
	// 	dispatch(getAllGenres());
	// }, [dispatch]);

	return (
		<div className="your-track-list">
			{console.log("inside YourTrackList")}
			{songList
				?.filter((song) => song.userId === currentUser)
				.map((song) => {
					return <YourTrackRow key={song.id} song={song} />;
				})}
		</div>
	);
}

export default YourTrackList;