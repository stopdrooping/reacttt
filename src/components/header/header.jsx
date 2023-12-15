import React from "react";
import "./header.css"
import logo from "../../img/15-02-2020_rickowens_drkshdwpentagramleveltee_chalkwhiteblack_du20s5250-rnep6-11009_mo_3.jpg"
function Header(){
    return(
        <div className="header">
            <img className="logo" src={logo}/>
{/*             <p className="afad"></p> */}
        </div>
    )
}
export default Header