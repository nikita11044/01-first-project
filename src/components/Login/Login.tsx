import React from "react";
import {Form, Field} from "react-final-form"

const Login: React.FC = () => {
    return (
        <div>
            <h1>Login</h1>
            <LoginForm />
        </div>
    )
}

const LoginForm: React.FC = () => {

    type LoginFormValuesType = {
        login: string,
        password: string,
        rememberMe: boolean
    }

    const onSubmit = (values: LoginFormValuesType) => {
        console.log(values)
    }

    return (
        <Form
            onSubmit={onSubmit}
            render={({handleSubmit}) => (
                <form onSubmit={handleSubmit}>
                    <div>
                        <Field
                            name="login"
                            component="input"
                            placeholder="Login"
                        />
                    </div>
                    <div>
                        <Field
                            name="password"
                            type="password"
                            component="input"
                            placeholder="Password"
                        />
                    </div>
                    <div>
                        <label>
                            <Field
                                name="remember"
                                component="input"
                                type="checkbox"
                            />{' '}
                            Remember me
                        </label>
                    </div>
                    <div>
                        <button type="submit">Login</button>
                    </div>
                </form>
            )}
        />
    )
}

export default Login