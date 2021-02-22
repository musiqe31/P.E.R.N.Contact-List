import React, { useState } from 'react'
import UserList from '../UserList/'
import './style.css'
import axios from 'axios'

export default function InputBar() {

    const [firstName, setfirstName] = useState("")
    const [age, setage] = useState("")


    const addUser = () => {
        console.log("User name " + firstName + " and age " + age)
        axios.post('http://localhost:4000/users', {
            firstName: firstName,
            age: age

        })
            .then(res => {
                console.log("USER ADDED")
            })
    }




    return (
        <div className="container">
            <div className="bar">
                <input className="bars" onChange={(e) => setfirstName(e.target.value)} type="text" placeholder="User First Name" />
                <input className="bars" onChange={(e) => setage(e.target.value)} type="Number" placeholder="User Age" />
                <button className="adduser" onClick={addUser}>Add User</button>
            </div>
            <UserList />
        </div>
    )
}
