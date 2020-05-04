import avatars from 'assets/avatar'
import React from 'react'
import classes from './AvatarSelection.module.scss'
import AvatarCategory from './AvatarCategory/AvatarCategory';

function AvatarSelection({ id, setShowAvatarSelection }) {
    const cats = avatars.slice(0, 50);
    const bachVien = avatars.slice(50);

    return (
        <div
            className={classes.AvatarSelection}
        >
            <AvatarCategory setShowAvatarSelection={setShowAvatarSelection} id={id} imgSource={bachVien} name="Bach Vien" />
            <AvatarCategory setShowAvatarSelection={setShowAvatarSelection} id={id} imgSource={cats} name="Cats" />
        </div>
    )
}

export default AvatarSelection
