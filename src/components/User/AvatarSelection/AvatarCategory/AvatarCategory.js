import React from 'react'
import classes from './AvatarCategory.module.scss'
import AvatarCase from './AvatarCase/AvatarCase'

function AvatarCategory({ id, imgSource, name }) {
    return (
        <>
            <h3 className={classes.category}>{name}</h3>
            <div className={classes.AvatarCategory}>
                {imgSource.map(avatarSrc => <AvatarCase
                    key={avatarSrc}
                    id={id}
                    avatarSrc={avatarSrc} />)}
            </div>
        </>
    )
}

export default AvatarCategory
