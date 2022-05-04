import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getAllSongs } from "../../store/song";
// import { useParams } from "react-router-dom";
import "./SongPage.css";

function CommentRow({ song, currentUser }) {
	// const dispatch = useDispatch();

	const currentUserId = currentUser.id;
	const currentUsername = currentUser.username;

	// const { id } = useParams();
	// console.log(id);
	// const song = useSelector((state) => state.song[id]);

	// console.log(song);
	const [commentBody, setCommentBody] = useState("");

	// useEffect(() => {
	// 	dispatch(getAllSongs());
	// }, [dispatch]);

	const commentSubmit = async (e) => {
		e.preventDefault();
	};

	return (
		<div className="comment-row">
			<p>And this is where the comments will go, hello</p>
			{currentUserId}
		</div>
	);
}

export default CommentRow;
