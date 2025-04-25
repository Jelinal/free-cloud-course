import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import SidebarAzu from './Components/Azure/SidebarAzu.jsx'
import AzureHome from './Components/Azure/AzurePage.jsx'
import AzureLandingPage from './Components/Azure/AzureHome.jsx'
import AwsHome from './Components/AWS/AwsHome.jsx'
import Landingpage from './Components/Landingpage.jsx'
import AwsIntro from './Components/AWS/AwsIntro.jsx'
import Login from './Components/Login/Login.jsx'
import LoginAws from './Components/Login/LoginAws.jsx'
import SignUpAws from './Components/Login/SignUpAws.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
