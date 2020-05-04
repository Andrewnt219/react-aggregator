import React, { useState, useEffect } from 'react'
import Button from 'components/ui/Button/Button'
import { useDispatch, useSelector } from 'react-redux'
import { logout, selectUser } from 'features/authSlice'
import Card from 'components/User/Card/Card';
import avatars from 'assets/avatar'
import Avatar from 'components/User/Avatar/Avatar';
import DropDownSetting from 'components/User/DropDownSetting/DropDownSetting';
import { faInbox, faComment, faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import classes from './User.module.scss'
import PopUpSetting from 'components/User/PopUpSetting/PopUpSetting';
import Contact from 'components/User/Contact/Contact';
import { storeUserResponse, selectIsLoading, getUserReponses, selectUserResponses } from 'features/contactUsSlice';
import Response from 'components/User/Response/Response'
import Popup from 'components/ui/Popup/Popup';
import AvatarSelection from 'components/User/AvatarSelection/AvatarSelection'
import Spinner from 'components/ui/Spinner/Spinner';

function User() {
    const dispatch = useDispatch();
    const [needRefresh, setNeedRefreshed] = useState(false);
    const [showAvatarSelection, setShowAvatarSelection] = useState(false);
    const [showPopupMessage, setShowPopupMessage] = useState(false);


    const user = useSelector(selectUser);
    const { email } = user;
    const isLoading = useSelector(selectIsLoading);
    const userResponses = useSelector(selectUserResponses);

    useEffect(() => {
        dispatch(getUserReponses(email));
        return () => { setNeedRefreshed(false) }
    }, [email, dispatch, needRefresh])


    function onSubmit(data) {
        dispatch(storeUserResponse({ ...data, isResolved: false, resolvedMessage: "", issuedDate: new Date() }));
    }

    let profile = <Spinner />
    if (!isLoading) {
        profile = (
            <div className={classes.User}>
                <Card >
                    <Avatar
                        setShowAvatarSelection={setShowAvatarSelection}
                        src={user.avatar ? user.avatar : avatars[0]} />
                    <h1>{user.displayName}</h1>
                </Card>

                <Popup
                    show={showAvatarSelection}
                    setShow={setShowAvatarSelection}
                    setNeedRefreshed={setNeedRefreshed}  >
                    <AvatarSelection
                        setShowAvatarSelection={setShowAvatarSelection}
                        id={user.id} />
                </Popup>

                <DropDownSetting icon={faInfoCircle} title="My profile" >
                    <p>Email: {user.email} </p>
                    <p>First name: {user.firstName}</p>
                    <p>Last name: {user.lastName}</p>
                    <p>Display name: {user.displayName}</p>
                </DropDownSetting>

                <DropDownSetting icon={faInbox} title="Your messages">
                    {userResponses.length === 0
                        ? <p>Your inbox is empty</p>
                        : userResponses.map((response, idx) => <Response
                            key={idx}

                            subject={response.subject}
                            message={response.message}
                            isResolved={response.isResolved}
                            issuedDate={response.issuedDate}
                            resolvedMessage={response.resolvedMessage}
                            id={response.id}

                            setShowPopupMessage={setShowPopupMessage}
                            setNeedRefreshed={setNeedRefreshed}
                        />)}
                </DropDownSetting>
                <Popup
                    show={showPopupMessage}
                    setShow={setShowPopupMessage}
                    setNeedRefreshed={setNeedRefreshed}>
                    <p>Your message to the developer has been revoked</p>
                </Popup>

                <PopUpSetting
                    setNeedRefreshed={setNeedRefreshed}
                    icon={faComment}
                    title="Contact us">
                    <Contact
                        email={user.email}
                        onSubmit={onSubmit}
                        isLoading={isLoading} />
                </PopUpSetting>

                <Button clicked={() => dispatch(logout())}>LOG OUT</Button>
            </div>
        )
    }

    return profile;
}

export default User
