import React from "react";
import axios from "axios";
import { useState,useEffect } from "react";
import { Card,Button,InputGroup,FormControl} from "react-bootstrap";
import { BrowserRouter } from "react-router-dom";
import Home from "./Home";

const Login = (props) => {
    const [userID, setUserId] =useState('');
    const [password, setPassword] = useState("");
    const [userData, setUserData] = useState([]);
    const [loggedIn, setLoggedIn] = useState(false);

const LoginHandler =(dashprops)=>{
    console.log(userID, password);
axios
.post('https://dev.lucidits.com/LUCIDLicenseManagementAPI/V1/LUCIDUserLogin',
  {},
  {
    auth: {
      username: userID,
      password: password,
    },
  }
)
.then((response) => {
   
    console.log((response.data));
    console.log((response.data.response.lucidApiToken));
    setUserData(response.data);
    setLoggedIn(true);
    props.LoginStatus(true);
    
 }).then((error)=>console.log(error))
 
} 
    

const logoutHandler = () =>{
    setLoggedIn(false);
    props.LoginStatus(false);

}

         if (userData.message==="Success"){
           

        return (
               <>
                  
                   <BrowserRouter>
                      <Home LogOut = {logoutHandler} lucidData={userData} />
                   </BrowserRouter>
     
                </>
                )}
                else{

    return(
        <>
           <div className="container">
         
               <div className="row pt-5">
               <h1> Lucid Demo </h1>
                   <div className="col-md-4"></div>
                   <div className="col-md-4">
                      
                      <Card className= "login">
                      <Card.Body>
                        <Card.Title>Login</Card.Title>
                        <InputGroup size="sm" className="mb-3">
                        <InputGroup.Text id="inputGroup-sizing-sm">User ID</InputGroup.Text>
                        <FormControl aria-label="User ID" aria-describedby="inputGroup-sizing-sm"
                        onChange={(e)=> setUserId(e.target.value)}
                        />
                        </InputGroup>
                        <InputGroup size="sm" className="mb-3">
                        <InputGroup.Text id="inputGroup-sizing-sm">Password</InputGroup.Text>
                        <FormControl aria-label="password" aria-describedby="inputGroup-sizing-sm" 
                        onChange={(e)=> setPassword(e.target.value)}/>
                        </InputGroup>
                        <Button variant="primary" onClick={LoginHandler}>Login </Button>
                      </Card.Body>
                      </Card>
                   </div>
                   <div className="col-md-4"></div>

               </div>
          
           
           </div>
        </>
    )}
}

export default Login;