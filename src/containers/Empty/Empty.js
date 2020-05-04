import React from 'react'
import useTitle from 'hooks/useTitle'
import gif from 'assets/404.gif'
import Button from 'components/ui/Button/Button';
function Empty(props) {
    useTitle('404 | Page not found');

    return (
        <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
            <h1 style={{ textAlign: 'center' }}>Page not found</h1>
            <p style={{ textAlign: 'center', marginTop: '.5rem' }}>
                Not all wanderers are lost
            </p>
            <img
                style={{ margin: '2rem auto 0 auto', display: 'block', maxWidth: '80%', height: 'auto' }}
                src={gif} alt="confused travolta gif" />


            <Button style={{ color: 'red', marginTop: '1rem' }} clicked={() => props.history.goBack()}>GO BACK</Button>
        </div>
    )
}

export default Empty
