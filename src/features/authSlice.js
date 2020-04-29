import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { setError } from "./uiSlice";

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
        userId: null,
        isLoggedIn: false,
        loading: false
    },
    reducers: {
        setToken: (state, { payload }) => {
            // Set up states
            state.isLoggedIn = true;
            state.userID = payload.data.localId;

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
            const token = localStorage.getItem(TOKEN);

            // Check if token exists in localStorage
            if (token) {
                JSON.parse(token);

                // Check if the token is expired
                // then set loggedIn state accordingly
                if (new Date().getTime() > token.timeStamp) {
                    localStorage.removeItem(TOKEN);
                    state.isLoggedIn = false;
                }
                else {
                    state.isLoggedIn = true;
                }
            }

        },
        // User logout
        logout: (state) => {
            localStorage.removeItem(TOKEN);
            state.isLoggedIn = false;
        }
    }
})

/**
 * exports
 */
export const { setToken, checkToken, logout } = authSlice.actions;
export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export default authSlice.reducer;

/**
 * Async actions
 */
export const auth = payload => async dispatch => {
    try {
        const { email, password, ...rest } = payload.data;
        let res;

        // Sign in route
        if (payload.isLogin) {
            const LOGIN_URL = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.REACT_APP_FIREBASE}`

            res = await axios.post(LOGIN_URL, { email, password, returnSecureToken: true });
            dispatch(setToken({ data: res.data }));
        }
        // Sign up route
        else {
            const SIGNUP_URL = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.REACT_APP_FIREBASE}`;

            res = await axios.post(SIGNUP_URL, { email, password });
            dispatch(setToken({ data: res.data }));

            // Store additional user info, with userId
            const userId = res.data.localId;
            res = await axios.post(process.env.REACT_APP_BASE_URL + '/users.json', {
                ...rest,
                userId
            })
        }

    } catch (error) {
        console.log(error);
        dispatch(setError({ hasError: error.response.data.error.message }));
    }
}



