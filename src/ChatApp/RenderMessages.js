import React, { useEffect } from 'react';

function RenderMessages({ msgList }) {

    // useEffect(() => {
    //     console.log("list; ", msgList);

    // }, [msgList])
    return (
        <div className="content">
            <ol>
                {msgList.length > 0 && msgList.map(ele => {
                    return <div>
                        <strong>{ele.sender.username} : </strong>
                        <span>{ele.content}</span>
                    </div>
                })
                }
            </ol>
        </div>
    );
}
export default RenderMessages;