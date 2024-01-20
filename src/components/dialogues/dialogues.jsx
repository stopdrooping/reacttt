import React from "react";
import "./dialogues.css"
import { NavLink } from "react-router-dom";
import DialoguesItem from "./DialoguesItem/dialoguesItem";
import MessageItem from "./MessageItem/messageItem";

let messageText = React.createRef();

function Dialogues(props){
    let addMessage = ()=>{
        props.addMessage(messageText.current.value);
    }
    return(
        <div className="dialogues">
            <div className="dialog">
                {props.dialogNames.map((e)=>
                <DialoguesItem name={e.name} id={e.id}/>
                )}
            </div>
            <div className="messages">
                {props.messageItems.map((e)=>
                <MessageItem message={e.message} id={e.id}/>
                )}
            </div>
            <div className="sendmessage">            
                <input ref={messageText} className="input" 
                placeholder="Введите сообщение"></input>
                <button onClick={addMessage}>Отправить</button>
            </div>
        </div>
    )
}
export default Dialogues