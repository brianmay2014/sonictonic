import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getAllGenres } from "../../store/genre";
// import { restoreUser } from "../../store/session";
import { createSong } from "../../store/song";

// get stuff from the store - create song for example

const UploadForm = () => {
	//if not logged in, redirect to the log in page

	//fancy with a modal redirecting

	const [songName, setSongName] = useState("");
	const [songUrl, setSongUrl] = useState("");
	const [albumName, setAlbumName] = useState("");
	const [albumArt, setAlbumArt] = useState("");
    const [genre, setGenre] = useState("Alternative Rock");
	const [errors, SetErrors] = useState([]);

    const history = useHistory();
	const dispatch = useDispatch();
	const genreList = useSelector((state) => state.genre.genres);
    const currentUser = useSelector((state) => state.session.user?.id);

	useEffect(() => {
		dispatch(getAllGenres());

	}, [dispatch]);


    const handleSubmit = async (e) => {
        e.preventDefault();

        let genreArr= genreList.map(genre => {
            return genre.genreName;
        })

        const genreId = genreArr.indexOf(genre) + 1;
        const songData = { songName, songUrl, albumName, albumArt, genreId, currentUser};

        // dispatch(createSong(songData));

		SetErrors([]);

		let newSong = await dispatch(createSong(songData)).catch(
			async (res) => {
				const data = await res.json();
				if (data && data.errors) SetErrors(data.errors);
			}
		);
		
		if (newSong){

			alert("Song uploaded, redirecting to your track page");
	
			// redirect user to their newly uploaded song
			// in the list of their uploaded songs
			history.push('/yourtracks');
		}
        
    }


	// useEffect(()=> {
	// 	if (errors.length === 0) {
	
	// 	  setSubmit(true);
	// 	}
	// 	if (errors.length) {
	// 		setSubmit(false);
	// 	}
	// }, [errors]);
	
	// useEffect(() => {
	// 	if (submit === true && errors.length === 0) {
	// 		alert("Song uploaded, redirecting to your track page");
	// 	}
	// }, [submit]);


	return (
		<form className="new-song-form" onSubmit={handleSubmit}>
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
			<label>Song Link</label>
			<input
				type="text"
				value={songUrl}
				required
				onChange={(e) => setSongUrl(e.target.value)}
			/>
			<label>Genre</label>
			<select onChange={(e) => setGenre(e.target.value)} value={genre}>
				{genreList?.map((genre) => (
					<option key={genre.id}>{genre.genreName}</option>
				))}
			</select>
			<label>Album Name</label>
			<input
				type="text"
				value={albumName}
				required
				onChange={(e) => setAlbumName(e.target.value)}
			/>
			<label>Album Art Link</label>
			<input
				type="text"
				value={albumArt}
				required
				onChange={(e) => setAlbumArt(e.target.value)}
			/>
			<button className="btn" type="submit">
				Upload new track
			</button>
		</form>
	);
};


export default UploadForm;