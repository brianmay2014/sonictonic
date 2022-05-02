import { csrfFetch } from './csrf';

const GET_SONG = 'song/GET_SONG';
const GET_ALL_SONGS = 'song/GET_ALL_SONGS'

//get song with album and genre info
const getSong = song => {
    return {
        payload: song,
        type: GET_SONG,
    }
};

const getSongList = (songs) => {
    return {
        type: GET_ALL_SONGS,
        payload: songs,

    }
};

export const getOneSong = (id) => async dispatch => {
    const response = await csrfFetch(`/api/song/${id}`);

    if (response.ok) {
        const song = await response.json();
        dispatch(getSong(song));
    }
};

export const getAllSongs = () => async (dispatch) => {
	const response = await csrfFetch(`/api/song/all`);

	if (response.ok) {
		const songs = await response.json();
		dispatch(getSongList(songs));
	}
};

const initialState = { songs: null };

const songReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case GET_ALL_SONGS:
            newState = {...state};
            newState.songs = action.payload;
            return newState;
        default:
            return state;
    }
};


console.log(getSongList({test: 'test'}));

export default songReducer;