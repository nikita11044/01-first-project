import React from 'react';
import {Story} from "@storybook/react";
import MessageItem, {MessageItemPropsType} from "../components/Dialogs/MessageItem/MessageItem";

export default {
    title: 'MessageItem',
    component: MessageItem
}

const testMessage = 'test'

const Template: Story<MessageItemPropsType> = (args) => <MessageItem {...args}/>
export const MessageItemRender = Template.bind({})
MessageItemRender.args = {
    /**
     * A text of a message
     */
    message: testMessage
}