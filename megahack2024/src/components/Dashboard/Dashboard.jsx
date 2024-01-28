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
            <div className='all'>
                <box></box>
            </div>
        );
    }
};

export default Dashboard;