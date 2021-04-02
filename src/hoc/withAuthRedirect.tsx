import React, {ComponentType} from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {AppStateType} from "../redux/redux-store";

type MapStateToPropsType = {
    isAuth: boolean
}

export function withAuthRedirect <T>(Component: ComponentType<T>) {

    const RedirectComponent = (props: MapStateToPropsType) => {
        debugger

        let {isAuth, ...restProps} = props

        if (!isAuth) return <Redirect to='/login' />

        return <Component {...restProps as T}/>
    }

    let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
        return {
            isAuth: state.auth.isAuth
        }
    }

    let ConnectedRedirectComponent = connect(mapStateToProps)(RedirectComponent)
    return ConnectedRedirectComponent
}