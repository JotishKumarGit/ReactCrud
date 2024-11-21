// This is create 
import axios from 'axios';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Create() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    // This is for redirecting 
    const history = useNavigate();

    const header = { "Access-Control-Allow-Origin": "*" };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("hi");
        axios.post("https://665325b6813d78e6d6d75b71.mockapi.io/Crud-operation", {
            name: name,
            email: email,
            header,
        }).then(() => {
            history("/read");
        })
    }

    return (
        <>
            <div className="d-flex justify-content-between align-items-center">
                <h1>Add Products</h1>
               <Link to="/read"> <button className='btn btn-primary'>Show Data</button></Link>
            </div>
            <form>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input type="email" className="form-control" aria-describedby="emailHelp" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
            </form>
        </>
    )
}

export default Create;


