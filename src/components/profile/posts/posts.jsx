import React from "react";
import Post from "./post/post";

let postText = React.createRef();

function Posts(props) {
    let addPost = ()=>{
        props.addPost(postText.current.value);
    }
    return (
        <div className="posts">
            <h1>
                Комментарии:
            </h1>
            
            <input ref={postText} className="input" placeholder="Введите комментарий" />
            <button onClick={addPost}>Добавить</button>
            {props.postsData.map((e) =>
                <Post name={e.name} id={e.id} text={e.text} likes={e.likes} />
            )}
        </div>
    )
}
export default Posts