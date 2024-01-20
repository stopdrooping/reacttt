import React from "react";
import "./navbar.css"
import Stephen from "./Stephen-W-Hawking-2007.webp"
import { NavLink, Link } from "react-router-dom";
function Navbar(props) {
    return (
        <div className="navbar">
            <NavLink to="/profile">Профиль</NavLink>
            <NavLink to="/dialogues">Соообщения</NavLink>
            <NavLink to="/users">Пользователи</NavLink>
            <div className="friends">
                <h2>Друзья</h2>
                {props.friends.map((e) =>
                    <NavLink to="/dialogues">
                        <img className="Stephen" src={Stephen} />
                        <br />
                        <p>{e.name}</p>
                    </NavLink>
                )}
            </div>
        </div>
    )
}
export default Navbar