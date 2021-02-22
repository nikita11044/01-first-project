import React, {ChangeEvent} from "react";
import DialogItem from "./DialogItem/DialogItem";
import classes from "./Dialogs.module.css";
import MessageItem from "./MessageItem/MessageItem";
import {DialogsType, MessageType} from "../../redux/store";

export type DialogsPropsType = {
    dialogs: Array<DialogsType>
    messages: Array<MessageType>
    newMessageBody: string
    onClickSendMessage: () => void
    onNewMessageChange: (e: ChangeEvent<HTMLTextAreaElement>) => void
}

const Dialogs: React.FC<DialogsPropsType> = ({dialogs, messages, newMessageBody, onClickSendMessage, onNewMessageChange}) => {

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
                <div>{messagesElements}</div>
                <div>
                    <div>
                        <textarea value={newMessageBody}
                                  onChange={onNewMessageChange}
                                  placeholder='Enter your message'></textarea>
                    </div>
                    <div>
                        <button onClick={onClickSendMessage}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;