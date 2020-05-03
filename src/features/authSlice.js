import { createSlice } from "@reduxjs/toolkit";
import axios from '../Axios';
import { asyncDispatchWrapper, keyObjectToObjectWithKey } from "helpers/helpers";

/**
 * constants
 */
const TOKEN = 'token';

/**
 * Slice
 */
const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: {
            localId: ''
        },
        // to prevent the protected page from auto redirecting before checkToken
        isLoggedIn: true,
        isLoading: false
    },
    reducers: {
        setIsLoading: (state, { payload }) => { state.isLoading = payload.isLoading },
        setToken: (state, { payload }) => {
            // Set up states
            state.isLoggedIn = true;
            state.user = payload.data;

            // Store token in local storage
            localStorage.setItem(TOKEN, JSON.stringify({
                id: payload.data.idToken,
                localId: payload.data.localId,
                // Calculate expiring time (in seconds)
                timeStampInMs: new Date().getTime() + payload.data.expiresIn * 1000
            }))
        },
        // Will be run everytime the app is RELOADED
        setUser: (state, { payload }) => {
            state.user = payload.userData;
            state.isLoggedIn = true;
        },
        // User logout
        logout: (state) => {
            localStorage.removeItem(TOKEN);
            state.isLoggedIn = false;
            state.user = null;
        }
    }
})

/**
 * exports
 */
export const { setToken, setUser, logout, setIsLoading } = authSlice.actions;
export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectUser = state => state.auth.user;
export const selectIsLoading = state => state.auth.isLoading;
export default authSlice.reducer;

/**
 * send auth request
 */
export const auth = payload => async dispatch => {
    const sendAuthRequest = async function () {
        const { email, password, ...rest } = payload.data;
        if (payload.isLogin)
            await sendLoginRequest(dispatch, email, password, rest);
        else
            await sendSignupRequest(email, password, dispatch, rest);
    }

    asyncDispatchWrapper(sendAuthRequest, dispatch, setIsLoading);
}


async function sendLoginRequest(dispatch, email, password, rest) {
    const LOGIN_URL = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.REACT_APP_FIREBASE}`
    const res = await axios.post(LOGIN_URL, { email, password, returnSecureToken: true });
    dispatch(setToken({ data: { ...res.data, ...rest } }));
}

async function sendSignupRequest(email, password, dispatch, rest) {
    const SIGNUP_URL = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.REACT_APP_FIREBASE}`;
    let res = await createAccountInAuth(rest, SIGNUP_URL, email, password);
    const userData = { ...res.data, ...rest };

    await createAccountInDB(res, rest, email);

    dispatch(setToken({ data: userData }));
}

async function createAccountInDB(res, rest, email) {
    const userId = res.data.localId;
    const displayName = rest.firstName + ' ' + rest.lastName;

    res = await axios.post('/users.json', {
        ...rest,
        localId: userId,
        displayName,
        email
    });
    return res;
}

async function createAccountInAuth(rest, SIGNUP_URL, email, password) {
    const { lastName, firstName } = rest;
    let displayName;
    if (!firstName && !lastName)
        displayName = 'User';
    else
        displayName = firstName + ' ' + lastName;
    let res = await axios.post(SIGNUP_URL, { email, password, displayName: displayName });
    return res;
}

/**
 * Check token
 */

export const checkToken = payload => async dispatch => {
    // Get the token
    const tokenJSON = localStorage.getItem(TOKEN);

    // Check if token exists in localStorage
    if (tokenJSON) {
        const token = JSON.parse(tokenJSON);

        // Check if the token is expired
        if (new Date().getTime() > token.timeStampInMs) {
            // logOut if expires
            localStorage.removeItem(TOKEN);
            dispatch(logout());
        }
        else {
            // Query user from DB and populate state if not expires
            const query = '?orderBy="localId"&equalTo="' + token.localId + '"';
            const res = await axios.get('/users.json' + query);
            const userData = keyObjectToObjectWithKey(res.data);
            dispatch(setUser({ userData }))
        }
    }

}
