import React from 'react'

function Update() {
  return (
    <div className='container pt-5 p-3'>
        <div className="card p-3" >
            <div className="card-title">
                <h1 className="text-center text-info">
                     Update Item
                </h1>
            </div>
            <div className="card-body">
            <form>
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Item Title</label>
                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                
            </div>
            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Item description</label>
                <textarea className="form-control" name="" id="" cols="30" rows="5"></textarea>
            </div>
            <div className="mb-3">
            <label for="file" className="form-label">Item Image</label>
                <input type="file" name="" id="fole" className="form-control" />
            </div>
            <div className="mb-3 d-flex justify-content-center aligne-items-center">
                <button type="submit" className="btn  btn-success">Update</button>
            </div>
            
        </form>
            </div>
        </div>
        
    </div>
  )
}

export default Update