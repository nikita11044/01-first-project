import * as React from 'react';
import {
    Formik,
    FormikHelpers,
    FormikProps,
    Form,
    Field,
    FieldProps,
} from 'formik';

type AddMessageFormikPropsType = {
    sendMessage: (message: string) => void
    placeholder: string
}

interface MyFormValues {
    message: string;
}

export const AddMessageForm: React.FC<AddMessageFormikPropsType>  = ({sendMessage, placeholder}) => {
    const initialValues: MyFormValues = { message: '' };
    return (
        <div>
            <Formik
                initialValues={initialValues}
                onSubmit={(values) => {
                    sendMessage(values.message)
                }}
            >
                <Form>
                    <Field name="message" placeholder={placeholder} />
                    <button type="submit">Submit</button>
                </Form>
            </Formik>
        </div>
    );
};