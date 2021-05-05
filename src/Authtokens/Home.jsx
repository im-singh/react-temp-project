import axios from 'axios';
import React,{useEffect,useState} from 'react';


const Home=(props)=>{
    const [user,setUser]=useState(null)
    useEffect(()=>{
        if(!localStorage.getItem("isAuth")){
            props.history.push("/auth/signup")
        }
    })
    const getUsers=()=>{
        let token=localStorage.getItem("token");
        if(token){
            axios.get("http://localhost:4000/auth/user",{headers:{"authorization":token}})
            .then(r=>{
                console.log(r)
                setUser(r.data);
            })
            .catch(err=>{
                console.log(err);
            })

        }
    }
    const handleLogout=()=>{
        localStorage.removeItem("isAuth");
        localStorage.removeItem("token");
        props.history.push("/auth/signup")
    }
    
    return (<div>
        Home page
        <button onClick={handleLogout}>Logout</button>
        <br/>
        <button onClick={getUsers}>Get Users</button>
        <p>{user?.email}</p>
        <p>{user?._id}</p>
    </div>)
}
export default Home;