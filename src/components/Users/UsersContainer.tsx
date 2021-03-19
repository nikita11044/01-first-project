import React from "react";
import {connect} from "react-redux";
import Preloader from "../common/Preloader/Preloader";
import {AppStateType} from "../../redux/redux-store";
import {
    follow, setCurrentPage, setTotalUsersCount, setUsers, toggleFollowingInProgress, toggleIsFetching, unfollow,
    UserType
} from "../../redux/users-reducer";
import Users from "./Users";
import {getUsers} from "../../api/api";

type StateType = {
    users: UserType[]
}

type MapStateToPropsType = {
    users: UserType[]
    totalUsersCount: number
    pageSize: number
    currentPage: number
    isFetching: boolean
    followingInProgress: string[]
}

type MapDispatchToPropsType = {
    follow: (userID: string) => void
    unfollow: (userID: string) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
    toggleFollowingInProgress: (isFetching: boolean, userId: string) => void
}

type PropsType = MapStateToPropsType & MapDispatchToPropsType

class UsersContainer extends React.Component<PropsType, StateType> {

    componentDidMount() {
        this.props.toggleIsFetching(true)
        getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
                this.props.setUsers(data.items)
                this.props.setTotalUsersCount(data.totalCount)
                this.props.toggleIsFetching(false)
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(pageNumber)
        getUsers(pageNumber, this.props.pageSize)
            .then(data => {
                this.props.setUsers(data.items)
                this.props.setTotalUsersCount(data.totalCount)
                this.props.toggleIsFetching(false)
            })
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
        users: state.usersReducer.users,
        totalUsersCount: state.usersReducer.totalUsersCount,
        pageSize: state.usersReducer.pageSize,
        currentPage: state.usersReducer.currentPage,
        isFetching: state.usersReducer.isFetching,
        followingInProgress: state.usersReducer.followingInProgress
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

export default connect(mapStateToProps, {follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching, toggleFollowingInProgress})(UsersContainer)