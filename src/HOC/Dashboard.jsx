import React from 'react';
import requireAuth from './requireAuth';
const Dashboard = (props) => {
    const handleLogout = () => {
        localStorage.removeItem("isAuth");
        props.history.push("/hoc")
    }
    return (<div>
        Dashboard Page
        <button onClick={handleLogout}>Logout</button>
    </div>);
}

export default requireAuth(Dashboard);