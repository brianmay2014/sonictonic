import { csrfFetch } from "./csrf";

const GET_ALL_GENRES = "song/GET_ALL_GENRES";

const getGenres = (genres) => {
	return {
		type: GET_ALL_GENRES,
		payload: genres,
	};
};

export const getAllGenres = () => async (dispatch) => {
	const response = await csrfFetch(`/api/song/genres`);

	if (response.ok) {
		const genres = await response.json();
		dispatch(getGenres(genres));
	}
};

const initialState = {
	genres: null,
};

const genreReducer = (state = initialState, action) => {
	let newState;
	switch (action.type) {
		case GET_ALL_GENRES:
			newState = { ...state };
			newState.genres = action.payload;
			return newState;
		default:
			return state;
	}
};

export default genreReducer;
