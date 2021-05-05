import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import Signup from './SignUp';


const Auth = (props) => {

    return (
        <div>
            <Switch>
                <Route path={`${props.match.url}/signup`} component={Signup} />
                <Route path="/" component={Home} />
                {/* any route goes to home (/djkfjkjk) */}
            </Switch>
        </div>
    )
}
export default Auth;