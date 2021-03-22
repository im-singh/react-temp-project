import React from 'react';
import { Link, useParams, NavLink, Redirect } from 'react-router-dom';
import ScrollComponent from '../Components/ScrollComponents';
import ShowOnMobile from '../Components/ShowOnMobile';

export default function ScrollTwo() {
    let params = useParams();
    console.log("PARAMS: ", params);
    return (
        <>
            <NavLink to="/scroll2" activeStyle={{ color: 'green' }}>NavLink goto 2</NavLink>
            <ShowOnMobile>
                <h2>Only on mobile</h2>
            </ShowOnMobile>
            <ScrollComponent />
            <Link to="/scroll1">Go to one</Link>
            {/* <Redirect to="/" /> */}
            <div id="my-div">MY div</div>
            <ScrollComponent />

        </>
    );
}
