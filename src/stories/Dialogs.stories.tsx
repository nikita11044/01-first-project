import React from 'react';
import {Story} from "@storybook/react";
import Dialogs, {DialogsPropsType} from "../components/Dialogs/Dialogs";

export default {
    title: 'Dialogs',
    component: Dialogs
}

const dialogsPage = {
    dialogs: [
        {id: 1, name: 'Dietrich'},
        {id: 2, name: 'Wolfgang'},
        {id: 3, name: 'Helen'},
        {id: 4, name: 'Klaus'},
        {id: 5, name: 'Brigitte'},
        {id: 6, name: 'Marlene'}
    ],
        messages: [
        {id: 1, message: 'Hi!'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Yo'}
    ]
}

const Template: Story<DialogsPropsType> = (args) => <Dialogs {...args}/>
export const DialogsRender = Template.bind({})
DialogsRender.args = {
    /**
     * Array of messages
     */
    messages: dialogsPage.messages,
    /**
     * Array of dialogs
     */
    dialogs: dialogsPage.dialogs
}