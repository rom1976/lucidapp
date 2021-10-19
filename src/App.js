import React from 'react';
import './Styles/Login.css';
import Login from './Components/Login';
import './Styles/NewProperty.css';
//import './styles/sidenav.css';
//import MenuRoutes from './MenuRoutes';
//import { BrowserRouter } from 'react-router-dom';
import Home from './Components/Home';
import  './Styles/Sidenavnew.css';
import { useState } from 'react';
import { BrowserRouter } from "react-router-dom";
//import Home from './Home';



function App() {
 
  const [status,setStatus] = useState(false);

  const LoginStatus = (props) =>{
      setStatus(props)
  }
  
  return (
    <div>   
       
      <Login LoginStatus = {LoginStatus}/>

  
    </div>
  );
}

export default App;