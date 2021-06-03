import React, {useEffect} from 'react'
import {useFormik} from "formik";
import {useDispatch, useSelector} from "react-redux";
import {Redirect} from "react-router-dom"
import {AppStateType} from "../../redux/redux-store";
import {getCaptchaUrlTC, login} from "../../redux/auth-reducer";
import styles from "./Login.module.css";
import {getCaptchaUrl, getIsAuth} from "../../redux/selectors/auth-selectors";
import {Button, Checkbox, Form, Input, message, notification} from "antd";
import {action} from "@storybook/addon-actions";
import {actions} from "../../redux/action-creators";

// type FormikErrorType = {
//     email?: string
//     password?: string
//     rememberMe?: boolean
// }

type FormValuesType = {
    email: string
    password: string
    rememberMe: boolean
    captcha: string | null
}

export const Login = () => {

    const dispatch = useDispatch()
    const isAuth = useSelector<AppStateType, boolean>(state => getIsAuth(state))
    const captchaUrl = useSelector<AppStateType, string | null>(state => getCaptchaUrl(state))
    const error = useSelector<AppStateType, string | null>(state => state.app.error)

    useEffect(() => {
        dispatch(getCaptchaUrlTC())
        if(error) message.error(error, 1.5, () => dispatch(actions.setAppError(null)))
    }, [error])

    const onFinish = (values: FormValuesType) => {
        const {email, password, rememberMe, captcha = null} = values
        dispatch(login(email, password, rememberMe, captcha))
    }

    if (isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return <Form
        name="login"
        initialValues={{
            remember: true,
        }}
        onFinish={onFinish}
    >
        <Form.Item
            label="Email"
            name="email"
            rules={[
                {
                    required: true,
                    message: 'Please enter your email!',
                },
                {
                    type: 'email',
                    message: 'Invalid format. Please, enter an email!'
                }
            ]}
        >
            <Input/>
        </Form.Item>

        <Form.Item
            label="Password"
            name="password"
            rules={[
                {
                    required: true,
                    message: 'Please enter your password!',
                },
            ]}
        >
            <Input.Password/>
        </Form.Item>

        {captchaUrl &&
        <>
            <img src={captchaUrl}/>
            <Form.Item
                label="Please, enter text from the picture"
                name="captcha"
                rules={[
                    {
                        required: true,
                        message: 'Please, enter captcha'
                    }
                ]}
            >

                <Input/>
            </Form.Item>
        </>}

        <Form.Item name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item>
            <Button type="primary" htmlType="submit">
                Submit
            </Button>
        </Form.Item>
    </Form>
}