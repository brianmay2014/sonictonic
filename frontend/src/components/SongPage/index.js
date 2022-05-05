import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { useHistory } from "react-router-dom";
import { getAllSongs } from "../../store/song";
import { useParams } from 'react-router-dom';
import MusicPlayer from "./MusicPlayer";
import CommentsContainer from "./CommentsContainer";
import AudioPlayer from './AudioPlayer';



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

    const title = useSelector((state) => state.song[id]?.songName);
	const artist = useSelector((state) => state.song[id]?.User.username);
	const audioSrc = useSelector((state) => state.song[id]?.url);
	const image = useSelector((state) => state.song[id]?.Album.imageUrl);
	const color = "#a2b3ca";

    return (
		<div className="song-page-container">
      <div className='music-container'>
			<div className="track-info">
				<h2 className="title">{title}</h2>
				<h3 className="artist">{artist}</h3>
			</div>
			<img
				className="artwork"
				src={image}
				alt={`track artwork for ${title} by ${artist}`}
			/>

			<MusicPlayer song={song} />
      </div>
			{/* <AudioPlayer song={song} /> */}
			<CommentsContainer song={song} currentUser={currentUser} />
		</div>
	);
}


export default SongPage;