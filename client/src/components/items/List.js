import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';


function List() {

    const fetchItems = async () => {
        try {
            //const res = await axios.get("http://localhost:5000/items");
            const res = await fetch("http://localhost:5000/items");
            //const jsonData = await res.Json();
            console.log(res);
            
        } catch (err) {
            console.error(err.message);
        }
    };
    useEffect(() => {
		// Trigger the API Call
		fetchItems();
	});

  return (
    <div className="container pt-3">
        <div className="card pt-3">
            <div className="card-title">
                <div className="row">
                    <div className="col-10">
                        <h1 className="text-center text-info">Lits Of All Items</h1>
                    </div>
                    <div className="col">
                        <Link to="/create" className="btn btn-success">Create New</Link>
                        
                    </div>
                </div>
                
                
            </div>
            <div className="card-body">
                <div className="card" style={{width: "18rem"}}>
                    <img src="..." className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                    <div className="card-footer">
                        <div className="btn-group" role="group" aria-label="Basic example">
                            <Link to="/update" className="btn btn-warning">Edit</Link>
                            <button type="button" className="btn btn-danger">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default List