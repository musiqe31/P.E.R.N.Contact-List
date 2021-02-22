import React, { useState } from 'react'
import './style.css'
import axios from 'axios'

export default function User({ userlist }) {
    const [id, setid] = useState("")
    const [oldfirstName, setoldfirstName] = useState("")
    const [firstname, setfirstname] = useState("")
    const [age, setage] = useState("")

    const deleteUser = () => {
        console.log("User ID " + id)
        axios.delete(`http://localhost:4000/users/${id}`)
            .then(res => {
                console.log("USER DELETED!")
            })
    }

    const updateUser = () => {
        console.log("Updating User " + firstname + " and ID " + id)
        axios.put(`http://localhost:4000/users/${id}`, {
            firstName: firstname,
            age: age
        })
            .then(res => {
                console.log("USER UPDATED!!")
            })
    }

    const modals = () => {
        return (
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Update {oldfirstName}?</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <input className="bars" onChange={(e) => setfirstname(e.target.value)} type="text" placeholder="User First Name" />
                            <input className="bars" onChange={(e) => setage(e.target.value)} type="Number" placeholder="User Age" />
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={updateUser}>Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="container">
            {
                userlist.map(e => {
                    return (
                        <div className="usercard" key={e.id}>
                            <p>{e.firstName} - {e.age}</p>
                            <input defaultValue={e.id} hidden />
                            <button className="update" onClick={() => setoldfirstName(e.firstName)} onMouseDown={() => setid(e.id)} data-bs-toggle="modal" data-bs-target="#exampleModal">Update</button>
                            <button className="delete" onMouseDown={() => setid(e.id)} onClick={deleteUser}>Delete</button>
                        </div>
                    )
                })
            }
            {modals()}
        </div>
    )
}
