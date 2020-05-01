import { setError } from "features/uiSlice";

export const objectToArrayObject = object => Object.entries(object).map(([id, value]) => {
    return ({...value, id});
})

export const asyncDispatchWrapper = async function(func, dispatch, setIsLoading) {
    try {
        dispatch(setIsLoading({isLoading: true}));
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

    dispatch(setIsLoading({isLoading: false}));
}