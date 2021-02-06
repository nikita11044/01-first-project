import React, {ChangeEvent, useState} from 'react';
import classes from './MyPosts.module.css'
import Post from "./Post/Post";
import {PostsType} from "../../../redux/state";

export type myPostsPropsType = {
    posts: Array<PostsType>
    newPostText: string
    addPost: (postMessage: string) => void
    updateText: (newText: string) => void
}

const MyPosts: React.FC<myPostsPropsType> = ({posts,newPostText, addPost, updateText}) => {
    // const [newPostTextValue, setNewPostTextValue] = useState<string>('')

    const postsElements = posts.map(el => {
        return  <Post message={el.message} likesCount={el.likesCount}/>
    })

    const addPostCallback = () => {
        addPost(newPostText)
    }

    const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        // setNewPostTextValue(e.currentTarget.value)
        updateText(e.currentTarget.value)
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