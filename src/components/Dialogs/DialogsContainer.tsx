import React from "react";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {actions} from "../../redux/action-creators";
import {DialogsType, MessageType} from "../../redux/dialogs-reducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

type StateType = {
    dialogs: DialogsType[]
    messages: MessageType[]
}

type MapStateToPropsType = {
    dialogs: DialogsType[]
    messages: MessageType[]
    isAuth: boolean
}

type MapDispatchToPropsType = {
    sendMessage: (message: string) => void
}

type PropsType = MapStateToPropsType & MapDispatchToPropsType

class DialogsContainer extends React.Component<PropsType, StateType> {
    render() {
        return <Dialogs
        dialogs={this.props.dialogs}
        messages={this.props.messages}
        sendMessage={this.props.sendMessage}/>
    }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        dialogs: state.dialogs.dialogs,
        messages: state.dialogs.messages,
        isAuth: state.auth.isAuth
    }
}

// const mapDispatchToProps = (dispatch: Dispatch<ActionTypes>) => {
//     return {
//         onClickSendMessage: () => {
//             dispatch(actions.sendMessage())
//         },
//         onNewMessageChange: (e: ChangeEvent<HTMLTextAreaElement>) => {
//             dispatch(actions.updateNewMessageBody(e.currentTarget.value))
//         }
//     }
// }

const {sendMessage} = actions

export default compose<React.ComponentType>(
    connect(mapStateToProps, {sendMessage}),
    withAuthRedirect
)(DialogsContainer)