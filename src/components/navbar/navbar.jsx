import React from "react";
import "./navbar.css"
import { NavLink,Link } from "react-router-dom";
function Navbar(){
    return(
        <div className="navbar">
            <NavLink to="/profile">Профиль</NavLink>
            <NavLink to="/dialogues">Соообщения</NavLink>
            <NavLink to="/users">Пользователи</NavLink>
            <NavLink to="/friends">Друзья</NavLink>
        </div>
    )
}
export default Navbar