import React from 'react';
import { Link } from 'react-router-dom'; 
import LoginAws from '../Login/LoginAws';
import SignUpAws from '../Login/SignUpAws';
import logo from '../../assets/logo_aws.png'

const NavbarAWS = () => {
  return (
    <nav className="bg-black shadow-md px-6 py-4 flex justify-between items-center transition-all duration-500 ease-in-out">
      {/* Logo */}
      <div className="flex items-center pl-5">
      <img src={logo} alt="Logo" className="h-20 w-auto mr-2" />
      </div>

      {/* Nav Links */}
      <ul className="hidden md:flex font-AmazonEmber font-bold space-x-18 pr-200   text-white">
        <li><Link to='/' className="hover:text-yellow-600">Cloud Home</Link></li>
        <li><span className="hover:text-yellow-600">AWS Home</span></li>
        <li><span className="hover:text-yellow-600">AWS Courses</span></li>
      </ul>

      {/* Login/Signup Button */}
      <div>
        <Link
        to='/signupaws'
          className="bg-yellow-600 text-black font-bold px-4 py-2 rounded-md hover:bg-yellow-700 transition"
        >
          Login / Signup
        </Link>
      </div>
    </nav>
  );
};

export default NavbarAWS;

