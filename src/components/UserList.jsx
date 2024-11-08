import React from 'react'
import { useNavigate } from 'react-router-dom'

const UserList = () => {
    const navigate = useNavigate()

    const users = [
        { id: 1, name: "Ram" },
        { id: 2, name: "Shyam" },
        { id: 3, name: "Hari" },
        { id: 4, name: "Hari1" },
    ]

    const handleUser = (userId, userName) => {
        navigate(`/user/${userId}/${userName}`)
    }

    return (
        <div className='container mt-5'>
            <h4>User List</h4>
            <ul className='list-unstyled'>
                {users.map((user) => (
                    <li onClick={() => handleUser(user.id, user.name)} style={{cursor:"pointer"}}>{user.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default UserList