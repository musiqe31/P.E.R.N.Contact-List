import React, { useEffect, useState } from 'react'
import User from '../User/'
import axios from 'axios'

export default function UserList() {
    const [users, setusers] = useState([])

    useEffect(() => {
        axios.get('http://localhost:4000/users')
            .then(res => {
                setusers(res.data)
            })
    }, [])

    return (
        <div>
            <User userlist={users} />
        </div>
    )
}
