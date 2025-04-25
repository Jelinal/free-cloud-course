import React from 'react';
import { Link } from 'react-router-dom'; 
import LoginAws from '../Login/LoginAws';
import SignUpAws from '../Login/SignUpAws';
import logo from '../../assets/logo_aws.png'
import { useAuth } from 'react-oidc-context';


const awsCognitoConfig = {
  authority: "https://cognito-idp.ap-south-1.amazonaws.com/ap-south-1_IQxuZZcBN",
  client_id: "6877ph5ofmlnpo8tetot0bguut",
  redirect_uri: "http://localhost:5173/awshome/",
  response_type: "code",
  scope: "openid email phone",  
};

const NavbarAWS = () => {

  const auth = useAuth();
  
    const signOutRedirect = () => {
      const clientId = "6877ph5ofmlnpo8tetot0bguut";
      const logoutUri = "http://localhost:5173/"; 
      const cognitoDomain = "https://ap-south-1iqxuzzcbn.auth.ap-south-1.amazoncognito.com";
      window.location.href = `${cognitoDomain}/logout?client_id=${clientId}&logout_uri=${encodeURIComponent(logoutUri)}`;
    };

  return (
    <nav className="bg-black shadow-md px-6 py-4 flex justify-between items-center transition-all duration-500 ease-in-out">
      {/* Logo */}
      <div className="flex items-center py-2">
        <a href='https://www.cloudthat.com/'>
      <img src={logo} alt="Logo" className="h-10 w-auto " />
      </a>
      </div>

      {/* Nav Links */}
      <ul className="hidden md:flex font-AmazonEmber font-bold space-x-18 pr-20   text-white">
        <li><Link to='/' className="hover:text-yellow-600">Cloud Home</Link></li>
        <li><Link to='/awshome' className="hover:text-yellow-600">AWS Home</Link></li>
        <li><span className="hover:text-yellow-600">AWS Courses</span></li>
      </ul>

      {/* Login/Signup Button */} 
      {/* <div>
        <a href='https://ap-south-1iqxuzzcbn.auth.ap-south-1.amazoncognito.com/login?client_id=6877ph5ofmlnpo8tetot0bguut&response_type=code&scope=email+openid+phone&redirect_uri=http%3A%2F%2Flocalhost%3A5173%2F'
          className="bg-yellow-600 text-black font-bold px-4 py-2 rounded-md hover:bg-yellow-700 transition"
        >
          Login / Signup
        </a>
      </div> */}
    </nav>
  );
};

export default NavbarAWS;

