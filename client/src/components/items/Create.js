import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";

function Create() {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const navigete = useNavigate();

    const handleForme = async e => {
        e.preventDefault();
        try {
            const body = {
                "title": title,
                "description": description,
                "image": image
            }
            const res = await axios.post("http://localhost:5000/items", body);
            if(res.status == 200){
                //alert("item created successfully");
                navigete("/");
            }
            
            
        } catch (err) {
            console.error(err.message)
        }
    }


  return (
    <div className='container pt-5 p-3'>
        <div className="card p-3" >
            <div className="card-title">
                <h1 className="text-center text-info">
                    Add new Item
                </h1>
            </div>
            <div className="card-body">
            <form onSubmit={handleForme}>
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Item Title</label>
                <input type="text"
                 className="form-control"
                 value={title}
                 onChange={e => setTitle(e.target.value)}
                  id="exampleInputEmail1"
                   aria-describedby="emailHelp"
                    />
                
            </div>
            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Item description</label>
                <textarea
                 className="form-control"
                 value={description}
                 onChange={e => setDescription(e.target.value)}
                 name="" 
                 id="" 
                 cols="30" 
                 rows="5"
                 ></textarea>
            </div>
            <div className="mb-3">
            <label for="file" className="form-label">Item Image</label>
                <input 
                type="text" 
                value={image}
                onChange={e => setImage(e.target.value)}
                name="" 
                id="fole" 
                className="form-control" />
            </div>
            <div className="mb-3 d-flex justify-content-center aligne-items-center">
                <button type="submit" className="btn  btn-success">Submit</button>
            </div>
            
        </form>
            </div>
        </div>
        
    </div>
  )
}

export default Create