import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { useHistory } from "react-router-dom";
import { getAllSongs } from "../../store/song";
import { useParams } from 'react-router-dom';
import MusicPlayer from "./MusicPlayer";
import CommentsContainer from "./CommentsContainer";



function SongPage() {

    const dispatch = useDispatch();

    const { id } = useParams();
    console.log(id);
    const song = useSelector((state) => state.song[id]);

const currentUser = useSelector((state) => state.session.user);

    console.log(song);

        useEffect(() => {
			dispatch(getAllSongs());
		}, [dispatch]);


    return (
		<div className="song-page-container">
			<MusicPlayer song={song} currentUser={currentUser} />
			<CommentsContainer song={song} currentUser={currentUser} />
		</div>
	);
}


export default SongPage;