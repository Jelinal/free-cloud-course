import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginAws from './Components/Login/LoginAws';
import SignUpAws from './Components/Login/SignUpAws';
import AzureHome from './Components/Azure/AzureHome';
import AwsHome from './Components/AWS/AwsHome';
import Landingpage from './Components/Landingpage';
import AwsRole from './Components/AWS/AwsRole';
import AwsIntro from './Components/AWS/AwsIntro';
import CallbackHandler from './Auth/CallbackHandler';
import AzureCourses from './Components/Azure/AzureCourses';
import { AuthProvider } from 'react-auth-kit'



function App() {
  return (
    <AuthProvider store={store}>
    <Router> 
      <Routes>
      <Route path="/" element={<Landingpage />} />
        <Route path="/signupaws" element={<SignUpAws />} />
        <Route path="/loginaws" element={<LoginAws />} /> 
        <Route path="/awshome" element={<AwsHome />} /> 
        <Route path="/azurehome" element={<AzureHome />} /> 

        <Route path="/aws" element={<AwsIntro />} />
        <Route path="/courses/:role" element={<AwsRole />} />
        <Route path="/auth/callback" element={<CallbackHandler />} />
        

        <Route path='/azurecourses' element={<AzureCourses />} />
      </Routes>
    </Router>
    </AuthProvider>
  );
}

export default App;
