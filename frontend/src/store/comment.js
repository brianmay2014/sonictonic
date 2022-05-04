import { csrfFetch } from "./csrf";

const GET_SONG_COMMENTS = "comment/GET_SONG_COMMENTS";

const getComments = (comments) => {
	return {
		type: GET_SONG_COMMENTS,
		payload: comments,
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

const initialState = { };

const commentReducer = (state = initialState, action) => {
	// let newState;
	console.log("action", action);
	switch (action.type) {
		case GET_SONG_COMMENTS:
			// newState = { ...state };
            const songComments = {};
            action.payload.forEach(comment => {
                songComments[comment.id] = comment;
            });
            return { ...state, ...songComments };
		default:
			return state;
	}
};

export default commentReducer;
