import React from "react";
import {UserType} from "../../redux/users-reducer";
import classes from './Users.module.css'
import axios from "axios"
import defaultAvatar from '../../assets/default-user-avatar.jpg'

type StateType = {
    users: Array<UserType>
}

type UsersPropsType = {
    users: Array<UserType>
    follow: (userID: string) => void
    unfollow: (userID: string) => void
    setUsers: (users: Array<UserType>) => void
}

type MapStateToPropsType = {
    users: Array<UserType>
}

type MapDispatchToPropsType = {
    follow: (userID: string) => void
    unfollow: (userID: string) => void
    setUsers: (users: Array<UserType>) => void
}

type PropsType = UsersPropsType & MapStateToPropsType & MapDispatchToPropsType

class Users extends React.Component<PropsType, StateType>{

    constructor(props: PropsType) {
        super(props);
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render() {
        return <div>
            {
                this.props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img className={classes.userPhoto} src={u.photos.small ? u.photos.small : defaultAvatar} alt=""/>
                    </div>
                    <div>
                        {
                            u.followed ?
                                <button onClick={() => this.props.unfollow(u.id)}>Unfollow</button> :
                                <button onClick={() => this.props.follow(u.id)}>Follow</button>
                        }
                    </div>
                </span>
                    <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                </span>
                </div>)
            }
        </div>
    }
}

export default Users