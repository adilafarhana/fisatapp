import React, { useState } from 'react'
import NavStudent from './NavStudent'
import axios from 'axios'

const AddStudent = () => {
    const [data, changeData] = useState(
        {
            "firstname": "",
            "lastname": "",
            "college": "",
            "dob": "",
            "course": "",
            "mobile": "",
            "email": "",
            "address": ""
            
        }
    )
    const inputHandler = (event) => {
        changeData({ ...data, [event.target.name]: event.target.value })
    }
    const readValue = () => {
        console.log(data)
        axios.post("https://courseapplogix.onrender.com/addstudents", data).then(
            (response) => {
                console.log(response.data)
                if (response.data.status == "success") {
                    alert("success")

                }
                else {
                    alert("error")
                }


            }

        ).catch()
    }


return (
    <div>
        <h1><center>ADD STUDENT</center></h1>
        

        <NavStudent />
        <marquee>*&nbsp; &nbsp; AddStudent &nbsp; &nbsp;*&nbsp; &nbsp;SearchStudent &nbsp; &nbsp;*&nbsp; &nbsp; ViewStudent&nbsp; &nbsp;* </marquee>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">

                        <div className="col col-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">firstname</label>
                            <input type="text" className="form-control" name='firstname' value={data.firstname} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">lastname</label>
                            <input type="text" className="form-control" name='lastname' value={data.lastname} onChange={inputHandler} />
                        </div>

                        <div className="col col-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">college</label>
                            <input type="text" className="form-control" name='college' value={data.college} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">dob</label>
                            <input type="date" className="form-control" name='dob' value={data.dob} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">course</label>
                            <input type="text" className="form-control" name='course' value={data.course} onChange={inputHandler} />

                        </div>
                        <div className="col col-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">mobile</label>
                            <input type="text" className="form-control" name='mobile' value={data.mobile} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">email</label>
                            <input type="text" className="form-control" name='email' value={data.email} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">address</label>
                            <input type="text" className="form-control" name='address' value={data.address} onChange={inputHandler} />


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