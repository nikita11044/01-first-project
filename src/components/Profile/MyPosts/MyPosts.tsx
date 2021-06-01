import React from 'react';
import classes from './MyPosts.module.css'
import Post from "./Post/Post";
import {PostsType} from "../../../redux/profile-reducer";
import {AddMessageForm} from "../../common/AddMessageForm/AddMessageForm";
import {Avatar, List, Space} from "antd";
import {LikeOutlined} from "@ant-design/icons";


export type MyPostsPropsType = {
    posts: Array<PostsType>
    addPost: (post: string) => void
}

const MyPosts: React.FC<MyPostsPropsType> = React.memo(({posts, addPost}) => {
    // const postsElements = posts.map(el => {
    //     return  <Post key={el.id} message={el.message} likesCount={el.likesCount}/>
    // })
    //
    // return (
    //     <>
    //         <h3 className={classes.postsBlock}>My posts</h3>
    //         <div>
    //             <AddMessageForm sendMessage={addPost} placeholder={`What's new? Tell us!`}/>
    //         </div>
    //         <div className={classes.posts}>
    //             {
    //                 postsElements
    //             }
    //         </div>
    //     </>
    // );

    const postsElements = posts.map(el => {
        return {
            avatar: "https://www.cheltv.ru/wp-content/uploads/2018/05/egikG.jpg",
            content: el.message,
            userId: el.id,
            likesCount: el.likesCount
        }
    })

    return <>
        <AddMessageForm sendMessage={addPost} placeholder={`What's new? Tell us!`}/>
        <List
            itemLayout="vertical"
            size="small"
            dataSource={postsElements}
            renderItem={item => (
                <List.Item
                    key={item.userId}
                    actions={[
                        <Space>
                            <LikeOutlined/>
                            {item.likesCount}
                        </Space>
                    ]}
                >
                    <List.Item.Meta
                        avatar={<Avatar src={item.avatar} />}
                    />
                    {item.content}
                </List.Item>
            )}
        /></>
})

export default MyPosts;