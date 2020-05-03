import React, {useState} from 'react'
import Popup from 'components/ui/Popup/Popup'
import Setting from '../Setting/Setting'

function PopUpSetting({icon, title, children}) {
    const [showPopup, setShowPopup] = useState(false);
    return (
        <>
            <Setting icon={icon} title={title} clicked={() => setShowPopup(true)} />
            <Popup show={showPopup} setShow={setShowPopup} >
                {children}
            </Popup>
        </>
    )
}

export default PopUpSetting
