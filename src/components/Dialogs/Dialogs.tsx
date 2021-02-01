import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import classes from "./Dialogs.module.css";
import MessageItem from "./MessageItem/MessageItem";
import {DialogsType, MessageType} from "../../redux/state";

export type DialogsPropsType = {
    dialogs: Array<DialogsType>
    messages: Array<MessageType>
}

const Dialogs: React.FC<DialogsPropsType> = ({dialogs, messages}) => {

    const dialogElements = dialogs.map(el => {
        return <DialogItem name={el.name} id={el.id}/>
    })

    const messagesElements = messages.map(el => {
        return <MessageItem message={el.message} />
    })

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {
                    dialogElements
                }
            </div>
            <div className={classes.messages}>
                {
                    messagesElements
                }
            </div>
        </div>
    );
}

export default Dialogs;