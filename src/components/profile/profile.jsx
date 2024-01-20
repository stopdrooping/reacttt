import React from "react";
import "./profile.css";
import Posts from "./posts/posts";
import Profileme from "./profile.me/profileme";
function Profile(props){
    return(
        <div className="profile">
            <Profileme/>
            <Posts postsData={props.postsData} addPost={props.addPost}/>
        </div>
    )
}
export default Profile