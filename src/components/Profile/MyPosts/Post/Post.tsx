import React from "react";
import classes from "./Post.module.css";

export type MessagePropsType = {
    message: string
    likesCount: number
}

const Post: React.FC<MessagePropsType> = ({message, likesCount}) => {
    return (
        <div className={classes.item}>
            <img src="https://www.cheltv.ru/wp-content/uploads/2018/05/egikG.jpg" alt=""/>
                {message}
            <div>
                <span>like</span>
                <span>{likesCount}</span>
            </div>
        </div>
    );
};

export default Post;