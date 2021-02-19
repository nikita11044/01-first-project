import React, {ChangeEvent} from 'react';
import classes from './MyPosts.module.css'
import Post from "./Post/Post";
import {ActionTypes, PostsType} from "../../../redux/state";
import {AddPostAC, UpdatePostTextAC} from "../../../redux/profile-reducer";

export type myPostsPropsType = {
    posts: Array<PostsType>
    newPostText: string
    dispatch: (action: ActionTypes) => void
}

const MyPosts: React.FC<myPostsPropsType> = ({posts,newPostText, dispatch}) => {
    const postsElements = posts.map(el => {
        return  <Post message={el.message} likesCount={el.likesCount}/>
    })

    const addPostCallback = () => {
        dispatch(AddPostAC())
    }

    const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        dispatch(UpdatePostTextAC(e.currentTarget.value))
    }

    return (
        <div>
            <h3 className={classes.postsBlock}>My posts</h3>
            <div>
                <div>
                    <textarea value={newPostText} onChange={onChange}></textarea>
                </div>
                <div>
                    <button onClick={addPostCallback}>Add post</button>
                </div>
            </div>
            <div className={classes.posts}>
                {
                    postsElements
                }
            </div>
        </div>
    );
}

export default MyPosts;