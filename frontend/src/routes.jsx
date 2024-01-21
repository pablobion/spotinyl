import React from "react";
import { Routes, Route } from "react-router-dom";


import Home from './pages/home/index.jsx'
import App from './pages/login/App.jsx'


const RoutesComponent = () => {
    return (
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/login" element={<App/>} />
        </Routes>
      );
}

export default RoutesComponent;