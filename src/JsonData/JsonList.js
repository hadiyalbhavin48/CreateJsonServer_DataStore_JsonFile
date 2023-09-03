// JsonList.js

import React, { useEffect, useState } from 'react'
import JsonCreate from './JsonCreate';
import { Link, useNavigate } from 'react-router-dom'

const JsonList = () => {

    const [data, setData] = useState([]);   // responce data store in state
    const navigat = useNavigate();
    // console.log(data, "data");

    // Edit

    const LoadEdit = (id) => {
        navigat("/json/edit/" + id);
    }

    // Details

    const LoadDetails = (id) => {
        navigat("/json/details/" + id);
    }

    // Delete
    const LoadRemove = (id) => {
        if (window.confirm("Do you want to remove?")) {
            fetch("http://localhost:3000/jsonData/" + id, {  // header pass parameter (id)
                method: "DELETE",
            }).then((res) => {
                alert("Removed successfully.")
                window.location.reload();   // page reload
            }).catch((err) => {
                console.log(err.message);
            })
        }
    }



    useEffect(() => {
        fetch("http://localhost:3000/jsonData").then((res) => {  // res -> result
            return res.json();
        }).then((resp) => {
            // console.log(resp, "response");
            setData(resp)
        }).catch((err) => {
            console.log(err.message, "error");
        })
    }, [])

    return (
        <div className="container">
            <div className="card">
                <div className="card-title text-center">
                    <h2>Json Data Listing</h2>
                </div>
                <div className="card-body">
                    <div className="divbtn">
                        <Link to="/json/create" className="btn btn-success">Add New (+)</Link>
                    </div>
                    <table className="table table-bordered">
                        <thead className="bg-dark text-white">
                            <tr>
                                <td>ID</td>
                                <td>Name</td>
                                <td>Email</td>
                                <td>Phone</td>
                                <td>Action</td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data && data.map((curElm) => (
                                    <tr key={curElm.id}>
                                        {console.log(curElm, "Current")}
                                        <td>{curElm.id}</td>
                                        <td>{curElm.name}</td>
                                        <td>{curElm.email}</td>
                                        <td>{curElm.phone}</td>
                                        <td>
                                            <a onClick={() => { LoadEdit(curElm.id) }} className="btn btn-success">Edit</a>
                                            <a onClick={() => { LoadRemove(curElm.id) }} className="btn btn-danger">Remove</a>
                                            <a onClick={() => { LoadDetails(curElm.id) }} className="btn btn-primary">Details</a>
                                        </td>
                                    </tr>
                                ))
                            }

                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    )
}

export default JsonList