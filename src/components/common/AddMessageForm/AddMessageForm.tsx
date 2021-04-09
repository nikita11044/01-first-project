import * as React from 'react';
import {
    Formik,
    Form,
    useField, FormikProps,
} from 'formik';

type AddMessageFormikPropsType = {
    sendMessage: (message: string) => void
    placeholder: string
}

type MyTextAreaPropsType = {
    name: string
    placeholder: string
}

interface MyFormValues {
    message: string;
}

export const AddMessageForm: React.FC<AddMessageFormikPropsType> = ({sendMessage, placeholder}) => {
    const initialValues: MyFormValues = {message: ''};
    return (
        <div>
            <Formik
                initialValues={initialValues}
                onSubmit={(values, formikHelpers) => {
                    sendMessage(values.message)
                    formikHelpers.resetForm()
                }}
                render={({handleSubmit}: FormikProps<MyFormValues>) => {
                    return <form
                        onSubmit={handleSubmit}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter' && !e.shiftKey) {
                                e.preventDefault()
                                handleSubmit();
                            }
                        }}>
                        <MyTextArea name="message" placeholder={placeholder}/>
                        <button type="submit">Submit</button>
                    </form>
                }}
            />
        </div>
    );
};

const MyTextArea: React.FC<MyTextAreaPropsType> = ({...props}) => {
    const [field] = useField(props)
    return (
        <>
            <textarea {...field} {...props}></textarea>
        </>
    )
}