import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {withRouter} from "react-router-dom"
import {RouteComponentProps} from "react-router"
import {getUserProfile, UserProfileType} from "../../redux/profile-reducer";
import {actions} from "../../redux/action-creators";

type StateType = {
    profile: UserProfileType
}

type PathParamsType = {
    userId: string | undefined
}

type MapStateToPropsType = {
    profile: UserProfileType
}

type MapDispatchToPropsType = {
    setUserProfile: (profile: UserProfileType) => void
    getUserProfile: (userId: string) => void
}

type OwnPropsType = MapStateToPropsType & MapDispatchToPropsType

type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType

class ProfileContainer extends React.Component<PropsType, StateType>{

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (userId) {
            // profileAPI.getUserProfile(userId).then(response => this.props.setUserProfile(response.data))
            this.props.getUserProfile(userId)
        }
    }

    render() {
        return <Profile {...this.props}/>
    }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        profile: state.profileReducer.profile
    }
}

let DataContainerWithUrl = withRouter(ProfileContainer)

const {setUserProfile} = actions

export default connect(mapStateToProps, {setUserProfile, getUserProfile})(DataContainerWithUrl);