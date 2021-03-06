import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { getAllGenres } from "../../store/song";
import { editSong } from "../../store/song";
import { deleteSong } from "../../store/song";

function YourTrackRow({ song, genreName }) {


	const [showEditForm, setShowEditForm] = useState(false);
	const [showDeleteForm, setShowDeleteForm] = useState(false);
	const [songName, setSongName] = useState(song.songName);
	const [genre, setGenre] = useState('');
	const [editSubmitted, setEditSubmitted] = useState(false);

	const [errors, setErrors] = useState([]);

	// const songsObj = useSelector((state) => state.song);
	// const songList = Object.values(songsObj);

	const genreList = useSelector((state) => state.genre.genres);
	// const songList = useSelector((state) => state.song);
	const currentUser = useSelector((state) => state.session.user.id);

	// const history = useHistory();
	const dispatch = useDispatch();

	const editFormSong = (e) => {
		e.preventDefault();

		if (editSubmitted) {
			// setGenre(song.Genre.genreName);
		} else {
			setGenre(genreName);
		}
		setShowEditForm(true);
	};
	const editFormCancel = (e) => {
		e.preventDefault();
		setShowEditForm(false);
	};

	const deleteFormSong = (e) => {
		e.preventDefault();
		// const songId = e.target.id;
		setShowDeleteForm(true);
	};
	const deleteFormCancel = (e) => {
		e.preventDefault();
		setShowDeleteForm(false);
	};

	
	
	
	// useEffect(() => {
	// 		dispatch(getAllGenres());
	// 	}, [dispatch]);
		
		const handleEdit = async (e) => {
			e.preventDefault();

			const editId = e.target.id;
			const splitId = editId.split("-");
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

			dispatch(editSong(songData)).catch(async (res) => {
				const data = await res.json();
				if (data && data.errors) setErrors(data.errors);
			});

			setShowEditForm(false);
			setEditSubmitted(true);
		};
		
		useEffect(() => {
			if (errors.length === 0) {
			setShowEditForm(false);
		}
		if (errors.length) {
			setShowEditForm(true);
		}
	}, [errors]);

	useEffect(() => {
		if (showEditForm === false) {
			setErrors([]);
		}
	}, [showEditForm]);

	const handleDelete = async (e) => {
		e.preventDefault();

		const deleteId = e.target.id;
		const splitId = deleteId.split("-");
		const songId = splitId[1];

		//call to thunk
		dispatch(deleteSong(songId));

		//hide form
		setShowDeleteForm(false);
	};
	
	if (!song) {
		return 'loading...';
	}
	return (
		<div>
			<div className="your-track-row">
				<div className="track-button-holder">
					<button
						className="btn track-row-btn"
						onClick={editFormSong}
						id={`edit-${song.id}`}
					>
						Edit
					</button>
					<button
						className="btn track-row-btn"
						onClick={deleteFormSong}
						id={`delete-${song.id}`}
					>
						Delete
					</button>
				</div>

				<a href={`/song/${song.id}`}>
				<img
					className="row-img"
					src={`${song?.Album?.imageUrl}`}
					alt={`Album artwork for ${song?.Album?.albumName}`}
					
				/>
				</a>
				<div className="track-text">
					<p>{song.songName}</p>
					<p>by</p>
					<p>{song?.User?.username}</p>
				</div>
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
				// <div className="modal-backing">
				<form className="new-song-form" onSubmit={handleEdit}>
					<ul className="form-errors">
						{errors.map((error, idx) => (
							<li key={idx}>{error}</li>
						))}
					</ul>
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
					<div className="edit-btn-div">
						<button
							className="btn"
							type="submit"
							onClick={handleEdit}
							id={`editsubmit-${song.id}`}
						>
							Edit track
						</button>
						<button className="btn" onClick={editFormCancel}>
							Cancel
						</button>
					</div>
				</form>
				// </div>
			)}

			{/* Delete form */}
			<div className="delete-form">
				{showDeleteForm && (
					// <div className="modal-backing">
					<form className="new-song-form" onSubmit={handleDelete}>
						<p>Are you sure you want to delete {song.songName}?</p>

						<button
							className="btn"
							type="submit"
							onClick={handleDelete}
							id={`deletesubmit-${song.id}`}
						>
							Delete track
						</button>
						<button className="btn" onClick={deleteFormCancel}>
							Cancel
						</button>
					</form>
					// </div>
				)}
			</div>
		</div>
	);
}

export default YourTrackRow;
