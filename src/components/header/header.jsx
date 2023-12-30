import React from "react";
import "./header.css"
import logo from "../../img/Rick-Owens-Logo.png"
function Header(){
    return(
        <div className="header">
            <img className="logo" src={logo}/>
{/*             <p className="afad"></p> */}
        </div>
    )
}
export default Header