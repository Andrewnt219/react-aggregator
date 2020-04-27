import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
    name: 'uiState',
    initialState: {
        hasError: false,
        // showModal: false,
        // loading: false
    },
    reducers: {
        setError: (state, {payload}) => {state.hasError = payload.hasError},
        // setModal: (state, {payload}) => state.showModal = payload.showModal,
        // setLoading: (state, {payload}) => {state.loading = payload.isLoading}
    }
})

export const selectError = state => state.ui.hasError;
// export const selectLoading = state => state.ui.loading;
// export const selectModal = state => state.ui.showModal;

export const { setError /* setModal */ /* setLoading */} = uiSlice.actions;
export default uiSlice.reducer;