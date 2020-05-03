import { setError } from "features/uiSlice";

export const objectToArrayObject = object => Object.entries(object).map(([id, value]) => {
    return ({ ...value, id });
})

export const keyObjectToObjectWithKey = object => {
    const [key, value] = Object.entries(object)[0];
    return ({
        id: key,
        ...value
    })
}

export const asyncDispatchWrapper = async function (func, dispatch, setIsLoading) {
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
        switch (errorMessage.toUpperCase()) {
            case ('NETWORK ERROR'):
                errorMessage = 'Check your Internet'
                break;
            case ('EMAIL_EXISTS'):
                errorMessage = 'Email exists! Try signing in'
                break;
            case ('TOO_MANY_ATTEMPTS_TRY_LATER'):
                errorMessage = 'Too manu failed attempts, please try again later'
                break;
            case ('EMAIL_NOT_FOUND'):
                errorMessage = 'Email not found! Try signing up'
                break;
            case ('INVALID_PASSWORD'):
                errorMessage = 'Invalid email or password'
                break;
            case ('USER_DISABLED'):
                errorMessage = 'Your account has been suspensed'
                break;
            case ('WEAK_PASSWORD'):
                errorMessage = 'Password must be at least 6 characters'
                break;

            default:
                errorMessage = 'Something went south'
                break;
        }
        dispatch(setError({ hasError: errorMessage }));
    }

    setIsLoading && dispatch(setIsLoading({ isLoading: false }));
}