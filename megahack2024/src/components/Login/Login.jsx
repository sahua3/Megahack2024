import React from 'react';
import { useState } from 'react';
import './Login.css';
import { FaUser, FaLock } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import ErrorPopup from '../ErrorPopup/ErrorPopup';


const Login = () => {
    const navigate = useNavigate();
    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");
    const [showErrorPopup, setShowErrorPopup] = useState(false);
    const [authenticated, setauthenticated] = useState(localStorage.getItem ("authenticated")|| false);
    const users = [{ username: "r", password: "r"}];
    const handleSubmit = (e) => {
        e.preventDefault();
        const account = users.find((user) => user.username === username);
        if (account && account.password === password) {
            localStorage.setItem("authenticated", true);
            navigate("/dashboard"); 
        } else {
            setShowErrorPopup(true);
        }        
    };

    const closeErrorPopup = () => {
        setShowErrorPopup(false);
    };

    return (
        <div className='wrapper'>
            <form action="">
                <h1>Login</h1>
                <div className="input-box">
                    <input type="text" placeholder='Username' value={username} onChange={(e) => setusername(e.target.value)} />
                    <FaUser className='icon' />
                </div>

                <div className="input-box">
                    <input type="password" placeholder='Password' value={password} onChange={(e) => setpassword(e.target.value)} />
                    <FaLock className='icon' />
                </div>

                <div className="remember-forgot">
                    <label><input type="checkbox" />Remember me</label>
                    <a href="#">Forgot password?</a>
                </div>
                
                <button type="submit" onClick={handleSubmit}>Login</button>
            </form>

            {showErrorPopup && (
                <ErrorPopup message='Invalid username or password.' onClose={closeErrorPopup} />
            )}
            
        </div>
    );
}

export default Login;