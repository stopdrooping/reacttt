import React from "react";
import Post from "./post/post";
function Posts(){
    return(
        <div className="posts">
                <h1>
                    Комментарии:    
                </h1>
                <input className="input" placeholder="Введите комментарий"/>
                <button>Добавить</button>
                <Post message="first coemment" name="@rickowens"/>
                <Post message="dafsadjfas" name="@sdwekns"/>
                <Post message="n" name="@kmll"/>
            </div>
    )
}
export default Posts