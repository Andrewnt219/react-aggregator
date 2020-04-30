import { createSlice } from "@reduxjs/toolkit";
import axios from '../Axios';
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
        isLoading: false
    },
    reducers: {
        setIsLoading: (state, {payload}) => { state.isloading = payload.isLoading},
        setToken: (state, { payload }) => {
            // Set up states
            state.isLoggedIn = true;
            state.userId = payload.data.localId;
            state.isLoading = false;

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
            res = await axios.post('/users.json', {
                ...rest,
                userId
            })
        }

    } catch (error) {
        console.log(error);
        dispatch(setError({ hasError: error?.response.data.error.message }));
    }
}



