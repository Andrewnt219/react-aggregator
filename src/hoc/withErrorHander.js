import React, { useState } from 'react'
import Modal from 'components/ui/Modal/Modal'
import { selectError, setError } from 'features/uiSlice'
import { useSelector, useDispatch } from 'react-redux'

function withErrorHander(Component) {
    return props => {
        const error = useSelector(selectError);
        const dispatch = useDispatch();

        function dismissError() {
            dispatch(setError({ hasError: false }));

        }

        return (
            <>
                <Modal show={error} clicked={dismissError}>
                    {error !== false
                        ? <h3>{error}</h3>
                        : <h1>Something went wrong</h1>
                    }
                </Modal>
                <Component {...props} />
            </>
        )
    }
}

export default withErrorHander
