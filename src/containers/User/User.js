import React from 'react'
import Button from 'components/ui/Button/Button'
import { useDispatch } from 'react-redux'
import { logout } from 'features/authSlice'
import Card from 'components/User/Card/Card';
import avatar from 'assets/avatar'
import Avatar from 'components/User/Avatar/Avatar';
import Setting from 'components/User/Setting/Setting';
import { faPalette, faBookmark, faPhone, faComment, faInfo, faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import classes from './User.module.scss'
function User() {
    const dispatch = useDispatch();
    
    return (
        <div className={classes.User}>
            <Card >
                <Avatar src={avatar[0]} />
            </Card>

            <Setting icon={faInfoCircle}>My profile</Setting>
            <div className={classes.profie}>
                
            </div>
            <Setting icon={faPalette}>Change theme</Setting>
            <Setting icon={faComment}>Contact us</Setting>

            <Button clicked={() => dispatch(logout())}>LOG OUT</Button>
        </div>

    )
}

export default User
