import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SC from './socket.js';

function SocketComponent() {
    const [inputArr, setInput] = useState([]);
    const [message, setMessage] = useState("");
    useEffect(() => {
        console.log("use effect socket compone")
        if (SC.returnSocket()) {
            SC.subscribeToEvent("messageUsers", handleData);
        }
        return () => {
            console.log('cleaned socketcomponent')
            SC.unsubscribeFromEvent("messageUsers", handleData);
        }
    }, [])
    useEffect(() => {
        console.log("list: ", inputArr)
    }, [inputArr])

    const handleData = (msg) => {
        console.log("🚀 ~ file: SocketComponent.js ~ line 23 ~ handleData ~ data", msg)
        let arr = [...inputArr];
        arr.push(msg);
        setInput(arr);
    }
    const handleSubmit = () => {
        SC.emitAction("userMessage", { msg: message })
    }
    const handleInput = (e) => {
        setMessage(e.target.value);
    }
    return (
        <div>
            <h1>Socket example</h1>
            <Link to="/scroll1">To /scroll1</Link>
            <input type="text" onChange={handleInput} />
            <button onClick={handleSubmit}>
                send hi
            </button>
            <h4>Messages: </h4>
            {
                inputArr.map((ele, idx) => {
                    return <p key={idx}>message: {ele}</p>
                })
            }
        </div>
    );
}
export default SocketComponent;