// JsonDetails.js

import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const JsonDetails = () => {

    const { jsonid } = useParams();

    const [jsonDetails, setJsonDetails] = useState({});
    useEffect(() => {
        fetch("http://localhost:3000/jsonData/" + jsonid).then((res) => {   // header pass id
            return res.json();
        }).then((resp) => {
            setJsonDetails(resp);
        }).catch((err) => {
            console.log(err.message, "details Error");
        })
    }, [])
    return (
        <div>
            <div className="container">
                <div className="card row" style={{ "textAlign": "left" }}>
                    <div className="card-title text-center">
                        <h2>Json Details  : </h2>
                        <hr />
                    </div>
                    <div className="card-body"></div>
                    {jsonDetails &&
                        <div>
                            <h2>The Employee name is : <b>{jsonDetails.name}</b>  ({jsonDetails.id})</h2>
                            <hr />
                            <h3>Contact Details : {jsonDetails.phone}</h3>
                            <hr />
                            <h5>Email is : {jsonDetails.email}</h5>
                            <hr />
                            <h5>Phone is : {jsonDetails.phone}</h5>
                            <hr />
                            <Link className="btn btn-danger" to="/">Back to Listing</Link>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default JsonDetails