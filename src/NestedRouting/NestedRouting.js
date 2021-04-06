import React from 'react';
import {Switch,Route,Link } from 'react-router-dom';
import One from './One';
import Two from './Two';
import Index from './Index';
import Page404 from './Page404';

function NestedRouting(props) {
    return (
        <div>
            <Link to="/nested/one">One</Link>
            <Link to="/nested/two">Two</Link>
            <Switch>
                <Route path={`${props.match.url}/one`} component={One}/>
                <Route path={`${props.match.url}/two`} component={Two}/>
                <Route path={`${props.match.url}`} exact component={Index}/>
                <Route path="*" component={Page404}/>

            </Switch>
        </div>
    )
}

export default NestedRouting
