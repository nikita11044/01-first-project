import React from "react";
import styles from './Login.module.css';
import {useFormik} from "formik";
import * as Yup from 'yup';
import {connect} from "react-redux";
import {login, logout} from "../../redux/auth-reducer";

type LoginFormPropsType = {
    login: (email: string, password: string, rememberMe?: boolean) => void
    logout: () => void
}

const Login: React.FC = () => {
    return (
        <div>
            <h1>Login</h1>
            <LoginFormContainer/>
        </div>
    )
}

const LoginForm: React.FC<LoginFormPropsType> = ({login, logout}) => {
    const {handleSubmit, handleChange, values, touched, errors, setFieldTouched} = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false
        },
        validationSchema: Yup.object().shape({
            email: Yup.string().min(8, 'Login is too short').required('Required'),
            password: Yup.string().required('Required')
        }),
        onSubmit: ({email, password, rememberMe}) => {
            login(email, password, rememberMe)
        }
    })

    return (
        <form className={styles.loginForm} onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input name="email" value={values.email} type="email" autoFocus onBlur={() => {setFieldTouched('email', false, false)}} onChange={handleChange}/>
            {touched.email && errors.email && <div>{errors.email}</div>}
            <label htmlFor="password">Password</label>
            <input name="password" value={values.password} type="password" autoFocus onBlur={() => {setFieldTouched('password', false, false)}} onChange={handleChange}/>
            {touched.password && errors.password && <div>{errors.password}</div>}
            <label htmlFor="rememberMe">Remember Me</label>
            <input checked={values.rememberMe} type="checkbox" onChange={handleChange}/>
            <button>Log in</button>
        </form>
    )
}

const LoginFormContainer =  connect(null, {login, logout})(LoginForm)
export default Login