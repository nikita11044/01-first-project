import React, {ChangeEvent} from 'react';
import classes from './MyPosts.module.css'
import Post from "./Post/Post";
import {
    AddPostAC,
    AddPostActionType,
    PostsType, SendMessageActionType,
    UpdateNewMessageBodyActionType,
    UpdateTextAC,
    UpdateTextActionType
} from "../../../redux/state";

export type myPostsPropsType = {
    posts: Array<PostsType>
    newPostText: string
    dispatch: (action: AddPostActionType | UpdateTextActionType | UpdateNewMessageBodyActionType | SendMessageActionType) => void
}

const MyPosts: React.FC<myPostsPropsType> = ({posts,newPostText, dispatch}) => {
    const postsElements = posts.map(el => {
        return  <Post message={el.message} likesCount={el.likesCount}/>
    })

    const addPostCallback = () => {
        dispatch(AddPostAC())
    }

    const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        dispatch(UpdateTextAC(e.currentTarget.value))
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