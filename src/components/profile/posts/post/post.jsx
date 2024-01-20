import React from "react";
import nmini from "../../../../img/nmini.jpg";
function Post(props) {
    return (
        <div className="post">
            <img className="nmini" src={nmini} />
            <span>{props.name}</span>
            <i class="fa-regular fa-heart fa-gibon"></i>
            <span>{props.likes}</span>
            <p>{props.text}</p>
        </div>
    )
}
export default Post