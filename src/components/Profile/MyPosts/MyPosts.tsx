import React from 'react';
import {PostsType} from "../../../redux/profile-reducer";
import {AddMessageForm} from "../../common/AddMessageForm/AddMessageForm";
import {Avatar, List, Space} from "antd";
import {LikeOutlined} from "@ant-design/icons";


export type MyPostsPropsType = {
    isOwner: boolean
    posts: Array<PostsType>
    addPost: (post: string) => void
}

const MyPosts: React.FC<MyPostsPropsType> = React.memo(({posts, addPost, isOwner}) => {
    const postsElements = posts.map(el => {
        return {
            avatar: "https://www.cheltv.ru/wp-content/uploads/2018/05/egikG.jpg",
            content: el.message,
            userId: el.id,
            likesCount: el.likesCount
        }
    })

    return <>
        {isOwner && <AddMessageForm sendMessage={addPost} placeholder={`What's new? Tell us!`}/>}
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