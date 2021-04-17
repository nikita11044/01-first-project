import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {withRouter} from "react-router-dom"
import {RouteComponentProps} from "react-router"
import {requestUserProfile, requestStatus, updateStatus, UserProfileType} from "../../redux/profile-reducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import { compose } from 'redux';
import {getProfile, getStatus} from "../../redux/profile-selectors";
import {getAuthorizedUserId, getIsAuth} from "../../redux/auth-selectors";

type PathParamsType = {
    userId: string | undefined
}

type MapStateToPropsType = {
    profile: UserProfileType
    status: string
    isAuth: boolean
    authorizedUserId: number | null
}

type MapDispatchToPropsType = {
    getUserProfile: (userId: string) => void
    getStatus: (userId: string) => void
    updateStatus: (newStatus: string) => void
}

type PropsType = RouteComponentProps<PathParamsType> & MapStateToPropsType & MapDispatchToPropsType

class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        let authorizedUserId = this.props.authorizedUserId
        if (!userId && !authorizedUserId) {
            this.props.history.push('/login')
        }
        if (!userId && authorizedUserId) {
            userId = authorizedUserId.toString()
        }
        if (userId) {
            this.props.getUserProfile(userId)
            this.props.getStatus(userId)
        }
    }

    render() {
        return (
            <Profile {...this.props}/>
        )
    }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        profile: getProfile(state),
        isAuth: getIsAuth(state),
        status: getStatus(state),
        authorizedUserId: getAuthorizedUserId(state)
    }
}

export default compose<React.ComponentType>(
    connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(mapStateToProps, {getUserProfile: requestUserProfile, getStatus: requestStatus, updateStatus}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)

