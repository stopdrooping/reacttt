import React from "react";
import "./profile.css";
import Posts from "./posts/posts";
import Profileme from "./profile.me/profileme";
function Profile(){
    return(
        <div className="profile">
            <Profileme/>
            <Posts/>
        </div>
    )
}
export default Profile