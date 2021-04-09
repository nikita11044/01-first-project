import React from "react";
import {Field, Form, Formik} from "formik";
import * as Yup from 'yup';

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
    const LoginValidationSchema = Yup.object().shape({
        login: Yup.string().required('Required'),
        password: Yup.string().required('Required')
    })

    return (
        <div>
            <Formik
                initialValues={initialValues}
                validationSchema={LoginValidationSchema}
                onSubmit={(values) => {
                    console.log(values)
                }}
            >
                {({errors, touched}) => (
                    <Form>
                        <label htmlFor="login">Login</label>
                        <Field name="login" />
                        {touched.login && errors.login && <div>{errors.login}</div>}
                        <label htmlFor="password">Password</label>
                        <Field type="password" name="password" />
                        {touched.password && errors.password && <div>{errors.login}</div>}
                        <label htmlFor="rememberMe">Remember me</label>
                        <Field type="checkbox" name="rememberMe" />
                        <button type="submit">Submit</button>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default Login