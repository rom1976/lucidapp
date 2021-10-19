import React from 'react';
import { useState } from "react";
import { Container,Form,Row, Col,Button } from "react-bootstrap";
import { Link } from "react-router-dom";


const NewProperty = () =>{
              const [xstyle,setXstyle] = useState({});
              const [xstyleProps,setXstyleProps] = useState({height:'0px'})
              const [minMaxIcon,setMinMaxIcon] = useState('[+]');
              const [minMaxIcon1,setMinMaxIcon1] = useState('[+]');
              const [open, setOpen] = useState(false);



            
              const expand = () => {
                if (minMaxIcon === '[+]'){
                    setXstyle({ height:'100%', opacity:1})
                    setMinMaxIcon('[-]')
                }
                else{
                   setMinMaxIcon( '[+]')
                   setXstyle({ height:'100%', opacity:0})
                }
          };


          const expandProperty = () =>{
            if (minMaxIcon1 === '[+]'){
              setXstyleProps({ height:'300px', opacity:1})
              setMinMaxIcon1('[-]')
          }
          else{
             setMinMaxIcon1( '[+]')
             setXstyleProps({ height:'0px', opacity:0})
          }
          };
         

   const Form_Part1 = () =>{

    return(
      <>
             <Row>
              <Col md={4}></Col>
              <Col md={4}><h3>Create Property</h3></Col>
              <Col md={4}></Col>
            </Row>
            
                 <Row>
                   <Col md={8}> </Col>
                 <Col md={4}>
                <i className="fa fa-picture-o" aria-hidden="true" style={{fontSize:'150px', margin:'0px', position:'absolute'}}></i>
                </Col>
                 </Row>
                 
                 <Row className='mb-1'>
                 <Form.Label column md="2">
                  Organisation Name 
                </Form.Label>
                <Col md="4">
                  <Form.Control type='plain text' readOnly  defaultValue="" />
                </Col>
                </Row>
                
                 <Row className='mb-1'>
                     <Form.Label column md="2">
                        Property Name *
                      </Form.Label>
                      <Col md="3">
                        <Form.Control type='text'  defaultValue="" />
                      </Col>
                  </Row>

                  <Row className='mb-1'>
                     <Form.Label column md="2">
                        Short Name
                      </Form.Label>
                      <Col md="3">
                        <Form.Control type='text'  defaultValue="" />
                      </Col>
                  </Row>
                  <Row className='mb-1'>
                     <Form.Label column md="2">
                      Status*
                     </Form.Label>
                      <Col md="1">
                      <Form.Check
                       type="radio"
                       label="Active"
                       name="status"
                       id="statusActive"
                       />
                      </Col>
                      <Col md="1">
                      <Form.Check
                       type="radio"
                       label="Passive"
                       name="status"
                       id="statusPassive"
                       />
                      </Col>
                    
                  </Row>

      </>
    )
   }

          const Form_Address =() =>
          {

            return(
              <>
              <Row>
                
             <Col>
                <Form.Label  as="legend" onClick={expand}>
                  {minMaxIcon} Address & Contact Details
                </Form.Label>
             </Col>
             </Row>

             <Row className ='xpand' style={xstyle}>
             <Row  className=''>
                   <Col>  Address Details</Col>
                   <Col> </Col>
                   <Col> </Col>
                   <Col> </Col>
            
               </Row>
                     <Row style={{border:'1px solid grey'}}>
                        <Col md='1'> </Col>
                       <Col md="5" style={{border:'1px solid grey'}}> 
                          <Row className='mb-2'>
                            <Form.Label column md="3">
                             Country
                            </Form.Label>
                      <Col md="6">
                        <Form.Control type='text'  defaultValue="" />
                      </Col>
                          </Row>
                          <Row className='mb-2'>
                            <Form.Label column md="3">
                             State
                            </Form.Label>
                      <Col md="6">
                        <Form.Control type='text'  defaultValue="" />
                      </Col>
                          </Row>
                          <Row className='mb-2'>
                            <Form.Label column md="3">
                             City
                            </Form.Label>
                      <Col md="6">
                        <Form.Control type='text'  defaultValue="" />
                      </Col>
                          </Row>
                          <Row className='mb-2'>
                            <Form.Label column md="3">
                             Area
                            </Form.Label>
                      <Col md="6">
                        <Form.Control type='text'  defaultValue="" />
                      </Col>
                          </Row>
                          <Row className='mb-2'>
                            <Form.Label column md="3">
                             Zip Code
                            </Form.Label>
                           <Col md="6">
                          <Form.Control type='text'  defaultValue="" />
                           </Col>
                          </Row>
                          <Row className='mb-2'>
                            <Form.Label column md="3">
                             Latitude
                            </Form.Label>
                           <Col md="6">
                          <Form.Control type='text'  defaultValue="" />
                           </Col>
                          </Row>
                       
                       </Col>


                       <Col md={5}>
                          <Row>
                            <Form.Label column md="4">
                             Oullet Address
                            </Form.Label>
                          </Row>
                          <Row className='mb-2'>
                          <Form.Control type='text'  defaultValue="" />
                          </Row>
                          <Row className='mb-2'>
                          <Form.Control type='text'  defaultValue="" />
                          </Row>
                          <Row className='mb-2'>
                          <Form.Control type='text'  defaultValue="" />
                          </Row>
                          <Row className='mb-2'>
                          <Form.Control type='text'  defaultValue="" />
                          </Row>
                          <Row className='mb-1'>
                            <Form.Label column md="3">
                             Longitude
                            </Form.Label>
                           <Col md="6">
                          <Form.Control type='text'  defaultValue="" />
                           </Col>
                          </Row>

                         
                       </Col>
                       
                     </Row>

                     <Row style={{border:'1px solid grey'}}>
                        <Col md='1'> </Col>
                        <Col md="5" style={{border:'1px solid grey'}}> 
                        <Row>
                          <Col>  Contact Details</Col>
                          <Col> </Col>
                          
       
                        </Row>
                       <Row className='mb-2'>
                            <Form.Label column md="4">
                            Contact Mobile No  
                            </Form.Label>
                            <Col md="2">
                             <Form.Control type='text'  defaultValue="+91" />
                             </Col>
                             <Col md="6">
                             <Form.Control type='text'  defaultValue="" />
                             </Col>
                        </Row>
                        <Row className='mb-2'>
                            <Form.Label column md="4">
                            Contact Telephone No  
                            </Form.Label>
                            <Col md="2">
                             <Form.Control type='text'  defaultValue="+91" />
                             </Col>
                             <Col md="3" style={{marginRight:'0px'}}>
                             <Form.Control type='text'  placeholder="Area Code" />
                             </Col>
                             <Col md="3" style={{marginRight:'0px'}}>
                             <Form.Control type='text'  defaultValue="" />
                             </Col>
                        </Row>
                       
                       </Col>

                       <Col md="5" style={{border:'1px solid grey'}}> 
                       
                       </Col>
                      </Row>
                
               <Row  className=''>
                  
            
               </Row>
               </Row>
          
              </>
            )
          }

  
    return (
        <>
          <Container>
              <Form_Part1 />
              <Form_Address />
            <Row>
             <Col>
                <Form.Label  as="legend" onClick={expandProperty}>
                  {minMaxIcon1} Property Registration  
                </Form.Label>
             </Col>
    
       </Row>
      <div>
               <Row  className='mb-3' className ='xpand' style={xstyleProps}>   
                   
               <Col md={2} style={{textAlign:'right'}}> 
                       <Form.Group as={Col} controlId="formGridState">
                         <Form.Label>State</Form.Label>
                         <Form.Select defaultValue="Choose...">
                           <option>Choose...</option>
                           <option>...</option>
                         </Form.Select>
                       </Form.Group>


                     </Col>


                    <Col md={3}> 
                    <Form.Group as={Col} controlId="formGridCity">
                     <Form.Label>Registration Number</Form.Label>
                     <Form.Control />
                     </Form.Group>
                    </Col>
                    <Col md={4}>
                    <fieldset>
                       <Form.Group as={Col} className="mb-3">
                         <Form.Label as="legend" column sm={2}>
                           Status
                         </Form.Label>
                          <Col>
                           <Form.Check
                             type="radio"
                             label="Active"
                            
                             name="formHorizontalRadios"
                             id="formHorizontalRadios1"
                           />
                           </Col>
                           <Form.Check
                             type="radio"
                             label="Passive"
                             name="formHorizontalRadios"
                             id="formHorizontalRadios2"
                           />
                       </Form.Group>
                      </fieldset>
                      </Col>
             
                </Row>
                 <Row>
                   <Col> </Col>
                   <Col> </Col>
                   <Col> </Col>
                   <Col>
                   {<Link to='/NewProperty'> <Button>Next &gt;&gt;</Button></Link>} </Col>
                  
               </Row>
      </div>
            
       
              
       
          </Container>
        </>
    )


} 


export default NewProperty
