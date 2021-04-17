import React from "react";
import {connect} from "react-redux";
import Header from "./Header";
import {AppStateType} from "../../redux/redux-store";
import {actions} from "../../redux/action-creators";
import {logout} from "../../redux/auth-reducer";
import {getIsAuth, getLogin} from "../../redux/auth-selectors";

type MapStateToPropsType = {
    login: string | null
    isAuth: boolean
}

type MapDispatchToPropsType = {
    setUserData: (id: number, email: string, login: string, isAuth: boolean) => void
    logout: () => void
}

type PropsType = MapStateToPropsType & MapDispatchToPropsType

class HeaderContainer extends React.Component<PropsType> {
    render() {
        return <Header {...this.props}/>
    }
}

function mapStateToProps(state: AppStateType): MapStateToPropsType {
    return {
        isAuth: getIsAuth(state),
        login: getLogin(state),
    }
}

const {setUserData} = actions

export default connect(mapStateToProps, {setUserData, logout})(HeaderContainer)