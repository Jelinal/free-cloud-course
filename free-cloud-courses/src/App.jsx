import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginAws from './Components/Login/LoginAws';
import SignUpAws from './Components/Login/SignUpAws';
import AzureHome from './Components/Azure/AzureHome';
import AwsHome from './Components/AWS/AwsHome';
import Landingpage from './Components/Landingpage';


function App() {
  return (
    <Router> {/* Wrap everything in Router */}
      <Routes>
      <Route path="/" element={<Landingpage />} />
        <Route path="/signupaws" element={<SignUpAws />} />
        <Route path="/loginaws" element={<LoginAws />} /> 
        <Route path="/awshome" element={<AwsHome />} /> 
        <Route path="/azurehome" element={<AzureHome />} /> 
      </Routes>
    </Router>
  );
}

export default App;
