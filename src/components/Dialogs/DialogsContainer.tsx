import React, {ChangeEvent} from "react";
import DialogItem from "./DialogItem/DialogItem";
import classes from "./Dialogs.module.css";
import MessageItem from "./MessageItem/MessageItem";
import {ActionTypes, DialogsType, MessageType} from "../../redux/store";
import {SendMessageAC, UpdateNewMessageBodyAC} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

export type DialogsContainerPropsType = {
    dialogs: Array<DialogsType>
    messages: Array<MessageType>
    newMessageBody: string
    dispatch: (action: ActionTypes) => void
}

const DialogsContainer: React.FC<DialogsContainerPropsType> = ({dialogs, messages, newMessageBody, dispatch}) => {

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
        <Dialogs dialogs={dialogs} messages={messages} newMessageBody={newMessageBody} onClickSendMessage={onClickSendMessage} onNewMessageChange={onNewMessageChange}/>
    );
}

export default DialogsContainer;