import React from "react";
import "./dialogues.css"
import { NavLink } from "react-router-dom";
import DialoguesItem from "./DialoguesItem/dialoguesItem";
import MessageItem from "./MessageItem/messageItem";

let dialogNames = [
    {name:"rickowens", id:1},
    {name: "Gibon", id:2},
    {name: "Camel", id:3},
    {name: "homixide", id:4},
    {name: "glina", id:5},
    
]
let messageItem = [
    {message:"sup", id:1},
    {message:"wsup", id:2},
    {message:"gibon", id:3},
    {message:"gibon", id:4},

]

function Dialogues(){
    return(
        <div className="dialogues">
            <div className="dialog">
                {dialogNames.map((e)=>
                <DialoguesItem name={e.name} id={e.id}/>
                )}
            </div>
            <div className="messages">
                {messageItem.map((e)=>
                <MessageItem message={e.message} id={e.id}/>
                )}
            </div>
            <div className="sendmessage">            
                <input className="input" 
                placeholder="Введите сообщение"></input>
                <button>Отправить</button>
            </div>
        </div>
    )
}
export default Dialogues