import React, {  useState } from 'react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Update() {

    const [id, setId] = useState(0);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    useEffect(() => {
        setId(localStorage.getItem("id"));
        setName(localStorage.getItem("name"));
        setEmail(localStorage.getItem("email"));
    }, [])

    // This is for redirecting 
    const navigation = useNavigate();

    // Handle Update
    const handleUpdate = (e) => {
        e.preventDefault();
        console.log("id...", id);
        axios.put(`https://665325b6813d78e6d6d75b71.mockapi.io/Crud-operation/${id}`,
            {
                name: name,
                email: email,
            }).then(()=>{
                navigation("/read");
            })
    }

    return (
        <div>
            <h1>Update Products</h1>
            <form>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input type="email" className="form-control" aria-describedby="emailHelp" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary" onClick={handleUpdate} >Submit</button>
               <Link to="/read"><button type="submit" className="btn btn-primary mx-4">Back</button></Link>
            </form>
        </div>
    )
}

export default Update;