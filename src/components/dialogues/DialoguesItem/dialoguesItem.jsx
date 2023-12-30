import React from "react";
import { NavLink } from "react-router-dom";
function DialoguesItem(props){
    return(
         <div className="user">
            <NavLink to={`/dialogues/${props.id}`}> {props.name}
            </NavLink>
            </div>
    )
}
export default DialoguesItem