import React from 'react';
import './Dashboard.css';
import ReactDOM from 'react-dom/client';

function patientPrint(value){
    return <li>{value.name}</li>;
}

function Dashboard() {
    const randomPeople = [{id: 1, name: 'Chipi cat'}, {id: 2, name: 'Markiplier'}, {id: 3, name: 'Devin :3'}];
    return(
        <div className='topWrap'>
            <h1>Welcome to your dashboard.</h1>
            <ul>{randomPeople.map((person) => <patientPrint key={person.id} name={person.name}/>)}</ul>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Dashboard />);
export default Dashboard;