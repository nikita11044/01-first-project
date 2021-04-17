import React from "react";
import {connect} from "react-redux";
import Preloader from "../common/Preloader/Preloader";
import {AppStateType} from "../../redux/redux-store";
import {follow, requestUsers, User, unfollow} from "../../redux/users-reducer";
import Users from "./Users";
import {actions} from "../../redux/action-creators";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../redux/users-selectors";

type MapStateToPropsType = {
    users: User[]
    totalUsersCount: number
    pageSize: number
    currentPage: number
    isFetching: boolean
    followingInProgress: string[]
}

type MapDispatchToPropsType = {
    follow: (userID: string) =>  void
    unfollow: (userID: string) =>  void
    setUsers: (users: User[]) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
    getUsers: (currentPage: number, pageSize: number) => void
}


type PropsType = MapStateToPropsType & MapDispatchToPropsType

class UsersContainer extends React.Component<PropsType> {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        this.props.getUsers(pageNumber, this.props.pageSize)
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                pageSize={this.props.pageSize}
                totalUsersCount={this.props.totalUsersCount}
                followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        users: getUsers(state),
        totalUsersCount: getTotalUsersCount(state),
        pageSize: getPageSize(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

const {setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching} = actions

export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(mapStateToProps, {
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching,
    getUsers: requestUsers,
    follow,
    unfollow})(UsersContainer)