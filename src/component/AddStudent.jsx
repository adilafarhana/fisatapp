import React, { useState } from 'react'
import NavStudent from './NavStudent'

const AddStudent = () => {
    const[data,changeData]=useState(
        {
        "_id":"",
        "firstname": "",
        "lastname": "",
        "college": "",
        "dob": "",
        "course": "",
        "mobile": "",
        "email": "",
        "address": "",
        "__v": ""
        }
    )
    const inputHandler=(event)=>{
        changeData({...data,[event.target.name]:event.target.value})
    }
    const readValue =() =>(
        console.log(data)
    )
  return (
    <div>
        <NavStudent/>
         <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">id</label>
                            <input type="text" className="form-control" name='id' value={data.id} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">firstname</label>
                            <input type="text" className="form-control"  name='firstname' value={data.id} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">lastname</label>
                            <input type="text" className="form-control" name='lastname' value={data.lastname} onChange={inputHandler}  />
                        </div>
                       
                        <div className="col col-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">college</label>
                            <input type="date" className="form-control" name='college' value={data.college} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">dob</label>
                            <input type="text" className="form-control" name='dob' value={data.dob} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">course</label>
                            <input type="text" className="form-control" name='course' value={data.course} onChange={inputHandler}/>
                           
                        </div>
                        <div className="col col-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">mobile</label>
                            <input type="text" className="form-control" name='mobile' value={data.mobile} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">email</label>
                            <input type="text" className="form-control"name='email' value={data.email} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">address</label>
                            <input type="text" className="form-control"name='address' value={data.address} onChange={inputHandler}/>
                           
                            
                        </div>
                        <div className="col col-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">__v</label>
                            <input type="text" className="form-control"name='__v' value={data.__v} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button className="btn btn-primary " onClick={readValue}>REGISTER</button>
        
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
  )
}

export default AddStudent