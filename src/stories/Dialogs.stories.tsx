import React from 'react';
import {Story} from "@storybook/react";
import Dialogs, {DialogsPropsType} from "../components/Dialogs/Dialogs";
import {v1} from "uuid";

export default {
    title: 'Dialogs',
    component: Dialogs
}

const dialogsPage = {
    dialogs: [
        {id: v1(), name: 'Dietrich'},
        {id: v1(), name: 'Wolfgang'},
        {id: v1(), name: 'Helen'},
        {id: v1(), name: 'Klaus'},
        {id: v1(), name: 'Brigitte'},
        {id: v1(), name: 'Marlene'}
    ],
        messages: [
        {id: v1(), message: 'Hi!'},
        {id: v1(), message: 'How are you?'},
        {id: v1(), message: 'Yo'}
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