import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom'
import Dashboard from "./Dashboard";
import NewPropertyNext from "./NewOrganization"; 
import NewProperty from "./NewProperty";   


const Routes = (props) =>{

const [lucidAPIToken, setLucidToken] = useState(props.lucidAPIToken);
    return (
           <> 
             <Switch>    
                   <Route exact path="/Dashboard" component={prop => <Dashboard {...prop} lucidAPIToken = {lucidAPIToken}/>} />
                
                   <Route path="/NewProperty" component={NewProperty} />
                   <Route path="/NewPropertyNext" component={NewPropertyNext} />
             </Switch>
            </>
      
    )
}

export default Routes;