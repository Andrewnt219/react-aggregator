import React, { useState } from 'react'

import DropDown from '../DropDown/DropDown'
import Setting from '../Setting/Setting';

function DropDownSetting({icon, title, children}) {
    const [showDropDown, setShowDropDown] = useState(false);
    return (
        <>
            <Setting
                clicked={() => setShowDropDown(prev => !prev)}
                active={showDropDown}
                icon={icon}
                title={title} />

            <DropDown show={showDropDown}>
                {children}
            </DropDown>
        </>
    )
}

export default DropDownSetting
