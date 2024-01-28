import React from 'react';
import LoginForm from './components/LoginForm/LoginForm';
import Home from './components/Home/Home';
import { Route, Routes } from "react-router-dom";
import Admin from './components/Admin/Admin';


function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </div>
  );
}

export default App;
