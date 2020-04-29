import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { setError } from "./uiSlice";

const TOKEN = 'token';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        userId: null,
        isLoggedIn: false,
        loading: false
    },
    reducers: {
        setToken: (state, { payload }) => {
            state.isLoggedIn = true;
            state.userID = payload.data.localId;

            localStorage.setItem(TOKEN, JSON.stringify({
                id: payload.data.idToken,
                userId: payload.data.localId,
                timeStamp: (new Date().getTime() * 1000) + payload.data.expiresIn
            }))
        },
        checkToken: (state) => {
            const token = localStorage.getItem(TOKEN);

            if (token) {
                JSON.parse(token);
                if (new Date().getTime() > token.timeStamp) {
                    localStorage.removeItem(TOKEN);
                    state.isLoggedIn = false;
                }

            }

        },
        logout: (state) => {
            localStorage.removeItem(TOKEN);
            state.isLoggedIn = false;
        }
    }
})

export const { setToken, checkToken, logout } = authSlice.actions;

export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const auth = payload => async dispatch => {
    try {
        console.log(payload);
        const { email, password, ...rest } = payload.data;

        let res;
        if (payload.isLogin) {
            const LOGIN_URL = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.REACT_APP_FIREBASE}`

            res = await axios.post(LOGIN_URL, { email, password, returnSecureToken: true });
            dispatch(setToken({ data: res.data }));
        }
        else {
            const SIGNUP_URL = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.REACT_APP_FIREBASE}`;

            res = await axios.post(SIGNUP_URL, { email, password });
            dispatch(setToken({ data: res.data }));

            const userId = res.data.locaiId;
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

export default authSlice.reducer;

