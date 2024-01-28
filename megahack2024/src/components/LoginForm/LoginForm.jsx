import React from 'react';
import './LoginForm.css';
import { FaPills } from "react-icons/fa6";

const LoginForm = () => {
    return (
        <div className='wrapper'>
            <form action="">
                <h1>Login <FaPills /> </h1>
                <div className="input-box">
                    <input type="text" placeholder='Username' required />
                </div>
                <div className="input-box">
                    <input type="password" placeholder='Password' required />
                </div>

                <div className="remember-forgot">
                    <label><input type="checkbox" />Remember me pwease </label>
                    <a href="#">Forgot password?</a>
                    <button type="submit">Login</button>

                    <div className="register-link">
                        <p> Don't have an account? :3 <a href="#">Register</a></p>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default LoginForm;