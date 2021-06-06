import React from "react";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {actions} from "../../redux/action-creators";
import {DialogsType, MessageType} from "../../redux/dialogs-reducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {getIsAuth} from "../../redux/selectors/auth-selectors";

type MapStateToPropsType = {
    dialogs: DialogsType[]
    messages: { [key: string] : MessageType[] }
    isAuth: boolean
}

type MapDispatchToPropsType = {
    sendMessage: (message: string, receiverId?: string) => void
}

type PropsType = MapStateToPropsType & MapDispatchToPropsType

class DialogsContainer extends React.Component<PropsType> {
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
        isAuth: getIsAuth(state)
    }
}

const {sendMessage} = actions

export default compose<React.ComponentType>(
    connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(mapStateToProps, {sendMessage}),
    withAuthRedirect
)(DialogsContainer)