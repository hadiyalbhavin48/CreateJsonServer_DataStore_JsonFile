// JsonEdit.js

import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

const JsonEdit = () => {

    const { jsonid } = useParams();

    const [jsonDetails, setJsonDetails] = useState({});

    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [Active, setActive] = useState(true);
    const [validation, valchange] = useState(false);

    const handlesubmit = (e) => {
        e.preventDefault();
        // console.log({ Id, Name, Email, Phone, Active }, "Create");
        const jsonData = { id, name, email, phone, Active };

        fetch("http://localhost:3000/jsonData/" + jsonid, {  // header pass parameter (id)
            method: "PUT",
            headers: {
                // "content-type" : "application/json"
                "content-type": "application/json"
            },
            body: JSON.stringify(jsonData)
        }).then((res) => {
            alert("Saved successfully.")
        }).catch((err) => {
            console.log(err.message);
        })
    }

    useEffect(() => {
        fetch("http://localhost:3000/jsonData/" + jsonid).then((res) => {
            return res.json();
        }).then((resp) => {
            setId(resp.id);
            setName(resp.name);
            setEmail(resp.email);
            setPhone(resp.phone);
            setActive(resp.Active);
        }).catch((err) => {
            console.log(err.message, "details Error");
        })
    }, [])

    return (
        <div>

            <div className="row">
                <div className="offset-lg-3 col-lg-6">
                    <form className='container' onSubmit={handlesubmit}>
                        <div className="card" style={{ "textAlign": "left" }}>
                            <div className="card-title text-center">
                                <h2>Json Data Edit</h2>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>ID</label>
                                            <input value={id} disabled="disabled" className="form-control"></input>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Name</label>
                                            <input
                                                required
                                                value={name}
                                                onMouseDown={e => valchange(true)}
                                                onChange={e => setName(e.target.value)}
                                                className="form-control" />
                                            {name.length == 0 && validation && <span className="text-danger">Enter the name</span>}
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Email</label>
                                            <input
                                                value={email}
                                                onChange={e => setEmail(e.target.value)}
                                                className="form-control" />
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Phone</label>
                                            <input
                                                value={phone}
                                                onChange={e => setPhone(e.target.value)}
                                                className="form-control" />
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-check">
                                            <input type="checkbox"
                                                value={Active}
                                                onChange={e => setActive(e.target.checked)}
                                                className="form-check-input" />
                                            <label className="form-check-label">Is Active</label>

                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <button className="btn btn-success" type="submit">Save</button>
                                            <Link to="/" className="btn btn-danger">Back</Link>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default JsonEdit