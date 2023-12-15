import React from "react";
import "./profile.css"
import n from "../../img/n.jpg"
import nmini from "../../img/nmini.jpg"
function Profile(){
    return(
        <div className="profile">
            <div className="me">
                <img className="n" src={n}/>
                <p>ken carson</p>
            </div>
            <div className="posts">
                <h1>
                    Комментарии:    
                </h1>
                <input className="input" placeholder="Введите комментарий"/>
                <button>Добавить</button>
                <div className="post">
                    <img className="nmini" src={nmini}/>
                    <span>@kencarson</span>
                    <p>first comment</p>
                </div>
                <div className="post">
                    <img className="nmini" src={nmini}/>
                    <span>@rickowens;</span>
                    <p>second comment</p>
                </div>
            </div>
        </div>
    )
}
export default Profile