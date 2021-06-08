import React from "react";
import {UserType} from "../../redux/users-reducer";
import User from "./User";
import classes from './Users.module.css'
import {Pagination} from "antd";

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

    return <div>
        <Pagination className={classes.pagination} current={currentPage} pageSize={pageSize} onChange={onPageChanged} total={totalUsersCount}/>
        {
            users.map(user => <User key={user.id} user={user} follow={follow} unfollow={unfollow}
                                    followingInProgress={followingInProgress}/>)
        }
    </div>
}

export default Users