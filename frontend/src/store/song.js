


const GET_SONG = 'song/GET_SONG';
const GET_ALL_SONGS = 'song/GET_ALL_SONGS'

//get song with album and genre info
const getSong = song => ({
    type: GET_SONG,
    song
});

const getSongList = (song) => ({
	type: GET_ALL_SONGS,
	song,
});

export const getOneSong = (id) => async dispatch => {
    const response = await fetch(`/api/song/${id}`);

    if (response.ok) {
        const song = await response.json();
        dispatch(getSong(song));
    }
};

export const getAllSongs = (id) => async (dispatch) => {
	const response = await fetch(`/api/song/`);

	if (response.ok) {
		const songs = await response.json();
		dispatch(getSongList(songs));
	}
};