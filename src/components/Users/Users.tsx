import React from "react";
import {UserType} from "../../redux/users-reducer";
import {useDispatch} from "react-redux";
import {Paginator} from "../common/Paginator/Paginator";
import User from "./User";

type UsersPropsType = {
    users: UserType[]
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    followingInProgress: string[]
}

const Users: React.FC<UsersPropsType> = ({
                                             users,
                                             totalUsersCount,
                                             pageSize,
                                             currentPage,
                                             unfollow,
                                             follow,
                                             onPageChanged,
                                             followingInProgress,
                                         }) => {

    const dispatch = useDispatch()

    return <div>
        <Paginator currentPage={currentPage} onPageChanged={onPageChanged} pageSize={pageSize} totalUsersCount={totalUsersCount}/>
        {
            users.map(user => <User key={user.id} user={user} follow={follow} unfollow={unfollow} followingInProgress={followingInProgress}/>)
        }
    </div>
}

export default Users