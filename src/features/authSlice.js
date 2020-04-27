import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { setError } from "./uiSlice";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        id: false,
        loading: false
    },
    reducers: {
        signUp: (state, {payload}) => {state.id = payload.data.idToken}
    }
})

export const {signUp} = authSlice.actions;

export const register = payload => async dispatch => {
    const signUpURL=`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.REACT_APP_FIREBASE}`
    try {
        const {email, password} = payload.data;

        const res = await axios.post(signUpURL, {email, password});
        dispatch(signUp({data: res.data}));
    } catch (error) {
        console.log(error);
        dispatch(setError({hasError: error.response.data.error.message}));
    }
}

export default authSlice.reducer;

