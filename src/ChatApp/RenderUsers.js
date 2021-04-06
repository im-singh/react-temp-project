import React from 'react';

export default function RenderUsers({ otherUsers, selectUser,selectedUser }) {

    const isActiveUser=(ele)=>{
       return ele.userID===selectedUser.userID?'active':'';
    }

    return (
        <ol>
            {otherUsers.map((ele,idx) => {
                return <li key={idx} className={isActiveUser(ele)} onClick={() => selectUser(ele)}>
                    {ele.username}
                    </li>
            })}
        </ol>
    )

}
