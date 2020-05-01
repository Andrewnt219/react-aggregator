import { setError } from "features/uiSlice";

export const objectToArrayObject = object => Object.entries(object).map(([key, value]) => ({
    ...value,
    key
}))

export const dispatchErrorWrapper = async function(func, dispatch) {
    try {
        await func();
    } catch (error) {
        console.log(error);

        // damn, no one follows a specific structure for error object
        let errorMessage;
        try {
            errorMessage = error.response.data.error.message;
        } catch (err) {
            errorMessage = error.message;
        }

        dispatch(setError({ hasError: errorMessage }));
    }
}