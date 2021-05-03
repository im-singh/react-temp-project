import React from 'react';
import { Route, Link } from 'react-router-dom'

import Login from './Login';
import Dashboard from './Dashboard';

const HOC = (props) => {
    return (
        <div>
            <div style={{background:'#dff'}}>
            <h2>High Order</h2> 
            <Link to="/hoc/dashboard">dashboard</Link>
            <br/>
            <Link to="/hoc/without">without auth</Link>

            </div>
            <Route exact path="/hoc/without" component={()=> <h3>Without page</h3>}/>
            <Route exact path="/hoc/dashboard" component={Dashboard} />
            <Route exact path="/hoc" component={Login}/>          
        </div>
    );
}

export default HOC;