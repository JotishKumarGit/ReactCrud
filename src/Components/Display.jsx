import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Display() {

    const [data, setData] = useState([]);
    const [tabledark,setTableDark] = useState('');


    // This is for select the data
    function getData() {
        axios.get('https://665325b6813d78e6d6d75b71.mockapi.io/Crud-operation', {
            timeout: 1000, // 10 seconds
        }).then(response => {
            console.log(response);
            setData(response.data);
        }).catch(error => {
            console.error(error);
        });
    }
    // Make function for deleting the data
    function handleDelete(id) {
        axios.delete(`https://665325b6813d78e6d6d75b71.mockapi.io/Crud-operation/${id}`
        ).then(() => {
            getData();
        })
    }

    // This is for update btn 
    const setToLocalStorage = (id, name, email) => {
        localStorage.setItem("id", id);
        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
    }

    // 
    useEffect(() => {
        getData();
    }, []);


    return (
        <div>
            <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" onClick={()=>{
                    if(tabledark === 'table-dark') setTableDark("");
                    else setTableDark("table-dark");
                }} />
            </div>
            <div className="d-flex justify-content-between align-items-center">
                <h2 style={{ alignItems: "center" }}>Read Products</h2>
                <Link to="/"><button className='btn btn-secondary'>Create</button></Link>
            </div>

            <table className={`table ${tabledark}`}>
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Update</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                {/* I am writing hare java script logic inside this curly braces */}
                {

                    data.map((eachData) => {
                        return (
                            <>
                                <tbody>
                                    <tr>
                                        <th scope="row">{eachData.id}</th>
                                        <td>{eachData.name}</td>
                                        <td>{eachData.email}</td>
                                        <td><Link to="/update"><button className='btn-success' onClick={() => setToLocalStorage(eachData.id, eachData.name, eachData.email)} >Edit</button></Link></td>
                                        <td><button className='btn-danger' onClick={() => handleDelete(eachData.id)} >Delete</button></td>
                                    </tr>
                                </tbody>
                            </>
                        )
                    })
                }
            </table>
        </div >
    )
}

export default Display;