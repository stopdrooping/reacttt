import React from "react";
function MessageItem(props){
    return(
        <div className="message">
        <p>{props.message}</p>
    </div>
    )
}
export default MessageItem