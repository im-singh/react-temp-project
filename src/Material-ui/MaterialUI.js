import React from 'react'
import {Switch,Route,Link} from 'react-router-dom';

import HiddenPage from './HiddenPage';
import ClassPage from './ClassPage';

function MaterialUI(props) {
    return (
        <div>
            <Link to="/material/hidden">Hidden page</Link>
            <Link to="/material/class">Class page</Link>
            <Switch>
                <Route path={`${props.match.url}/hidden`} component={HiddenPage}/>
                <Route path={`${props.match.url}/class`} component={ClassPage}/>
            </Switch>
        </div>
    )
}

export default MaterialUI
