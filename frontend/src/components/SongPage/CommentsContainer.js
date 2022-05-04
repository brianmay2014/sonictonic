import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { getAllSongs } from "../../store/song";
import { useParams } from "react-router-dom";
import "./SongPage.css";
import CommentRow from "./CommentRow";
import { getSongComments } from '../../store/comment';

function CommentsContainer({ song, currentUser }) {
	const dispatch = useDispatch();
    const { id } = useParams();
    console.log('params id', id);

    const currentUserId = currentUser?.id;
    const currentUsername = currentUser?.username
    const songCommentObj = useSelector((state) => state.comment);
	const songComments = Object.values(songCommentObj);

    console.log('-*/-*/-*/ song -*/-*/ comennts', songComments);

    const [ commentBody, setCommentBody] = useState('');

	useEffect(() => {
        // console.log('useeffect songid', currentSongId)
		dispatch(getSongComments(id));
	}, [dispatch]);

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
                {songComments?.map((comment) => {
                    return(
                        <CommentRow key={comment.id} song={song} comment={comment}/>
                    )
                })}
			</div>
		</div>
	);
}

export default CommentsContainer;
