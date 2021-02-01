import React from 'react';
import {Story} from "@storybook/react";
import DialogItem, {DialogItemPropsType} from "../components/Dialogs/DialogItem/DialogItem";

export default {
    title: 'DialogItem',
    component: DialogItem
}

const testMessage = {name: 'Karl', id: 777}

const Template: Story<DialogItemPropsType> = (args) => <DialogItem {...args}/>
export const DialogItemRender = Template.bind({})
DialogItemRender.args = {
    /**
     * ID of a message
     */
    id: testMessage.id,
    /**
     * Name of a sender
     */
    name: testMessage.name
}