import React from 'react';
import {Story} from "@storybook/react";
import Post, {MessageProps} from "../components/Profile/MyPosts/Post/Post";

export default {
    title: 'Post',
    component: Post
}

const testMessage = {message: 'test', likesCount: 10}

const Template: Story<MessageProps> = (args) => <Post {...args}/>
export const PostRender = Template.bind({})
PostRender.args = {
    /**
     * A text of a message
     */
    message: testMessage.message,
    /**
     * Number of likes
     */
    likesCount: testMessage.likesCount
}