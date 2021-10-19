import React from 'react';
import axios from "axios";
import {useState, useEffect } from "react";


import Pagination from "react-bootstrap/Pagination";
import { Form,Button,FormGroup} from "react-bootstrap";
import { Link } from "react-router-dom";



const Dashboard = (props) => {


  const [dashboardData,setDashboardData] = useState([]);
  const [message,setMessage] = useState('');
  const [orgData,setOrgData] = useState([]);
  const [searchEntered,setSearchEnetered] = useState('');

    

    useEffect(()=>{
      console.log("Connecting...");
      axios.get('https://dev.lucidits.com/LUCIDLicenseManagementAPI/V1/GetDashBoardDetails',
        { headers: { Authorization: `Bearer ${props.lucidAPIToken}`}},
    )
    .then((response) => {
      console.log(response.data)
      setDashboardData(response.data);
      setMessage(response.data.message)
    })
    .then((Error) => console.log('failed'));
    },[axios]);


    useEffect(()=>{
      axios
           .post(
           "https://dev.lucidits.com/LUCIDLicenseManagementAPI/V1/GetOrganizationList",{ 
            NoOfRowsPerPage: 15,
            CurrentPageNumber: 1,
            SearchBy:{
               OrganizationName: searchEntered
           }},
           {headers: { Authorization: `Bearer ${props.lucidAPIToken}`},
            "Content-Type": "application/json"
            }
           )
          .then((response) => {
           console.log(response.data);
            setOrgData(response.data);
            console.log(orgData);     
      
          }).catch((error)=>{
            console.log(error);
          })
          
      },[setOrgData,searchEntered]);  
     
const Test = () =>{

  axios.post('https://dev.lucidits.com/LUCIDLicenseManagementAPI/V1/CreateOrganization',
  
 { 
  OrganizationDetails:{
      OrganizationName: "LUCID",
      ImageUrl: "wwww/w",
      Address:{
          AddressLine1: "wwww",
          AddressLine2: "wwwww",
          AddressLine3: "123eee",
          AreaCode: 1000123,
          AreaName: "welo",
          CityCode: 111243,
          CityName: "we",
          StateCode: 14,
          CountryCode: 123401,
          ZipCode: "123",
          Landmark: "eee"
      },
      ContactDetails:{
          MobileCountryCode: "91",
          MobileNo: "8938383",
          TelephoneCountryCode: "23",
          TelephoneAreaCode: "12",
          TelephoneNo: "076353",
          EmailId: "LUCID@its.com",
          Website: "lucidpos.com"
      },
      Status: 1
  },
  PropertyDetails:{
      PropertyName: "lucid",
      ShortName: "lucid",
      ImageUrl: " ",
      Address:{
        AddressLine1: "wwww",
        AddressLine2: "wwwww",
        AddressLine3: "123eee",
        AreaCode: 1000123,
          AreaName: "111",
          CityCode: 78,
          CityName: "12bbb",
          StateCode: 95,
          CountryCode: 67,
          ZipCode: "333",
          Landmark: "deee",
          Latitude: 45.89,
          Longitude: 456666.999
      },
      ContactDetails:{
          MobileCountryCode: "23",
          MobileNo: "32",
          TelephoneCountryCode: "23",
          TelephoneAreaCode: "32",
          TelephoneNo: "323",
          EmailId: "323@hhh.com",
          Website: "lucid.com"
      },
      Status: 1,
      RegistrationDetails:[
          {
              RegistrationId: 123,
              RegistrationNumber: "121212",
              Status: 1
          }
      ],
      YearEndSettings:{
          OpeningFinancialMonth: 4,
          StartDayOfTheMonth: 1
      },
      SelectedModules:[
          {
              ModuleCode: "222",
              Features:[2],
              SubModules:[
                  {
                      ModuleCode: "212",
                      Features: [2]
                  }
              ]
          }
      ]
  },
  DefaultUsers:[
      {
          UserId: "yuvi@lucidits.com",
          Password: "123"
      }
  ],
  SystemDetails:{
      ApplicationName:"LUCID License Management",
      ApplicationVersion:"1.0.0.0",
      BrowserName:"Chrome",
      BrowserVersion:"83",
      DeviceId:"2",
      DeviceType:"Desktop",
      IP:"2409:4072:198:c9b1:95a:80d4:a728:36e",
      Mac:"0210D6A869E8",
      OPS:"5.0 7 Safari\/537.36",
      Source:"React App",
      SystemName:"EC2AMAZ-EVPTFRH",
      SystemTimeZoneId:1
  }
},{headers: { Authorization: `Bearer ${props.lucidAPIToken}`},
              "Content-Type": "application/json"
              }

  ).then((response)=>{
      console.log('uploaded the data');
      console.log(response.data)
  }).catch((error)=>{
      console.log(error);
  })
}


   
       if(message==='Success'){
         // props.menus(dashboardData.response);
          console.log(dashboardData.response.menus);
         
           
        return(
      <> 
        
        <div className="container-fluid"> 
            <div className="row">
            <div className='col-sm-1'>  <Button onClick={Test}>Click Me</Button> </div>
           { orgData.length >0 &&
                 <div className="col-sm-10 row-org">
                      
                     <div>
                         Organisations <br/>
                         {
                         dashboardData.response.noOfOrganizations
                        }
                     </div>
                     <div>
                         New Organisation<br/>
                         { 
                         dashboardData.response.newOrganizations
                        }
                     </div>
                     <div>
                         Properties<br/>
                         {
                         dashboardData.response.noOfProperties
                        }
                     </div>
                     <div>
                         New Properties<br/>
                         {
                          dashboardData.response.newProperties
                        }
                     </div>
                 
                 </div>
                  }
                 
                 <div className='col-sm-1'></div>


            </div>
            <div className="row ">
               <div className="col-md-1"> </div>
                <div className="col-md-3">
                <Form>
                <Form.Control onChange ={(e)=>setSearchEnetered(e.target.value)}
                type="text" placeholder="Search by Organization Name" />
                </Form>
                </div>
                <div className="col-md-2">
                <Button onClick={()=>console.log(setSearchEnetered)}>Search</Button>
                </div>
                <div className='col-md-3 button'>
                <Link to='/NewOrganization'>  <button>+ New Organization</button></Link>
                </div>
                <div className="col-md-3"></div>
            </div>
            <div className= 'row'>


                    { orgData.length >0 &&
                       orgData.response.organizationList.map((field, idx)=>{
                  
                        return(
                               <>
                             
                                <div  className='card-org' key={idx}>
                                <div className='act'>{field.statusDisplayName} </div>
                              {field.organizationName}
                              
                              <div> <img src='field.imageUrl' alt='Organization Image'/> {field.city}-{field.state}</div>
                              <div className='card-links'><Link to='/'>Edit</Link> <Link to='/'>View</Link><Link to='/'>Add Property</Link></div>
                              </div>
                              <div className='col-md-1'></div>
                             
                            
              
                         </>  )
                      
                       } )
                    }
                    </div>
                    
                     <div className='row'>
                       <div className='col-md-4'></div>

                       <div className='col-md-1'>
                       <Form.Label>Shows</Form.Label>
                       </div>
                     
                       <div className='col-md-1'>
                     
                       <Form.Group className="mb-3">
                         
                         <Form.Select disabled>
                      {    orgData.length >0 &&
                           <option>{orgData.response.paginationDetail.totalRecords}</option> }
                         </Form.Select>
                         </Form.Group>


                       </div>
                       <div className='col-md-2'>
                         {    orgData.length >0 &&
                         <Pagination>
                           <Pagination.First />
                           <Pagination.Prev />
                           <Pagination.Item>{1}</Pagination.Item>
                           <Pagination.Item>{2}</Pagination.Item>
                           <Pagination.Item>{3}</Pagination.Item>
                           <Pagination.Ellipsis />   
                           <Pagination.Item active>{orgData.response.paginationDetail.totalPages}</Pagination.Item> 
                           <Pagination.Next />
                           <Pagination.Last />
                         </Pagination>
                         }  
                        
                       </div>

                      
                      </div> 



        
        </div>
      </>
    )}
    else{ return <h3>Loading ...</h3>}
}


export default Dashboard;