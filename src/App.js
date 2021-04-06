import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './SocketExample/socket.js';
import SC from './SocketExample/socket.js';
import './App.css';
import './styles.scss';
// import './Firebase/FirebaseInit';

import ApiHit from './ApiHit/apiHitFunctional';
import ScrollToTop from './Components/ScrollToTop';
import LoginPage from './LoginPage/LoginPage';
import TwoUseEffect from './Hooks/twoUseEffect';
import Dashboard from './Dashboard/Dashboard';
import ApiExample from './Hooks/apiExample';
import ScrollOne from './ScrollPages/ScrollOne';
import ScrollTwo from './ScrollPages/ScrollTwo';
import SocketComponent from './SocketExample/SocketComponent';
import SocketClass from './SocketExample/SocketClass.js';
import ChatApp from './ChatApp/ChatApp';
import Temp1 from './TempComponents/temp1';
import StateMutation from './TempComponents/StateMutation';
import NestedRouting from './NestedRouting/NestedRouting';
import Page404 from './NestedRouting/Page404'

const App = () => {
  useEffect(() => {
    // console.log('App.js in useEffect')
  })
  // SC.connectSocket();

  return (

    // <Dashboard text={'hello'}/>
    <Router>
      <ScrollToTop />
      <Switch>
        <Route exact path="/" render={() => <Dashboard x={3} y={4} text={"hello  "} />} />
        <Route path="/login" component={LoginPage} />
        <Route path="/apihit" component={ApiHit} />
        <Route path="/temp" component={Temp1} />
        <Route path="/twouseeffect" component={TwoUseEffect} />
        <Route path="/apiexample" component={ApiExample} />
        <Route path="/scroll1" component={ScrollOne} />
        <Route path="/scroll2" component={ScrollTwo} />
        <Route path="/socket" component={SocketComponent} />
        <Route path="/socketClass" component={SocketClass} />
        <Route path="/chatApp" component={ChatApp} />
        <Route path="/statemutation" component={StateMutation} />
        <Route path="/nested" component={NestedRouting}/>
        <Route path="*" component={Page404}/>
      </Switch>
    </Router>
  );
}

export default App;
