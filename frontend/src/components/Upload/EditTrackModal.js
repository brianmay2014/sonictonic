import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getAllGenres } from "../../store/song";
// import { restoreUser } from "../../store/session";
import { createSong } from "../../store/song";

// get stuff from the store - create song for example

const EditTrackModal = ({songEditName, songGenre, showEditForm}) => {
	//if not logged in, redirect to the log in page


	//fancy with a modal redirecting

	const [songName, setSongName] = useState(songEditName);
	const [genre, setGenre] = useState("Alternative Rock");

	const history = useHistory();
	const dispatch = useDispatch();
	const genreList = useSelector((state) => state.song.genres);
	const currentUser = useSelector((state) => state.session.user.id);

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

		dispatch(createSong(songData));

		//redirect user to their newly uploaded song
		//in the list of their uploaded songs
		history.push("/yourtracks");
	};

	return (
		<form className="new-song-form" onSubmit={handleSubmit}>
			<label>Song Name</label>
			<input
				type="text"
				value={songName}
				required
				onChange={(e) => setSongName(e.target.value)}
			/>
			<label>Genre</label>
			<select onChange={(e) => setGenre(e.target.value)} value={genre}>
				{genreList?.map((genre) => (
					<option key={genre.id}>{genre.genreName}</option>
				))}
			</select>			
			<button className="btn" type="submit">
				Edit track
			</button>
            <button className="btn">Cancel</button>
		</form>
	);
};

export default EditTrackModal;
