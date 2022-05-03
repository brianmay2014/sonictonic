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
    console.log('inside the delete action creator');
    console.log(id);
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

    if (response.ok) {
        const song = await response.json();
        dispatch(createNewSong(song));
    };
};

export const deleteSong = (id) => async (dispatch) => {

    console.log('beginning of thunk'); 

    const response = await csrfFetch(`/api/song/${id}`, {
        method: "DELETE",
        body: JSON.stringify({songId: id}),
    });

    console.log('inside the thunk');

    if (response.ok) {
        const id = await response.json();
        console.log('inside response.ok, id = ', id);
        dispatch(remove(id));
        return id;
    }
}

const initialState = { };

const songReducer = (state = initialState, action) => {
    let newState;
    console.log('action',action);
    switch (action.type) {
        case GET_ALL_SONGS:
            newState = {...state};
            const allSongs = {};
            action.payload.forEach(song => {
                allSongs[song.id] = song;
            });
            return { ...allSongs, ...state };
            // newState.songs = action.payload;
            // return newState;
        // case GET_ALL_GENRES:
        //     newState = {...state};
        //     newState.genres = action.payload;
        //     return newState;
        case CREATE_SONG:
            newState = {...state};
            newState.songs = [...newState.songs];
            //very questionable methods
            newState.songs.push(action.payload);
            return newState;
        case UPDATE_SONG:
            newState = {...state, [action.payload.id]: action.payload};

            // console.log('hello, i am the state variable',newState);
            // console.log('hello from the reducer', action.payload);
            // let updateIndex = action.payload.id - 1;
            // newState.songs[updateIndex] = action.payload;
            return newState;
        case REMOVE_SONG:
            console.log('inside the delete reducer');
                newState = {...state};
                console.log('action.payload',action.payload)
                delete newState[action.payload];
                //fill me in, please
                return newState;
        default:
            return state;
    }
};


console.log(getSongList({test: 'test'}));

export default songReducer;