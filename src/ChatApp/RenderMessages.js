import React, { useEffect } from 'react';

function RenderMessages({ msgList,selfUser,selectedUser }) {

    const isSent=(ele)=>{
        return ele.sender===selfUser.userID?"right":"left";
    }
    const renderMessage=(ele,idx)=>{
        let senderId=ele.sender;
        let reciverId=ele.reciver;
        console.log("msg: ",ele)
        console.log("self: selected: ",selfUser,selectedUser)
        if((senderId===selfUser.userID && reciverId===selectedUser.userID)|| (senderId===selectedUser.userID && reciverId===selfUser.userID)){
            console.log("done")
           
           return <div key={idx} className={isSent(ele)}>
                       <span>{ele.content}</span>
                    </div>
        }
    }
    // console.log("msgList: ",msgList);
    return (
        <div className="content">
            <ol>
                {msgList.length > 0 && msgList.map((ele,idx) => {
                    return renderMessage(ele,idx)
                })
                }
            </ol>
        </div>
    );
}
export default RenderMessages;