import * as React from 'react';
import {
    Formik,
    useField, FormikProps,
} from 'formik';
import * as Yup from 'yup';
import {Button, Form, FormInstance, Input} from "antd";
import TextArea from "antd/es/input/TextArea";
import {KeyboardEventHandler, Ref, useRef} from "react";

type AddMessagePropsType = {
    dialogId?: string
    sendMessage: (message: string, receiverId?: string) => void
    placeholder: string
}

export const AddMessageForm: React.FC<AddMessagePropsType> = ({dialogId, sendMessage, placeholder}) => {

    const [form] = Form.useForm()

    const onFinish = (values: { message: string }) => {
        if (values.message !== '') {
            dialogId
                ? sendMessage(values.message, dialogId)
                : sendMessage(values.message)
            form.resetFields()
        }
    }

    return <Form form={form} name="addMessageForm" initialValues={{message: ''}} onFinish={onFinish}>
        <Form.Item name="message">
            <TextArea placeholder={placeholder} style={{resize: 'none'}}></TextArea>
        </Form.Item>
        <Form.Item>
            <Button type="primary" htmlType="submit">
                Send
            </Button>
        </Form.Item>
    </Form>
};