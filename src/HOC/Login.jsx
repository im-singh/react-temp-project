import React from 'react';

const Login = (props) => {
    const handleLogin = () => {
        localStorage.setItem("isAuth", true);
        props.history.push("/hoc/dashboard")
    }
    return (<div>
        <button onClick={handleLogin}>Login</button>
    </div>);
}

export default Login;