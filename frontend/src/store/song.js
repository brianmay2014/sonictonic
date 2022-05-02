import { csrfFetch } from './csrf';

const GET_SONG = 'song/GET_SONG';
const GET_ALL_SONGS = 'song/GET_ALL_SONGS';
const CREATE_SONG = 'song/CREATE_SONG';

const GET_ALL_GENRES = 'song/GET_ALL_GENRES';

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

const getGenres = (genres) => {
    return { 
        type: GET_ALL_GENRES,
        payload: genres,
    }
};

const createNewSong = (song) => {
    return {
        type: CREATE_SONG,
        payload: song,
    }
}

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

export const getAllGenres = () => async (dispatch) => {
    const response = await csrfFetch(`/api/song/genres`);

    if (response.ok) {
        const genres = await response.json();
        dispatch(getGenres(genres));
    }
}

export const createSong = (songData) => async (dispatch) => {
            // const songData = {
			// 	songName,
			// 	songUrl,
			// 	albumName,
			// 	albumArt,
			// 	genreId,
			// 	currentUser,
			// };

            console.log('songData inside thunk', songData);


    const response = await csrfFetch(`/api/song`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
    body: JSON.stringify(songData)}
    );

    if (response.ok) {
        const song = await response.json();
        dispatch(createNewSong(song));
    };
};

const initialState = {
    songs: null,
    genres: null,
 };

const songReducer = (state = initialState, action) => {
    let newState;
    console.log('action',action);
    switch (action.type) {
        case GET_ALL_SONGS:
            newState = {...state};
            newState.songs = action.payload;
            return newState;
        case GET_ALL_GENRES:
            newState = {...state};
            newState.genres = action.payload;
            return newState;
        case CREATE_SONG:
            newState = {...state};
            newState.songs = [...newState.songs];
            //very questionable methods
            newState.songs.push(action.payload);
            return newState;
        default:
            return state;
    }
};


console.log(getSongList({test: 'test'}));

export default songReducer;