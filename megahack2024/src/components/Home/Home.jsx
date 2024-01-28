import React from 'react';
import './Home.css';
import {useNavigate} from "react-router-dom";

function Home(){

    const navigate = useNavigate();

    function handleClick (){
        navigate("/List")
    }
    function adminClick (){
        navigate("/admin")
    }
    return (
        <div className='wrapper'>
            <form action="">
                <h1>Megahack Home</h1>
                <div className="buttons">
                    <button onClick={(e)=>handleClick()}>Doctor Login</button>
                </div>
                <div className="AdminButton">
                <button onClick={(e)=>adminClick()}>Admin Redirect</button>
                </div>
            </form>
        </div>
    );
};

export default Home;