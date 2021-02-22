import React, {ChangeEvent} from "react";
import {SendMessageAC, UpdateNewMessageBodyAC} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

const DialogsContainer: React.FC = () => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    const state = store.getState()
                    const dialogs = state.dialogReducer.dialogs
                    const messages = state.dialogReducer.messages
                    const newMessageBody = state.dialogReducer.newMessageBody
                    const onClickSendMessage = () => {
                        store.dispatch(SendMessageAC())
                    }
                    const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
                        store.dispatch(UpdateNewMessageBodyAC(e.currentTarget.value))
                    }
                    return <Dialogs dialogs={dialogs}
                                    messages={messages}
                                    newMessageBody={newMessageBody}
                                    onClickSendMessage={onClickSendMessage}
                                    onNewMessageChange={onNewMessageChange}/>
                }
            }
        </StoreContext.Consumer>
    );
}

export default DialogsContainer;