import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo_azu.jpg';
 
const NavbarAzu = () => {
  return (
    <nav className="bg-white h-30 shadow-sm px-10 py-4 flex justify-between items-center border-b border-gray-200">
      
      <div className="flex items-center space-x-15">
      <a href='https://www.cloudthat.com/'>
        <img src={logo} alt="Logo" className="h-9 mb-2 w-auto" />
        </a>
        <div className="hidden md:flex space-x-8 text-lg font-semibold">
          <Link
            to="/"
            className="text-gray-800 hover:text-blue-600 hover:underline transition"
          >
            Cloud Home
          </Link>
          <Link
            to="/azurecourses"
            className="text-gray-800 hover:text-blue-600 hover:underline transition"
          >
            Learning Paths
          </Link>
        </div>
      </div>
 
     
      <div>
        <a href='https://ap-south-1iqxuzzcbn.auth.ap-south-1.amazoncognito.com/login?client_id=6877ph5ofmlnpo8tetot0bguut&response_type=code&scope=email+openid+phone&redirect_uri=http%3A%2F%2Flocalhost%3A5173%2F'
          className="text-lg font-semibold bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
        >
          Login
        </a>
      </div>
    </nav>
  );
};
 
export default NavbarAzu;