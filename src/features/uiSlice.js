import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
    name: 'uiState',
    initialState: {
        hasError: false,
        // showModal: false
    },
    reducers: {
        setError: (state, {payload}) => {state.hasError = payload.hasError},
        // setModal: (state, {payload}) => state.showModal = payload.showModal
    }
})

export const selectError = state => state.ui.hasError;
// export const selectModal = state => state.ui.showModal;

export const { setError, /* setModal */ } = uiSlice.actions;
export default uiSlice.reducer;