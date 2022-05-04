import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { getAllSongs } from "../../store/song";
// import { useParams } from "react-router-dom";
import "./SongPage.css";
import {deleteComment} from '../../store/comment';

function CommentRow({ song, comment }) {
	// const dispatch = useDispatch();

	const dispatch = useDispatch();
	const currentUser = useSelector((state) => state.session.user);
	const [showConfirm, setShowConfirm] = useState(false);
	// const currentUserId = currentUser.username;

	// const [commentBody, setCommentBody] = useState("");

	const commentDelete = async (e) => {
		e.preventDefault();
		setShowConfirm(true);
	};

	const confirmDelete = async (e) => {
		e.preventDefault();
		//actually delete it

		const deleteId = e.target.id;
		const splitId = deleteId.split("-");
		const commentId = splitId[1];

		dispatch(deleteComment(commentId));

		setShowConfirm(false);
	};

	const cancelDelete = async (e) => {
		e.preventDefault();
		setShowConfirm(false);
	};

	// console.log(song);
	// console.log('-*/-*/-*/-*/comment inside-*/-*/-*/-*/', comment)

	return (
		<div className="comment-row">
			<div className="row-content">
				<p className="comment-user">{comment?.User?.username}</p>
				<p className="comment-body">{comment?.body}</p>
			</div>
			{comment.User.id === currentUser.id &&  (
				<div>
					<button
						className="comment-delete-btn btn"
						id={`delete-${comment?.id}`}
						onClick={commentDelete}
					>
						Delete
					</button>
				</div>
			)}
			{showConfirm && (
				<div className='confirm-delete'>
					<p>Are you sure you want to delete this comment?</p>
					<button
						className='btn-del'
						onClick={confirmDelete}
						id={`deletecomment-${comment?.id}`}
						>
							Delete Comment
					</button>
					<button
						className='btn-del'
						onClick={cancelDelete}
						>
							Cancel
					</button>

				</div>
			)}
		</div>
	);
}

export default CommentRow;
