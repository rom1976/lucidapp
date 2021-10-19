import React from "react";
import { Link } from "react-router-dom"
import { useState,createContext } from "react";
import {browserName, deviceType} from "react-device-detect";

import Routes from "./Routes";

const Home = (props) =>{
      //const deviceName = deviceDetect;
      const [style, setStyle] = useState({});
      const [styleMain, setStyleMain] = useState({});
      const [openButton, setOpenButton] = useState({fontSize:'30px',cursor:'pointer', marginLeft:'25px'});
      const [date, setDate] = useState([]); 
      const {lucidApiToken, lucidLogoUrl,moduleName,organizationName,serverDate,userImageUrl,userName,userType} = props.lucidData.response;
      const [propsData,setPropsData] = useState(props.lucidData.response);
      
      console.log(Object.entries(props.lucidData));
      let updateDate= new Date().toLocaleString();
      console.log(browserName);
     console.log(deviceType);
      const HomeContext = createContext(props.lucidData.response)
      //const  = useContext(userD);
     // const getDate = useCallback(() => {
     //   let updateDate= new Date().toLocaleString();
     //  setDate(updateDate);
     // 
     // }, [setDate,updateDate])
     // 
     // setInterval(getDate,1000); 

     


      const openNav = () => {
          setStyle({
            width: "250px"
          })
          setStyleMain({
            marginLeft: "250px"
          })

          setOpenButton({opacity:0})
      }

      const closeNav = () =>{
        setStyle({
            width: "0px"
          })
          setStyleMain({
            marginLeft: "0px"
          })
          setOpenButton({fontSize:'30px',cursor:'pointer',opacity:1})
      }

    return(
         <>
             <div className="sidenav" style={style}>
               <div className="closebtn" onClick={closeNav}>&times;</div>
               <div className='center'> <span style={{color:'white'}}>{userName}</span></div> 
               <div className='center'> {date} </div> 
               <Link to='/Dashboard'> Dashboard </Link>
               <div className='center' onClick={props.LogOut}>Log Out</div>
             </div>
              
             <div className="row">
             
              <div className="col-sm-10l-5 main" style={styleMain}>
              <span style={openButton} onClick = {openNav} >&#9776;</span>
              
                <img src={lucidLogoUrl} style={{marginLeft:'20px'}} alt='Lucid Logo'/>

                <span> {organizationName}  {moduleName}</span>
              </div>
             </div>
             <div>
               <p>  
              {serverDate}
              {userImageUrl}
          
              {userType}
              </p>
             </div>
             <div className="main" style={styleMain}>
               
              <Routes lucidAPIToken = {lucidApiToken}/>
          
            </div>
         </>
    )
}

export default Home;