import React, {ChangeEvent} from "react";
import DialogItem from "./DialogItem/DialogItem";
import classes from "./Dialogs.module.css";
import MessageItem from "./MessageItem/MessageItem";
import {
    AddPostActionType,
    DialogsType,
    MessageType, SendMessageAC, SendMessageActionType, UpdateNewMessageBodyAC,
    UpdateNewMessageBodyActionType,
    UpdateTextActionType
} from "../../redux/state";

export type DialogsPropsType = {
    dialogs: Array<DialogsType>
    messages: Array<MessageType>
    newMessageBody: string
    dispatch: (action: AddPostActionType | UpdateTextActionType | UpdateNewMessageBodyActionType | SendMessageActionType) => void
}

const Dialogs: React.FC<DialogsPropsType> = ({dialogs, messages, newMessageBody, dispatch}) => {

    const dialogElements = dialogs.map(el => {
        return <DialogItem name={el.name} id={el.id}/>
    })

    const messagesElements = messages.map(el => {
        return <MessageItem message={el.message} />
    })

    const onClickSendMessage = () => {
        dispatch(SendMessageAC())
    }

    const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        dispatch(UpdateNewMessageBodyAC(e.currentTarget.value))
    }

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