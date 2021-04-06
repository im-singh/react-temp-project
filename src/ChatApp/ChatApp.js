import React, { Fragment, useEffect, useState } from 'react';
import SC from '../SocketExample/socket';
import RenderUsers from './RenderUsers';
import RenderMessages from './RenderMessages';


export default function ChatApp() {
    const [isConnected, setConnection] = useState(false);
    const [username, setUserName] = useState('');
    const [users, setUsers] = useState([]);
    const [self, setSelf] = useState({});
    const [selectedUser, selectUserToMsg] = useState({});
    const [message, setMessage] = useState('');
    const [msgList, setMsgList] = useState([]);


    useEffect(() => {
        SC.subscribeToEvent("private_message", handleMessage);
        SC.subscribeToEvent("connect_error", handleSocketError);
        SC.subscribeToEvent("users", handleUsers);
        SC.subscribeToEvent("user_connected", handleNewUser);
        return () => {
            SC.unsubscribeFromEvent("private_message", handleMessage);
            SC.unsubscribeFromEvent("connect_error", handleSocketError);
            SC.unsubscribeFromEvent("users", handleUsers);
            SC.unsubscribeFromEvent("user_connected", handleNewUser);
        };
    }, [isConnected, users, msgList]);


    useEffect(() => {
        console.log('useEffect users:', users);
    }, [users])



    const connectToSocket = () => {
        // console.log("username: ", username);
        SC.connectSocket(username);
        setConnection(true)
    }
    const handleMessage = ({ content, from }) => {
        // console.log('Content: ', content, from);
        let sender = users.filter(ele => ele.userID === from);
        // console.log("sernder: ", sender);
        let newObj = { ...sender[0] }
        // let newObj = sender[0]
        console.log("newOJB: ", newObj)
        let msg = { sender: newObj, content };
        let newList = [...msgList];
        newList.push(msg);
        setMsgList(newList);
    }
    const handleNewUser = (user) => {
        // console.log("🚀 ~ file: ChatApp.js ~ line 44 ~ handleNewUser ~ user", user)
        console.log("hNU: ", users, user);
        let otherUsers = [...users, user]
        setUsers(otherUsers);
    }
    const handleUsers = (users) => {
        let id = SC.returnId();
        let otherUsers = [];
        users.forEach(u => {
            if (id === u.userID) {
                setSelf(u);
            }
            else {
                otherUsers.push(u);
            }
        })
        console.log("ohters; ", otherUsers);
        setUsers(otherUsers);
    }
    const handleSocketError = (err) => {
        console.log("ERR: Socket: ", err);
    }
    const selectUser = v => {
        // console.log("🚀 ~ file: ChatApp.js ~ line 55 ~ ChatApp ~ v", v)
        selectUserToMsg(v);
    }
    const sendMessage = () => {

        let data = { content: message, to: selectedUser.userID }
        SC.emitAction("private_message", data)
    }
    const showUser = () => {
        console.log("showusers; ", users);
    }
    // sgList])let co = <Fragment />
    // useEffect(() => {
    //     co = <RenderMessages msgList={msgList} />
    // }, [m
    return (
        <div className="chat-container">
            {!isConnected && <div>
                Connect to user:
                <input type="text" onChange={(e) => setUserName(e.target.value)} />
                <button onClick={connectToSocket}>connect</button>
            </div>
            }
            <div className="self">
                User:<span>{self.username}</span>
            </div>
            <div className="chat-box">
                <div className="users">
                    <RenderUsers otherUsers={users} selectUser={selectUser} />
                </div>
                <div className="messages">
                    <RenderMessages msgList={msgList} />

                    <div className="message-box">
                        <input type="text" onChange={(e) => setMessage(e.target.value)} />
                        <button onClick={sendMessage}>Send</button>
                    </div>
                </div>
            </div>
        </div>

    );
}
