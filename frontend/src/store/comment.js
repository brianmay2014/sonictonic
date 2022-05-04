import { csrfFetch } from "./csrf";

const GET_SONG_COMMENTS = "comment/GET_SONG_COMMENTS";
const CREATE_COMMENT = 'comment/CREATE_COMMENT';
const DELETE_COMMENT = 'comment/DELETE_COMMENT';

const getComments = (comments) => {
	return {
		type: GET_SONG_COMMENTS,
		payload: comments,
	};
};

const createNewComment = (comment) => {
	return {
		type: CREATE_COMMENT,
		payload: comment,
	}
}

const remove = (comment) => {
	return {
		type: DELETE_COMMENT,
		payload: comment,
	};
};


export const getSongComments = (id) => async (dispatch) => {
    console.log('thunk song id', id);
	const response = await csrfFetch(`/api/song/${id}/comments`);

	if (response.ok) {
		const comments = await response.json();
		dispatch(getComments(comments));
	}
};


//  { body: commentBody, songId: id, userId: currentUserId}
export const createComment = (commentData) => async (dispatch) => {
	
	const response = await csrfFetch(`/api/song/${commentData.songId}/comment`, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
    body: JSON.stringify(commentData)}
	);

	console.log('inside the thunk for createcommment');

	if (response.ok) {
		const comment = await response.json();
		dispatch(createNewComment(comment));
		return comment;
	}
};

export const deleteComment = (id) => async (dispatch) => {
	const response = await csrfFetch(`/api/song/comment/${id}`, {
		method: "DELETE",
		body: JSON.stringify({ commentId: id }),
	});

	if (response.ok) {
		const id = await response.json();
		dispatch(remove(id));
		return id;
	}
}

const initialState = { };

const commentReducer = (state = initialState, action) => {
	let newState;
	console.log("action", action);
	switch (action.type) {
		case GET_SONG_COMMENTS:
			// newState = { ...state };
            const songComments = {};
            action.payload.forEach(comment => {
                songComments[comment.id] = comment;
            });
            return { ...state, ...songComments };
		case CREATE_COMMENT:
			newState = {...state};
			// newState.comment = {...newState.comment};
			newState[action.payload.id] = action.payload;
			return newState;
		case DELETE_COMMENT:
				newState = {...state};
				delete newState[action.payload];
				return newState;
		default:
			return state;
	}
};

export default commentReducer;
