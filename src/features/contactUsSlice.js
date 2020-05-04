import { createSlice } from "@reduxjs/toolkit";
import axios from '../Axios'
import { asyncDispatchWrapper, generateQuery, objectToArrayObject } from "helpers/helpers";
const contactUsSlice = createSlice({
    name: 'contactUs',
    initialState: {
        isLoading: false,
        isSubmitted: false,
        userResponses: []
    },
    reducers: {
        setIsLoading: (state, { payload }) => { state.isLoading = payload.isLoading },
        setIsSubmitted: (state, { payload }) => { state.isSubmitted = payload },
        populateUserResponses: (state, { payload }) => { state.userResponses = payload.sort((first, second) => first.issuedDate < second.issuedDate) },
        spliceUserResponses: (state, { payload }) => {
            const responseIdx = state.userResponses.findIndex(response => response.id === payload);
            state.userResponses.splice(responseIdx, 1);
        }
    }
})

export const { setIsLoading, setIsSubmitted, populateUserResponses, spliceUserResponses } = contactUsSlice.actions;
export default contactUsSlice.reducer
export const selectIsLoading = state => state.contactUs.isLoading;
export const selectIsSubmitted = state => state.contactUs.isSubmitted;
export const selectUserResponses = state => state.contactUs.userResponses;

export const storeUserResponse = responseData => async dispatch => {
    const storeResponseInDB = async function () {
        dispatch(setIsLoading({ isLoading: true }));
        dispatch(setIsSubmitted(false));
        await axios.post('/responses.json', responseData);
    }

    asyncDispatchWrapper(storeResponseInDB, dispatch, setIsLoading);
    dispatch(setIsSubmitted(true));
}

export const getUserReponses = (userEmail) => async dispatch => {
    const sendGetRequest = async function () {
        dispatch(setIsLoading({ isLoading: true }));
        const res = await axios.get('/responses.json' + generateQuery('email', userEmail));
        const responses = objectToArrayObject(res.data);
        dispatch(populateUserResponses(responses));
    }

    asyncDispatchWrapper(sendGetRequest, dispatch, setIsLoading);
}

/**
 * Revoke a response
 */
export const revokeResponse = (id) => async dispatch => {
    const sendDeleteRequest = async function()
    {
        dispatch(setIsLoading({isLoading: false}));
        await axios.delete(`/responses/${id}.json`);
        dispatch(spliceUserResponses(id));
    }

    asyncDispatchWrapper(sendDeleteRequest, dispatch, setIsLoading);
}