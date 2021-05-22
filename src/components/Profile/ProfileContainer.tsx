import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {withRouter} from "react-router-dom"
import {RouteComponentProps} from "react-router"
import {requestUserProfile, requestStatus, updateStatus, UserProfileType, savePhoto} from "../../redux/profile-reducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from 'redux';
import {getProfile, getStatus} from "../../redux/selectors/profile-selectors";
import {getAuthorizedUserId, getIsAuth} from "../../redux/selectors/auth-selectors";

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
    savePhoto: (file: File) => void
}

type PropsType = RouteComponentProps<PathParamsType> & MapStateToPropsType & MapDispatchToPropsType

class ProfileContainer extends React.Component<PropsType> {

    refreshProfile() {
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

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps: Readonly<PropsType>, prevState: Readonly<{}>, snapshot?: any) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile()
        }
    }

    render() {
        return (
            <Profile {...this.props} isOwner={!this.props.match.params.userId}/>
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
    connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(mapStateToProps, {
        getUserProfile: requestUserProfile,
        getStatus: requestStatus,
        updateStatus,
        savePhoto
    }),
    withRouter,
    withAuthRedirect
)(ProfileContainer)

