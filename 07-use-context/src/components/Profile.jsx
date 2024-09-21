import React from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    const { user } = React.useContext(UserContext);
    if (!user) return <div>Please login</div>
    return <div>Welcome {user.username}</div>
}

export default Profile