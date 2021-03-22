import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import SC from '../SocketExample/socket.js';
import ScrollComponent from '../Components/ScrollComponents';

export default function ScrollOne() {
    const sendHello = () => {
        SC.emitAction("hello", { msg: "hello" });
    }
    return (
        <div>
            <button onClick={sendHello}>Send hello</button>
            <NavLink to="/scroll2">NavLink goto 2</NavLink>
            <ScrollComponent />
            <Link to={{
                pathname: "/socket",
            }}>
                Go to /socket
            </Link>
            <Link to={{
                pathname: "/socketClass",
            }}>
                Go to /socketClass
            </Link>
            <ScrollComponent />
        </div>
    );
}
