import React from "react";
import {Field, Form} from "react-final-form";
import TextAreaInput from "./TextAreaInput/TextAreaInput";

type AddMessageFormPropsType = {
    sendMessage: (message: string) => void
}

type AddMessageFormValuesType = {
    message: string
}


const AddMessageForm: React.FC<AddMessageFormPropsType> = ({sendMessage}) => {

    const onSubmit = (value: AddMessageFormValuesType) => {
        sendMessage(value.message)

    }

    return (
        <Form
            onSubmit={onSubmit}
            render={({ handleSubmit, form }) => (
                <form onSubmit={handleSubmit}>
                    <div>
                        <Field name="message" component={TextAreaInput} placeholder="Enter your message" />
                    </div>
                    <div>
                        <button type="submit">Send</button>
                    </div>
                </form>
            )}
        />
    )
}

export default AddMessageForm