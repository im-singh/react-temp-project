import React,{useEffect, useState} from 'react';
import axios from 'axios'

const Signup=(props)=>{
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [error,setError]=useState('')
    const [isLogin,setLogin]=useState(false)
    useEffect(()=>{
        if(localStorage.getItem("isAuth")){
            // home 
            props.history.push('/auth')
        }
    })
    const handleSubmit=()=>{
        axios.post("http://localhost:4000/auth/signup",{email,password})
        .then(r=>{
            saveToken(r);
        })
        .catch(err=>{
            setLogin(false);
            setError(err.response.data);
        })
    }
    const saveToken=(r)=>{
        if(r.data.token){
            localStorage.setItem("isAuth",true);
            localStorage.setItem("token",r.data.token);
            props.history.push("/auth");
        }
    }
    const handleLogin=()=>{
        axios.post("http://localhost:4000/auth/signin",{email,password})
        .then(r=>{
            saveToken(r)
        })
        .catch(err=>{
            setLogin(true);
            setError(err.response.data);
        })
    }
    return (<div>
        <form onSubmit={e=> e.preventDefault()}>
            {error&&!isLogin &&<p style={{color:'red'}}>{error},sign in below</p>}
            {error&&isLogin &&<p style={{color:'red'}}>{error}</p>}

            <h2>Sign up</h2>
            <div>
            <label htmlFor="email">Email: </label>
            <input type="text" name="email" id="email" value={email} onChange={e=> setEmail(e.target.value)}/>
            </div>
            <div>
            <label htmlFor="password">Password:</label>
            <input type="password" name="password" id="password" value={password} onChange={e=> setPassword(e.target.value)}/>

            </div>
            <button type="click" onClick={handleSubmit}>Sign up</button>
            <button type="click" onClick={handleLogin}>Login</button>
        </form>
        
    </div>)
}
export default Signup;