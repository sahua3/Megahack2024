import React from 'react';
import './LoginForm.css';
import { FaPills } from "react-icons/fa6";
import { FaUser, FaLock } from "react-icons/fa";
import {Link} from "react-router-dom";

const LoginForm = () => {
    return (
        <div className='wrapper'>
            <form action="">
                <h1>Login</h1>
                <div className="input-box">
                    <input type="text" placeholder='Username' required />
                    <FaUser className='icon' />
                    
                </div>
                <div className="input-box">
                    <input type="password" placeholder='Password' required />
                    <FaLock className='icon' />
                </div>

                <div className="remember-forgot">
                    <label><input type="checkbox" />Remember me pwease  </label>
                    <a href="#">Forgot password?</a>
                </div>
                <button type="submit">Login</button>

                    <div className="register-link">
                        <p> Don't have an account? :3 <a href="#">
                            <Button>
                                <Link to="megahack2024/src/components/Admin/Admin.jsx">Register</Link>
                            </Button>
                        </a></p>
                </div>
            </form>
        </div>
    );
};

export default LoginForm;