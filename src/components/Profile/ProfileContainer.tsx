import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Redirect, withRouter} from "react-router-dom"
import {RouteComponentProps} from "react-router"
import {getUserProfile, UserProfileType} from "../../redux/profile-reducer";
import {actions} from "../../redux/action-creators";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import { compose } from 'redux';

type StateType = {
    profile: UserProfileType
}

type PathParamsType = {
    userId: string | undefined
}

type MapStateToPropsType = {
    profile: UserProfileType
    isAuth: boolean
}

type MapDispatchToPropsType = {
    setUserProfile: (profile: UserProfileType) => void
    getUserProfile: (userId: string) => void
}

type OwnPropsType = MapStateToPropsType & MapDispatchToPropsType

type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType

class ProfileContainer extends React.Component<PropsType, StateType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (userId) {
            // profileAPI.getUserProfile(userId).then(response => this.props.setUserProfile(response.data))
            this.props.getUserProfile(userId)
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
        isAuth: state.auth.isAuth
    }
}

const {setUserProfile} = actions

export default compose<React.ComponentType>(
    connect(mapStateToProps, {setUserProfile, getUserProfile}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)

