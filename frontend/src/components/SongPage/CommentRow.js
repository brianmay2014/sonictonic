import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { getAllSongs } from "../../store/song";
// import { useParams } from "react-router-dom";
import "./SongPage.css";

function CommentRow({ song, comment }) {
	// const dispatch = useDispatch();

	const currentUser = useSelector((state) => state.session.user);
	const currentUserId = currentUser.username;

	const [commentBody, setCommentBody] = useState("");


	// const commentDelete = async (e) => {
        // 	e.preventDefault();
        // };
    
     // console.log(song);
    // console.log('-*/-*/-*/-*/comment inside-*/-*/-*/-*/', comment)

	return (
		<div className="comment-row">
			<p className='comment-user'>{comment.User?.username}</p>
			<p className='comment-body'>{comment?.body}</p>
		</div>
	);
}

export default CommentRow;
