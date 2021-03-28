import React from "react";
import {connect} from "react-redux";
import Header from "./Header";
import {AppStateType} from "../../redux/redux-store";
import {actions} from "../../redux/action-creators";
import {isAuthorized} from "../../redux/auth-reducer";

type MapStateToPropsType = {
    login: string
    isAuth: boolean
}

type MapDispatchToPropsType = {
    setData: (userID: number, email: string, login: string) => void
    isAuthorized: () => void
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
        isAuth: state.authReducer.isAuth,
        login: state.authReducer.login
    }
}

const {setData} = actions

export default connect(mapStateToProps, {setData, isAuthorized})(HeaderContainer)