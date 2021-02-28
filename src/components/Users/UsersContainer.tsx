import React, {Dispatch} from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {AppStateType} from "../../redux/redux-store";
import {FollowAC, SetUsersAC, UnfollowAC, UsersActionTypes, UserType} from "../../redux/users-reducer";

const mapStateToProps = (state: AppStateType) => {
    return {
        users: state.usersReducer.users
    }
}

const mapDispatchToProps = (dispatch: Dispatch<UsersActionTypes>) => {
    return {
        follow: (userID: string) => {
            dispatch(FollowAC(userID))
        },
        unfollow: (userID: string) => {
            dispatch(UnfollowAC(userID))
        },
        setUsers: (users: Array<UserType>) => {
            dispatch(SetUsersAC(users))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)