import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { setError } from "./uiSlice";

const TOKEN = 'token';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isLoggedIn: false,
        loading: false
    },
    reducers: {
        setToken: (state, { payload }) => { 
            state.isLoggedIn = true;

            localStorage.setItem(TOKEN, JSON.stringify({
                id: payload.data.idToken,
                timeStamp: (new Date().getTime() * 1000) + payload.data.expiresIn
            }))
         },
         checkToken: (state) => {
             const token = localStorage.getItem(TOKEN);
             
             if(token) {
                 JSON.parse(token);
                 if(new Date().getTime() > token.timeStamp) {
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
    const signUpURL = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.REACT_APP_FIREBASE}`;
    const loginURL = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.REACT_APP_FIREBASE}`

    try {
        const { email, password } = payload.data;

        let res;
        if (payload.isLogin)
            res = await axios.post(loginURL, { email, password, returnSecureToken: true });
        else
            res = await axios.post(signUpURL, { email, password });
            
        dispatch(setToken({ data: res.data }));
    } catch (error) {
        console.log(error);
        dispatch(setError({ hasError: error.response.data.error.message }));
    }
}

export default authSlice.reducer;

