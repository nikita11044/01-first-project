import React from "react";
import {connect} from "react-redux";
import Preloader from "../common/Preloader/Preloader";
import {AppStateType} from "../../redux/redux-store";
import {follow, getUsers, IUser, unfollow} from "../../redux/users-reducer";
import Users from "./Users";
import {actions} from "../../redux/action-creators";

type StateType = {
    users: IUser[]
}

type MapStateToPropsType = {
    users: IUser[]
    totalUsersCount: number
    pageSize: number
    currentPage: number
    isFetching: boolean
    followingInProgress: string[]
}

type MapDispatchToPropsType = {
    follow: (userID: string) => void
    unfollow: (userID: string) => void
    setUsers: (users: Array<IUser>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
    toggleFollowingInProgress: (isFetching: boolean, userId: string) => void
    getUsers: (currentPage: number, pageSize: number) => void
}

type PropsType = MapStateToPropsType & MapDispatchToPropsType

class UsersContainer extends React.Component<PropsType, StateType> {

    componentDidMount() {
        // this.props.toggleIsFetching(true)
        // getUsers(this.props.currentPage, this.props.pageSize)
        //     .then(data => {
        //         this.props.setUsers(data.items)
        //         this.props.setTotalUsersCount(data.totalCount)
        //         this.props.toggleIsFetching(false)
        //     })
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        // this.props.toggleIsFetching(true)
        // this.props.setCurrentPage(pageNumber)
        // getUsers(pageNumber, this.props.pageSize)
        //     .then(data => {
        //         this.props.setUsers(data.items)
        //         this.props.setTotalUsersCount(data.totalCount)
        //         this.props.toggleIsFetching(false)
        //     })
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
                toggleFollowingInProgress={this.props.toggleFollowingInProgress}
            />
        </>
    }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        users: state.users.users,
        totalUsersCount: state.users.totalUsersCount,
        pageSize: state.users.pageSize,
        currentPage: state.users.currentPage,
        isFetching: state.users.isFetching,
        followingInProgress: state.users.followingInProgress
    }
}

// const mapDispatchToProps = (dispatch: Dispatch<UsersActionTypes>): MapDispatchToPropsType => {
//     return {
//         follow: (userID: string) => {
//             dispatch(FollowAC(userID))
//         },
//         unfollow: (userID: string) => {
//             dispatch(UnfollowAC(userID))
//         },
//         setUsers: (users: Array<UserType>) => {
//             dispatch(SetUsersAC(users))
//         },
//         setCurrentPage: (currentPage: number) => {
//             dispatch(SetCurrentPageAC(currentPage))
//         },
//         setTotalUsersCount: (totalCount: number) => {
//             dispatch(SetTotalUsersCountAC(totalCount))
//         },
//         toggleIsFetching: (isFetching: boolean) => {
//             dispatch(ToggleIsFetchingAC(isFetching))
//         }
//     }
// }

const {followSuccess, unfollowSuccess, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching, toggleFollowingInProgress} = actions

export default connect(mapStateToProps, {
    followSuccess,
    unfollowSuccess,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching,
    toggleFollowingInProgress,
    getUsers,
    follow,
    unfollow})(UsersContainer)