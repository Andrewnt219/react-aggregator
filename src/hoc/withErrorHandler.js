import React from 'react'
import Modal from 'components/ui/Modal/Modal'
import { selectError, setError, /* selectLoading */ } from 'features/uiSlice'
import { useSelector, useDispatch } from 'react-redux'

function withHandler(Component) {
    return props => {
        const error = useSelector(selectError);
        // const loading = useSelector(selectLoading);
        const dispatch = useDispatch();

        function dismissError() {
            dispatch(setError({ hasError: false }));

        }

        return (
            <>
                <Modal show={error} clicked={dismissError}>
                    {error !== false
                        ? <h3 style={{width: 'max-content', margin: '0 auto'}}>{error}</h3>
                        : <h1 style={{width: 'max-content', margin: '0 auto'}}>Something went wrong</h1>
                    }
                </Modal>
                {/* {loading && <Spinner /> } */}
                <Component {...props} />
            </>
        )
    }
}

export default withHandler
