import React, { useState } from 'react'
import classes from './Response.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faClock, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import Popup from 'components/ui/Popup/Popup';

function Response({ subject, message, isResolved, issuedDate, resolvedMessage }) {

    let icon = <FontAwesomeIcon icon={faClock} color="#ff9f1c" title="Waiting for response" />;
    const [showModal, setShowModal] = useState(false);
    if (isResolved)
        icon = (
            <>
                <FontAwesomeIcon icon={faCheckCircle} color="#2ec4b6" title="Issue resolved" />
                &nbsp;
                {resolvedMessage && <FontAwesomeIcon title="Message from the developer" cursor="pointer" onClick={() => setShowModal(true)} icon={faEnvelope} color="#e71d36" />}
            </>
        )

    return (
        <div className={classes.Response}>
            <Popup show={showModal} setShow={setShowModal}>
                {resolvedMessage}
            </Popup>
            <h4 className={classes.subject}>
                {subject}
                &nbsp;
                {icon}
            </h4>

            <p className={classes.message}>
                {message}
            </p>

            <p className={classes.date}>
                {new Date(issuedDate).toLocaleDateString()}
            </p>
        </div>
    )
}

export default Response
