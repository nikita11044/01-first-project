import React from 'react';
import classes from './MyPosts.module.css'
import Post from "./Post/Post";
import {PostsType} from "../../../redux/profile-reducer";

export type MyPostsPropsType = {
    // posts: Array<PostsType>
    // newPostText: string
    // addPost: () => void
    // updatePostText: (e: ChangeEvent<HTMLTextAreaElement>) => void
    posts: Array<PostsType>
    newPostText: string
    addPost: () => void
    updatePostText: (newText: string) => void
}

const MyPosts: React.FC<MyPostsPropsType> = ({posts,newPostText, addPost, updatePostText}) => {
    const postsElements = posts.map(el => {
        return  <Post key={el.id} message={el.message} likesCount={el.likesCount}/>
    })

    return (
        <div>
            <h3 className={classes.postsBlock}>My posts</h3>
            <div>
                <div>
                    <textarea value={newPostText} onChange={(e) => updatePostText(e.currentTarget.value)}></textarea>
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