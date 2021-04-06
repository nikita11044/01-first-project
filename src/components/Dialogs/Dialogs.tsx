import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import classes from "./Dialogs.module.css";
import MessageItem from "./MessageItem/MessageItem";
import {DialogsType, MessageType} from "../../redux/dialogs-reducer";
import AddMessageForm from "../common/AddMessageForm/AddMessageForm";

export type DialogsPropsType = {
    dialogs: Array<DialogsType>
    messages: Array<MessageType>
    sendMessage: (message: string) => void
}

const Dialogs: React.FC<DialogsPropsType> = ({dialogs, messages, sendMessage}) => {

    const dialogElements = dialogs.map(el => {
        return <DialogItem key={el.id} name={el.name} id={el.id}/>
    })

    const messagesElements = messages.map(el => {
        return <MessageItem key={el.id} message={el.message} />
    })

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {
                    dialogElements
                }
            </div>
            <div className={classes.messages}>
                <div>{messagesElements}</div>
                <div>
                    <AddMessageForm sendMessage={sendMessage}/>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;