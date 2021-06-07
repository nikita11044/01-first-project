import React from "react";
import classes from './MessageItem.module.css'

export type MessageItemPropsType = {
    message: string
}

const MessageItem: React.FC<MessageItemPropsType> = React.memo(({message}) => {
    return (
        <div className={classes.messageWrapper}>
            <p className={classes.message}>
                {message}
            </p>
        </div>
    );
})

export default MessageItem;