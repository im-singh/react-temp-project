import React from 'react'

function SelectedUser({user}) {
    return (
        user.username? <div className="selected-user">
            <h3>User: {user.username}</h3>
        </div>
        :null
    
    )
}

export default SelectedUser
