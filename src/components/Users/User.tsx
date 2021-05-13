import React from "react";
import classes from "./Users.module.css";
import {NavLink} from "react-router-dom";
import defaultAvatar from "../../assets/default-user-avatar.jpg";
import {UserType} from "../../redux/users-reducer";
import {useDispatch} from "react-redux";
import {Paginator} from "../common/Paginator/Paginator";

type UsersPropsType = {
    user: UserType
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    followingInProgress: string[]
}

const Users: React.FC<UsersPropsType> = ({user, follow, unfollow, followingInProgress}) => {

    const dispatch = useDispatch()

    return <div key={user.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + user.id}>
                            <img className={classes.userPhoto} src={user.photos.small ? user.photos.small : defaultAvatar}
                                 alt="user avatar"/>
                        </NavLink>
                    </div>
                    <div>
                        {
                            user.followed ?
                                <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                                    dispatch(unfollow(user.id))
                                }
                                }>Unfollow</button> :
                                <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                                    dispatch(follow(user.id))
                                }
                                }>Follow</button>
                        }
                    </div>
                </span>
        <span>
                    <span>
                        <div>{user.name}</div>
                        <div>{user.status}</div>
                    </span>
                </span>
    </div>
}

export default Users