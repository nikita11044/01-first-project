import React from 'react';
import classes from './MyPosts.module.css'
import Post from "./Post/Post";
import {PostsType} from "../../../redux/profile-reducer";
import {AddMessageForm} from "../../common/AddMessageForm/AddMessageForm";


export type MyPostsPropsType = {
    // posts: Array<PostsType>
    // newPostText: string
    // addPost: () => void
    // updatePostText: (e: ChangeEvent<HTMLTextAreaElement>) => void
    posts: Array<PostsType>
    addPost: (post: string) => void
}

const MyPosts: React.FC<MyPostsPropsType> = ({posts, addPost}) => {
    const postsElements = posts.map(el => {
        return  <Post key={el.id} message={el.message} likesCount={el.likesCount}/>
    })

    return (
        <>
            <h3 className={classes.postsBlock}>My posts</h3>
            <div>
                <AddMessageForm sendMessage={addPost} placeholder={`What's new? Tell us!`}/>
            </div>
            <div className={classes.posts}>
                {
                    postsElements
                }
            </div>
        </>
    );
}

export default MyPosts;