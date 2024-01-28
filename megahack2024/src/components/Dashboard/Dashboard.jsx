import React from 'react';
import './Dashboard.css';
import { Link } from "react-router-dom";

function Dashboard() {
    return(
        <><div className='topWrap'>
            <form action="">
                <div className="dashboardWrap">
                    <h1>Welcome to your dashboard.</h1>
                    <br />
                </div>
            <div className="peopleList">
                <input type="text" placeholder='Search for patients'/>
                <h2>List of patients</h2>
                <p> chipi cat </p> 
                <Link to="/login">edit</Link>
                <p> Markiplier </p> <a href="#"> edit</a>
                <p> Devin :3 </p> <a href="#"> edit</a>
            </div>
            </form>
        </div></>
    );
}

export default Dashboard;