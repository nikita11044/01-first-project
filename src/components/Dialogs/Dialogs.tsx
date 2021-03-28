import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import classes from "./Dialogs.module.css";
import MessageItem from "./MessageItem/MessageItem";
import {DialogsType, MessageType} from "../../redux/dialogs-reducer";
import {Redirect} from "react-router-dom"

export type DialogsPropsType = {
    dialogs: Array<DialogsType>
    messages: Array<MessageType>
    newMessageBody: string
    sendMessage: () => void
    updateNewMessageBody: (newMessageBody: string) => void
    isAuth: boolean
}

const Dialogs: React.FC<DialogsPropsType> = ({dialogs, messages, newMessageBody, sendMessage, updateNewMessageBody, isAuth}) => {

    const dialogElements = dialogs.map(el => {
        return <DialogItem name={el.name} id={el.id}/>
    })

    const messagesElements = messages.map(el => {
        return <MessageItem message={el.message} />
    })

    if (!isAuth) return <Redirect to='/login'/>

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
                                  onChange={(e) => {updateNewMessageBody(e.currentTarget.value)}}
                                  placeholder='Enter your message'></textarea>
                    </div>
                    <div>
                        <button onClick={sendMessage}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;