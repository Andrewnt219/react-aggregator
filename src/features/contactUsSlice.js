import { createSlice } from "@reduxjs/toolkit";
import axios from '../Axios'
import { asyncDispatchWrapper } from "helpers/helpers";
const contactUsSlice = createSlice({
    name: 'contactUs',
    initialState: {
        isLoading: false,
        isSubmitted: false
    },
    reducers: {
        setIsLoading: (state, { payload }) => { state.isLoading = payload.isLoading },
        setIsSubmitted: (state, {payload}) => { state.isSubmitted = payload}
    }
})

export const {setIsLoading, setIsSubmitted} = contactUsSlice.actions;
export default contactUsSlice.reducer
export const selectIsLoading = state => state.contactUs.isLoading;
export const selectIsSubmitted = state => state.contactUs.isSubmitted;

export const storeUserResponse = responseData => async dispatch => {
    const storeResponseInDB = async function() {
        dispatch(setIsLoading({isLoading: true}));
        dispatch(setIsSubmitted(false));
        await axios.post('/responses.json', responseData);
    }

    asyncDispatchWrapper(storeResponseInDB, dispatch, setIsLoading);
    dispatch(setIsSubmitted(true));
}