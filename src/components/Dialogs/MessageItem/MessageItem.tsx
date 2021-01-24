import React from "react";
import classes from "./MessageItem.module.css";

type MessageItemPropsType = {
    message: string
}

const MessageItem: React.FC<MessageItemPropsType> = (props) => {
    return (
        <div className={classes.message}>
            {props.message}
        </div>
    );
}

export default MessageItem;