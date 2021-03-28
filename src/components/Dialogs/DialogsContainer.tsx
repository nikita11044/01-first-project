import {ChangeEvent, Dispatch} from "react";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {actions, ActionTypes} from "../../redux/action-creators";

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
            dispatch(actions.sendMessage())
        },
        onNewMessageChange: (e: ChangeEvent<HTMLTextAreaElement>) => {
            dispatch(actions.updateNewMessageBody(e.currentTarget.value))
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;