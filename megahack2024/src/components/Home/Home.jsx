import React from 'react';
import './Home.css';
import {useNavigate} from "react-router-dom";

function Home(){

    const navigate = useNavigate();

    function handleClick (){
        navigate("/login")
    }
    return (
        <div className='wrapper'>
            <form action="">
                <h1>Home Screen</h1>
                <div className="buttons">
                    <button onClick={(e)=>handleClick()}>Login</button>
                </div>
            </form>
        </div>
    );
};

export default Home;