import React from 'react'
import Navbar from './Navbar'
import "./Style.css"
const Dashboard = () => {
    let data = JSON.parse(localStorage.getItem("signupdetail"));
    return (
        <div>
            <Navbar></Navbar>
            <div className='dashboard'>
                <h2>Signup Details</h2>
                <div className='tabledata'>
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map((e) => {
                                    return <tr>
                                        <td>{e.name}</td>
                                        <td>{e.email}</td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    )
}

export default Dashboard