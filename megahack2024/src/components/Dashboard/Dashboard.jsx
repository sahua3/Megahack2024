import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import './Dashboard.css';

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
            <div className='wrapper'>
                <h1>Welcome to your Dashboard, megahacker!</h1>
            </div>
        );
    }
};

export default Dashboard;