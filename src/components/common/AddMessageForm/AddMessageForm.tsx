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
    sendMessage: (message: string) => void
    placeholder: string
}

export const AddMessageForm: React.FC<AddMessagePropsType> = ({sendMessage, placeholder}) => {
    // const initialValues: MyFormValues = {message: ''};
    // return (
    //     <div>
    //         <Formik
    //             initialValues={initialValues}
    //             validationSchema={MessageValidationSchema}
    //             onSubmit={(values, formikHelpers) => {
    //                 sendMessage(values.message)
    //                 formikHelpers.resetForm()
    //             }}
    //             render={({handleSubmit}: FormikProps<MyFormValues>) => {
    //                 return <form
    //                     onSubmit={handleSubmit}
    //                     onKeyDown={(e) => {
    //                         if (e.key === 'Enter' && !e.shiftKey) {
    //                             e.preventDefault()
    //                             handleSubmit();
    //                         }
    //                     }}>
    //                     <MyTextArea name="message" placeholder={placeholder}/>
    //                     <button type="submit">Submit</button>
    //                 </form>
    //             }}
    //         />
    //     </div>
    // );

    const [form] = Form.useForm()

    const onFinish = (values: { message: string }) => {
        if (values.message !== '') {
            sendMessage(values.message)
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