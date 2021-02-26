import {ChangeEvent, Dispatch} from "react";
import {SendMessageAC, UpdateNewMessageBodyAC} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {ActionTypes} from "../../redux/store";

const mapStateToProps = (state: AppStateType) => {
    return {
        dialogs: state.dialogReducer.dialogs,
        messages: state.dialogReducer.messages,
        newMessageBody: state.dialogReducer.newMessageBody
    }
}

const mapDispatchToProps = (dispatch: Dispatch<ActionTypes>) => {
    return {
        onClickSendMessage: () => {
            dispatch(SendMessageAC())
        },
        onNewMessageChange: (e: ChangeEvent<HTMLTextAreaElement>) => {
            dispatch(UpdateNewMessageBodyAC(e.currentTarget.value))
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;