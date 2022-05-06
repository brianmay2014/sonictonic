import { csrfFetch } from './csrf';

const GET_SONG = 'song/GET_SONG';
const GET_ALL_SONGS = 'song/GET_ALL_SONGS';
const CREATE_SONG = 'song/CREATE_SONG';
const UPDATE_SONG = 'song/UPDATE_SONG';
const REMOVE_SONG = 'song/REMOVE_SONG';
const GET_ALL_GENRES = 'song/GET_ALL_GENRES';

//get song with album and genre info
const getSong = song => {
    return {
        payload: song,
        type: GET_SONG,
    }
};

const getSongList = (songs) => {
    // console.log('get all songs action creator');
    return {
        type: GET_ALL_SONGS,
        payload: songs,
    }
};

const update = (song) => {
    return {
        type: UPDATE_SONG,
        payload: song,
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

const remove = (id) => {
    return {
        type: REMOVE_SONG,
        payload: id,
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
    // console.log('top of get all songs');
	const response = await csrfFetch(`/api/song/all`);

    // console.log('after the fetch all in get all songs');
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

export const editSong = (song) => async (dispatch) => {
    const response = await csrfFetch(`/api/song/${song.songId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify(song)
    });

    if (response.ok) {
        const song = await response.json();
        dispatch(update(song));
        return song;
    };
};

export const createSong = (songData) => async (dispatch) => {

    const response = await csrfFetch(`/api/song`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
    body: JSON.stringify(songData)}
    );

    // console.log('hello from the inside of create thunk');

    if (response.ok) {
        const song = await response.json();
        // console.log('inside -*/-*/-*/-*/-*/*/*/*//**//**/*/ thunk', song);
        dispatch(createNewSong(song));
        return song;
    }

};

export const deleteSong = (id) => async (dispatch) => {

    const response = await csrfFetch(`/api/song/${id}`, {
        method: "DELETE",
        body: JSON.stringify({songId: id}),
    });

    if (response.ok) {
        const id = await response.json();
        dispatch(remove(id));
        return id;
    }
}

const initialState = { };

const songReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case GET_ALL_SONGS:
            // console.log('reducer------top of get all songs');
            newState = {...state};
            const allSongs = {};
            // console.log("reducer------ before for each get all songs");
            action.payload.forEach(song => {
                // console.log(song);
                allSongs[song.id] = song;
            });
            // console.log("reducer------ after for each get all songs");
            return { ...state, ...allSongs };
        case CREATE_SONG:
            newState = {...state};
            // console.log('inside create song reducer');
            // newState.song = {...newState.song};
            // newState[action.payload.id] = action.payload;

            //leave this one in
            newState[action.payload.id] = action.payload;
            // console.log('after assignment in reducer');
            return newState;
        case UPDATE_SONG:
            newState = {...state, [action.payload.id]: action.payload};
            return newState;
        case REMOVE_SONG:
            newState = {...state};
            delete newState[action.payload];            
            return newState;
        default:
            return state;
    }
};


export default songReducer;