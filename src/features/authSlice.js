import { createSlice } from "@reduxjs/toolkit";
import axios from '../Axios';
import { asyncDispatchWrapper } from "helpers/helpers";

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
        user: null,
        isLoggedIn: false,
        isLoading: false
    },
    reducers: {
        setIsLoading: (state, { payload }) => { state.isLoading = payload },
        setToken: (state, { payload }) => {
            // Set up states
            state.isLoggedIn = true;
            state.user = payload.data;

            // Store token in local storage
            localStorage.setItem(TOKEN, JSON.stringify({
                id: payload.data.idToken,
                userId: payload.data.localId,
                // Calculate expiring time (in seconds)
                timeStamp: (new Date().getTime() * 1000) + payload.data.expiresIn
            }))
        },
        // Will be run everytime the app is RELOADED
        checkToken: (state) => {
            // Get the token
            const tokenJSON = localStorage.getItem(TOKEN);

            // Check if token exists in localStorage
            if (tokenJSON) {
                const token = JSON.parse(tokenJSON);

                // Check if the token is expired
                if (new Date().getTime() > token.timeStamp) {
                    // logOut if expires
                    localStorage.removeItem(TOKEN);
                    state.isLoggedIn = false;
                    state.userId = null;
                }
                else {
                    // Auto log in if not expires
                    state.isLoggedIn = true;
                    state.userId = token.userId;
                }
            }

        },
        // User logout
        logout: (state) => {
            localStorage.removeItem(TOKEN);
            state.isLoggedIn = false;
            state.userId = null;
        }
    }
})

/**
 * exports
 */
export const { setToken, checkToken, logout, setIsLoading } = authSlice.actions;
export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectUserId = state => state.auth.userId;
export const selectIsLoading = state => state.auth.isLoading;
export default authSlice.reducer;

/**
 * Async actions
 */
export const auth = payload => async dispatch => {
    const sendAuthRequest = async function () {
        const { email, password, ...rest } = payload.data;
        dispatch(setIsLoading(true));
        if (payload.isLogin)
            await sendLoginRequest(dispatch, email, password);
        else
            await sendSignupRequest(email, password, dispatch, rest);
    }

    asyncDispatchWrapper(sendAuthRequest, dispatch, setIsLoading);
}


async function sendLoginRequest(dispatch, email, password) {
    const LOGIN_URL = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.REACT_APP_FIREBASE}`
    const res = await axios.post(LOGIN_URL, { email, password, returnSecureToken: true });
    dispatch(setToken({ data: res.data }));
}

async function sendSignupRequest(email, password, dispatch, rest) {
    const SIGNUP_URL = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.REACT_APP_FIREBASE}`;
    let res = await createAccountInAuth(rest, SIGNUP_URL, email, password);
    const userData = res.data;

    await createAccountInDB(res, rest);

    dispatch(setToken({ data: userData }));
}

async function createAccountInDB(res, rest) {
    const userId = res.data.localId;
    res = await axios.post('/users.json', {
        ...rest,
        userId
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

