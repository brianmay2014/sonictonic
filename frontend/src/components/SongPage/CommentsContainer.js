import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { getAllSongs } from "../../store/song";
import { useParams } from "react-router-dom";
import "./SongPage.css";
import CommentRow from "./CommentRow";
import { useHistory } from "react-router-dom";
import { getSongComments } from '../../store/comment';
import { createComment } from '../../store/comment';

function CommentsContainer({ song, currentUser }) {
	const dispatch = useDispatch();
    const { id } = useParams();

	const history = useHistory();

    const currentUserId = currentUser?.id;
    const currentUsername = currentUser?.username
    const songCommentObj = useSelector((state) => state.comment);
	const songComments = Object.values(songCommentObj);

	const sessionUser = useSelector((state) => state.session.user);


   
    // const [errors, setErrors] = useState([]);
    const [commentBody, setCommentBody] = useState('');

	useEffect(() => {
		dispatch(getSongComments(id));
	}, [dispatch, id]);

    const commentSubmit = async (e) => {
        e.preventDefault();

        const commentData = { body: commentBody, songId: id, userId: currentUserId}

        console.log('commentdata, before dispatch', commentData);

        dispatch(createComment(commentData));
        console.log('after dispatch to thunk');

        // setErrors([]);

		// let newComment = await dispatch(createComment(commentData)).catch(
		// 	async (res) => {
		// 		const data = await res.json();
		// 		if (data && data.errors) setErrors(data.errors);
		// 	}
		// );
 
    }

	const toLogin = () => {
		history.push("/login");
	}

	return (
		<div className="comments-container">
			{sessionUser && (
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
			)}
			{!sessionUser && (
					<div className="comment-login">
						<button
						className="btn"
						onClick={toLogin}
						>
						Login
						</button>
						<p>to leave a comment</p>
					</div>
			)}
			<div className="comment-display">
				{console.log("-*/-*/-*/-*/inside JSX")}
				{songComments.map((comment) => {
					return (
						<CommentRow
							key={`comment${comment?.id}`}
							// key={comment?.id}
							song={song}
							comment={comment}
						/>
					);
				})}
			</div>
		</div>
	);
}

export default CommentsContainer;
