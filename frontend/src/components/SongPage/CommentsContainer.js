import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getAllSongs } from "../../store/song";
// import { useParams } from "react-router-dom";
import "./SongPage.css";
import CommentRow from "./CommentRow";

function CommentsContainer({ song, currentUser }) {
	// const dispatch = useDispatch();

    const currentUserId = currentUser.id;
    const currentUsername = currentUser.username

	// const { id } = useParams();
	// console.log(id);
	// const song = useSelector((state) => state.song[id]);

	// console.log(song);
    const [ commentBody, setCommentBody] = useState('');

	// useEffect(() => {
	// 	dispatch(getAllSongs());
	// }, [dispatch]);

    const commentSubmit = async (e) => {
        e.preventDefault();




    }

	return (
		<div className="comments-container">
			<form className="new-comment-form" onSubmit={commentSubmit}>
				<p>Signed in as {currentUsername}</p>
				<input
					type="text"
					value={commentBody}
					required
					onChange={(e) => setCommentBody(e.target.value)}
					placeholder="Add a comment"
				/>
				<button className="btn" type="submit">
					Add Comment
				</button>
			</form>
			<div className="comment-display">
				<CommentRow song={song} currentUser={currentUser} />
				<CommentRow song={song} currentUser={currentUser} />
				<CommentRow song={song} currentUser={currentUser} />
			</div>
		</div>
	);
}

export default CommentsContainer;
