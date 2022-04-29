import { csrfFetch } from "./csrf";

const SET_USER = 'session/setUser';
const REMOVE_USER = 'session/removeUser';

const setUser = (user) => {
    return {
        type: SET_USER,
        payload: user,
    };
};

const removeUser = () => {
    return {
        type: REMOVE_USER,
    };
};


export const login = (user) => async (dispatch) => {
	const { credential, password } = user;
    //call to login
    const response = await csrfFetch("/api/session", {
		method: "POST",
		body: JSON.stringify({
			credential,
			password,
		}),
	});
	const data = await response.json();
    //set session user from the response
	dispatch(setUser(data.user));
	return response;
};

export const signup = (user) => async (dispatch) => {
    const { email, username, password } = user;

    const response = await csrfFetch('/api/users', {
        method: "POST",
        body: JSON.stringify({
            username, email, password}),
        });
    const data = await response.json();

    dispatch(setUser(data.user));
    return response;
};

export const logout = () => async (dispatch) => {
    const response = await csrfFetch('/api/session', {
        method: "DELETE"
    });
    dispatch(removeUser());
    return response;
};


//thunk to restore user on a refresh
export const restoreUser = () => async (dispatch) => {
    //loading the application after accessing the route to get the current session user
    const response = await csrfFetch('/api/session');
    const data = await response.json();

    //adding the user info to the redux store again
    dispatch(setUser(data.user));
    return response;
};


const initialState = { user: null};

const sessionReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case SET_USER:
            newState = { ...state };
            newState.user = action.payload;
            return newState;
        case REMOVE_USER:
            newState = { ...state };
            newState.user = null;
            return newState;
        default:
            return state;
    }
};

export default sessionReducer;