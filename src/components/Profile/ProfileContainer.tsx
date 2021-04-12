import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {withRouter} from "react-router-dom"
import {RouteComponentProps} from "react-router"
import {getUserProfile, getStatus, updateStatus, UserProfileType} from "../../redux/profile-reducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import { compose } from 'redux';

type PathParamsType = {
    userId: string | undefined
}

type MapStateToPropsType = {
    profile: UserProfileType
    status: string
    isAuth: boolean
}

type MapDispatchToPropsType = {
    getUserProfile: (userId: string) => void
    getStatus: (userId: string) => void
    updateStatus: (newStatus: string) => void
}

type OwnPropsType = MapStateToPropsType & MapDispatchToPropsType

type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType

class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
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
        profile: state.profile.profile,
        isAuth: state.auth.isAuth,
        status: state.profile.status
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)

