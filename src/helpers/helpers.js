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
        const errorMessage = error.response ? error.response.data.error.message : error.message;
        dispatch(setError({ hasError: errorMessage }));
    }
}