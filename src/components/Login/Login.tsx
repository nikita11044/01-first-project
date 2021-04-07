import React from "react";
import {Field, Form, Formik} from "formik";

const Login: React.FC = () => {
    return (
        <div>
            <h1>Login</h1>
            <LoginForm />
        </div>
    )
}

const LoginForm: React.FC = () => {

    const initialValues = { login: '', password: '', rememberMe: false };
    return (
        <div>
            <Formik
                initialValues={initialValues}
                onSubmit={(values) => {
                    console.log(values)
                }}
            >
                <Form>
                    <label htmlFor="login">Login</label>
                    <Field name="login" />

                    <label htmlFor="password">Password</label>
                    <Field type="password" name="password" />

                    <label htmlFor="rememberMe">Remember me</label>
                    <Field type="checkbox" name="rememberMe" />

                    <button type="submit">Submit</button>
                </Form>
            </Formik>
        </div>
    );
}

export default Login