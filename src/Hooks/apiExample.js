import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function ApiExample() {
    const [Users, setUsers] = useState([])
    const [Loading, setLoading] = useState(true);
    // useEffect(() => {
    //     //first time
    //     fetchData();
    // }, [])
    useEffect(() => {
        // when users state changes
        if (Users.length === 0) {
            setLoading(true);
            fetchData();
        }
    }, [Users])
    const deleteTopUser = () => {
        setUsers(Users.slice(1))
    }
    const fetchData = () => {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(({ data }) => {
                console.log("🚀 ~ file: apiExample.js ~ line 12 ~ useEffect ~ data", data)
                setUsers(data)
                setLoading(false)
            })
            .catch(er => {
                setLoading(false);
                console.log("err", er);
            })
    }

    return (
        !Loading ? <div>
            <h1>Api Example jsonPlaceholder api</h1>
            <button onClick={deleteTopUser} >
                Delete Top User
            </button>
            {
                Users.map(ele => {
                    return <p>{ele.name}</p>
                })
            }
        </div>
            : <p>...loading...</p>
    );
}
