import React, {useEffect} from 'react'
import {useFormik} from "formik";
import {useDispatch, useSelector} from "react-redux";
import {Redirect} from "react-router-dom"
import {AppStateType} from "../../redux/redux-store";
import {getCaptchaUrlTC, login} from "../../redux/auth-reducer";
import styles from "./Login.module.css";
import {getCaptchaUrl, getIsAuth} from "../../redux/selectors/auth-selectors";

type FormikErrorType = {
    email?: string
    password?: string
    rememberMe?: boolean
}

export const Login = () => {

    const dispatch = useDispatch()
    const isAuth = useSelector<AppStateType, boolean>(state => getIsAuth(state))
    const captchaUrl = useSelector<AppStateType, string | null>(state => getCaptchaUrl(state))

    useEffect(() => {
        dispatch(getCaptchaUrlTC())
    }, [])

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false
        },
        validate: (values) => {
            const errors: FormikErrorType = {};
            if (!values.email) {
                errors.email = 'Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }
            if (!values.password) {
                errors.password = 'Required'
            } else if (values.password.length < 3) {
                errors.password = 'Invalid password'
            }
            return errors;
        },
        onSubmit: values => {
            const {email, password, rememberMe} = values
            dispatch(login(email, password, rememberMe))
            formik.resetForm()
        }
    })

    if (isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return <>
        <h1>Login</h1>
        <form className={styles.loginForm} onSubmit={formik.handleSubmit}>
            <label htmlFor="email">Email</label>
            <input type="email" {...formik.getFieldProps('email')}/>
            {formik.touched.email && formik.errors.email && <div className={styles.error}>{formik.errors.email}</div>}
            <label htmlFor="password">Password</label>
            <input type="password" {...formik.getFieldProps('password')}/>
            {formik.touched.password && formik.errors.password &&
            <div className={styles.error}>{formik.errors.password}</div>}
            {captchaUrl && <img src={captchaUrl}/>}
            <label htmlFor="rememberMe">Remember Me</label>
            <input type="checkbox" {...formik.getFieldProps('rememberMe')}/>
            <button>Log in</button>
        </form>
    </>
}