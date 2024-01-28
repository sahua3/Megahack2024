import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import './Dashboard.css';
import { Box } from "@mui/material";
import { Link } from "react-router-dom";

const Dashboard = () => {
    const navigate = useNavigate();
    const [authenticated, setauthenticated] = useState(null);
    useEffect(() => {
        const loggedInUser = localStorage.getItem("authenticated");
        if (loggedInUser === "true") {
            setauthenticated(true);
        }
    }, []);

    if (authenticated === false) {
        navigate("/")
    } else {
        return (
            <div className='dashboard'>
                <Box sx={{
                    backgroundColor: '#d3d3d3',
                    borderRadius: '40px',
                    height: '120px',
                    width: '1850px',
                    right: 40,
                    bottom: 30,
                    position: 'relative',
                    textAlign: 'center',
                    textAnchor: 'true'
                }}
                ><h1>Welcome to your dashboard, Dr. Megahacker.</h1></Box>
                <Box sx={{
                    backgroundColor: 'white',
                    width: '1850px',
                    height: '300px',
                    right: 40,
                    bottom: 70,
                    position: 'relative',

                }}> </Box>
                <Box sx={{
                    backgroundColor: '#d3d3d3',
                    height: '700px',
                    bottom: 340,
                    position: 'relative',
                }}><Box sx={{
                    backgroundColor: '#3b3b3b',
                    color: 'white',
                    height: '65px',
                    paddingTop: '15px',
                    paddingLeft: '20px',
                    fontSize: '25px',
                    textAlign: 'left'
                }}>Patients</Box>
                <Box sx={{
                    textAlign: 'left',
                    color: 'white',
                    paddingLeft: '20px',
                    paddingTop: '15px',
                    paddingBottom: '15px',
                    fontSize: '20px',
                }}><Link to="/patientinfo">John Doe</Link></Box><Box sx={{
                    textAlign: 'left',
                    color: 'white',
                    paddingLeft: '20px',
                    paddingTop: '15px',
                    paddingBottom: '15px',
                    fontSize: '20px',
                    backgroundColor: '#e0e0e0'
                }}><a href="#">Jane Smith</a></Box> </Box>
            </div>
        );
    }
};

export default Dashboard;