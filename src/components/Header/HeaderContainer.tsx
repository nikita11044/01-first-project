import React from "react";
import {connect} from "react-redux";
import Header from "./Header";
import {AppStateType} from "../../redux/redux-store";
import {actions} from "../../redux/action-creators";
import {isAuthorized, logout} from "../../redux/auth-reducer";

type MapStateToPropsType = {
    login: string | null
    isAuth: boolean
}

type MapDispatchToPropsType = {
    setUserData: (id: number, email: string, login: string, isAuth: boolean) => void
    isAuthorized: () => void
    logout: () => void
}

type PropsType = MapStateToPropsType & MapDispatchToPropsType

class HeaderContainer extends React.Component<PropsType, any> {
    componentDidMount() {
        // authAPI.isAuthorized().then(response => {
        //         if (response.data.resultCode === 0) {
        //             const {email, id, login} = response.data.data
        //             this.props.setData(id, email, login)
        //         }
        //     })
        this.props.isAuthorized()
    }

    render() {
        return <Header {...this.props}/>
    }
}

function mapStateToProps(state: AppStateType): MapStateToPropsType {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
    }
}

const {setUserData} = actions

export default connect(mapStateToProps, {setUserData, isAuthorized, logout})(HeaderContainer)