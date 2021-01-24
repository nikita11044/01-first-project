import React from "react";
import classes from "./Post.module.css";

type MessageProps = {
    message: string
    likesCount: number
}

function Post(props: MessageProps) {
    return (
        <div className={classes.item}>
            <img src="https://www.cheltv.ru/wp-content/uploads/2018/05/egikG.jpg" alt=""/>
                {props.message}
            <div>
                <span>like</span>
                <span>{props.likesCount}</span>
            </div>
        </div>
    );
};

export default Post;