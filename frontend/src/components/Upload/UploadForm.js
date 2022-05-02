import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { useHistory } from "react-router-dom";
import { getAllGenres } from "../../store/song";

// get stuff from the store - create song for example

const UploadForm = () => {
	//if not logged in, redirect to the log in page

	//fancy with a modal redirecting

	const [songName, setSongName] = useState("");
	const [songUrl, setSongUrl] = useState("");
	const [albumName, setAlbumName] = useState("");
	const [albumArt, setAlbumArt] = useState("");
    const [genre, setGenre] = useState("");

	const dispatch = useDispatch();
	const genreList = useSelector((state) => state.song.genres);

	useEffect(() => {
		dispatch(getAllGenres());
	}, [dispatch]);


    const handleSubmit = async (e) => {
        e.preventDeafult();

        // newSong = {
        //     id,
        //     userId,
        //     url,
        //     albumId,
        //     genreId,
        //     songName,
        //     createdAt,
        //     updatedAt
        // }
    
        // newAlbum = {
        //     id,
        //     userId,
        //     albumName,
        //     imageUrl,
        //     createdAt,
        //     updatedAt
        // }
    }

	return (
		<form className="new-song-form" onSubmit={handleSubmit}>
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
            <select
                onChange={(e)=>setGenre(e.target.value)}
                value={genre}>
                {genreList?.map(genre =>
                    <option key={genre.id}>{genre.genreName}</option>)}
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
            <button className="btn" type='submit'>Upload new track</button>
		</form>
	);
};


export default UploadForm;