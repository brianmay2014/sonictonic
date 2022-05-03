import React, { useEffect, useState } from 'react';
// import EditTrackModal from './EditTrackModal';
import { useDispatch, useSelector } from "react-redux";
// import { useHistory } from "react-router-dom";
import { getAllGenres } from "../../store/song";
import { editSong } from '../../store/song';



function YourTrackRow ( {song} ) {

	const songId = song.id;
	console.log(songId);
    const [showEditForm, setShowEditForm] = useState(false);
    // const [showDeleteForm, setShowDeleteForm] = useState(false);
    const [songName, setSongName] = useState(song.songName);
	const [genre, setGenre] = useState("");

    const songsObj = useSelector((state) => state.song);
	const songList = Object.values(songsObj);

    const genreList = useSelector((state) => state.genre.genres);
	const currentUser = useSelector((state) => state.session.user.id);

    	// const history = useHistory();
		const dispatch = useDispatch();

    const editFormSong = (e) => {
        e.preventDefault();
		setGenre(song.Genre.genreName);
        setShowEditForm(true);
    }
	const editFormCancel = (e) => {
		e.preventDefault();
		setShowEditForm(false);
	}

    const deleteFormSong = (e) => {
        e.preventDefault();
        // const songId = e.target.id;

    }


    useEffect(() => {
		dispatch(getAllGenres());
	}, [dispatch]);

	const handleEdit = async (e) => {
		e.preventDefault();
        const editId = e.target.id;
		console.log('editId', editId);
        const splitId = editId.split('-');
        const songId = splitId[1];

		let genreArr = genreList.map((genre) => {
			return genre.genreName;
		});

		const genreId = genreArr.indexOf(genre) + 1;

		const songData = {
            songId,
			songName,
			genreId,
			currentUser,
		};

		console.log(songData);

		dispatch(editSong(songData));

		setShowEditForm(false);
	};





    return (
		<div>
			<div className="your-track-row">
				<button onClick={editFormSong} id={`edit-${song.id}`}>
					Edit
				</button>
				<button onClick={deleteFormSong} id={`delete-${song.id}`}>
					Delete
				</button>
				<img
					className="row-img"
					src={`${song?.Album?.imageUrl}`}
					alt={`Album artwork for ${song?.Album?.albumName}`}
				/>
				{song.songName} by {song.User?.username}
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
				<form className="new-song-form" onSubmit={handleEdit}>
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
					<button className="btn"
                    type="submit"
                    onClick={handleEdit}
                    id={`editsubmit-${song.id}`}>
						Edit track
					</button>
					<button className="btn" onClick={editFormCancel}>
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
