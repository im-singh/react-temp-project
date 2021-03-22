import React from 'react';

export default function RenderUsers({ otherUsers, selectUser }) {

    return (
        <ol>
            {otherUsers.map(ele => {
                return <li onClick={() => selectUser(ele)}>{ele.username}</li>
            })}
        </ol>
    )

}
