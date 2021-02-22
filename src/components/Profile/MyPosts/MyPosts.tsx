import React, {ChangeEvent} from 'react';
import classes from './MyPosts.module.css'
import Post from "./Post/Post";
import {PostsType} from "../../../redux/store";

export type myPostsPropsType = {
    posts: Array<PostsType>
    newPostText: string
    addPost: () => void
    updateNewPostText: (e: ChangeEvent<HTMLTextAreaElement>) => void
}

const MyPosts: React.FC<myPostsPropsType> = ({posts,newPostText, addPost, updateNewPostText}) => {
    const postsElements = posts.map(el => {
        return  <Post message={el.message} likesCount={el.likesCount}/>
    })

    return (
        <div>
            <h3 className={classes.postsBlock}>My posts</h3>
            <div>
                <div>
                    <textarea value={newPostText} onChange={updateNewPostText}></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
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