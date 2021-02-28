import React from "react";
import {UserType} from "../../redux/users-reducer";
import classes from './Users.module.css'

type UsersPropsType = {
    users: Array<UserType>
    follow: (userID: string) => void
    unfollow: (userID: string) => void
    setUsers: (users: Array<UserType>) => void
}

const Users: React.FC<UsersPropsType> = ({users, follow, unfollow, setUsers}) => {
    return <div>
        {
            users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img className={classes.userPhoto} src={u.avatarURL} alt=""/>
                    </div>
                    <div>
                        {
                            u.isFollowed ?
                                <button onClick={() => unfollow(u.id)}>Unfollow</button> :
                                <button onClick={() => follow(u.id)}>Follow</button>
                        }
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}

export default Users