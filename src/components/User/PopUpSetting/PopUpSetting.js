import React, { useState } from 'react'
import Popup from 'components/ui/Popup/Popup'
import Setting from '../Setting/Setting'

function PopUpSetting({ icon, title, children, setNeedRefreshed }) {
    const [showPopup, setShowPopup] = useState(false);
    return (
        <>
            <Setting icon={icon} active={showPopup} title={title} clicked={() => setShowPopup(true)} />
            <Popup show={showPopup} setShow={setShowPopup} setNeedRefreshed={setNeedRefreshed} >
                {children}
            </Popup>
        </>
    )
}

export default PopUpSetting
