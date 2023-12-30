import React from "react";
import nmini from "../../../../img/nmini.jpg";
function Post(props){
    return(
    <div className="post">
        <img className="nmini" src={nmini}/>
        <span>{props.name}</span>
        <p>{props.message}</p>
    </div>
    )
}
export default Post