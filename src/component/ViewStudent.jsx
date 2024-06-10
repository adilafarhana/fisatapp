import React, { useEffect, useState } from 'react'
import NavStudent from './NavStudent'
import axios from 'axios'

const ViewStudent = () => {
    const [data,changeData] = useState([])
    const fetchData = () =>{
        console.log("hello")
        axios.get("https://courseapplogix.onrender.com/getdata").then(
            (response)=>{
                changeData(response.data)
            }
        ).catch(
            (error)=>{
                console.log(error.message)
            alert(error.map)
}
        ).finally()

    }
    useEffect(() =>{fetchData()},[])
    return (

        <div>
            <h1><center>VIEW STUDENT</center></h1>
            <NavStudent />
            <div className="container">
                <div className="row col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <table class="table" border="2">
                        <thead>
                            <tr>
                            <th scope="col">id</th>
                                <th scope="col">firstname</th>
                                <th scope="col">lastname</th>
                                <th scope="col">college</th>
                                <th scope="col">dob</th>
                                <th scope="col">course</th>
                                <th scope="col">mobile</th>
                                <th scope="col">email</th>
                                <th scope="col">address</th>
                                <th scope="col">__v</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map(
                                (value, index) => {
                                   return <tr>
                                        <td>{value._id}</td>
                                        <td>{value.firstname}</td>
                                        <td>{value.lastname}</td>
                                        <td>{value.lastname}</td>
                                        <td>{value.college}</td>
                                        <td>{value.dob}</td>
                                        <td>{value.course}</td>
                                        <td>{value.mobile}</td>
                                        <td>{value.email}</td>
                                        <td>{value.address}</td>


                                    </tr>
                                }
                            )
                            }




                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default ViewStudent