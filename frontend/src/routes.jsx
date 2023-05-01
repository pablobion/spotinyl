import React from "react";
import { Routes, Route } from "react-router-dom";


import Home from './pages/home/index.jsx'
import App from './pages/teste/App.jsx'


const RoutesComponent = () => {
    return (
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/teste" element={<App/>} />
        </Routes>
      );
}

export default RoutesComponent;