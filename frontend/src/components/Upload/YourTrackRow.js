import React, { useEffect, useState } from 'react';
// import EditTrackModal from './EditTrackModal';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getAllGenres } from "../../store/song";
import { editSong } from '../../store/song';

function YourTrackRow ( {song} ) {

    const [showEditForm, setShowEditForm] = useState(false);
    const [showDeleteForm, setShowDeleteForm] = useState(false);
    const [songName, setSongName] = useState(song.songName);
	const [genre, setGenre] = useState("Alternative Rock");

    const genreList = useSelector((state) => state.song.genres);
	const currentUser = useSelector((state) => state.session.user.id);

    	const history = useHistory();
		const dispatch = useDispatch();

    const editSong = (e) => {
        e.preventDefault();
        const songId = e.target.id;
        setShowEditForm(true);

    }

    const deleteSong = (e) => {
        e.preventDefault();
        const songId = e.target.id;
    }


    useEffect(() => {
		dispatch(getAllGenres());
	}, [dispatch]);

	const handleSubmit = async (e) => {
		e.preventDefault();

		let genreArr = genreList.map((genre) => {
			return genre.genreName;
		});

		const genreId = genreArr.indexOf(genre) + 1;
		const songData = {
			songName,
			genreId,
			currentUser,
		};

		dispatch(editSong(songData));

		//redirect user to their newly uploaded song
		//in the list of their uploaded songs
		history.push("/yourtracks");
	};





    return (
		<div>
			<div className="your-track-row">
				<button onClick={editSong} id={`edit-${song.songId}`}>
					Edit
				</button>
				<button onClick={deleteSong} id={`delete-${song.songId}`}>
					Delete
				</button>
				<img
					className="row-img"
					src={`${song.albumArt}`}
					alt={`Album artwork for ${song.albumName}`}
				/>
				{song.songName} by {song.userName}
			</div>
			{/* Edit form */}
			{/* {showEditForm && (
				<div className="edit-form">
					<EditTrackModal
						songEditName={song.songName}
						songGenre={song.genreName}
						showEditForm={showEditForm}
					/>
				</div>
			)} */}

			{showEditForm && (
				<form className="new-song-form" onSubmit={handleSubmit}>
					<label>Song Name</label>
					<input
						type="text"
						value={songName}
						required
						onChange={(e) => setSongName(e.target.value)}
					/>
					<label>Genre</label>
					<select
						onChange={(e) => setGenre(e.target.value)}
						value={genre}
					>
						{genreList?.map((genre) => (
							<option key={genre.id}>{genre.genreName}</option>
						))}
					</select>
					<button className="btn" type="submit">
						Edit track
					</button>
					<button className="btn" onClick={() => setShowEditForm(false)}>
						Cancel
					</button>
				</form>
			)}

			{/* Delete form */}
			<div className="delete-form"></div>
		</div>
	);
}



export default YourTrackRow;