import React, {useCallback} from "react";
import styles from './Login.module.css';
import {useFormik} from "formik";
import * as Yup from 'yup';
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";
import {Redirect} from "react-router-dom";
import {getIsAuth} from "../../redux/selectors/auth-selectors";

type MapStateToPropsType = {
    isAuth: boolean
}

type LoginPropsType = {
    isAuth: boolean
}

type LoginFormPropsType = {
    login: (email: string, password: string, rememberMe: boolean) => void
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        isAuth: getIsAuth(state)
    }
}

const LoginOld: React.FC<LoginPropsType> = ({isAuth}) => {

    if (isAuth) {
        return <Redirect to="/profile"/>
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginForm login={login} />
        </div>
    )
}

const LoginForm: React.FC<LoginFormPropsType> = ({login}) => {
    const {handleSubmit, handleChange, values, touched, errors, setFieldTouched, setFieldValue} = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false
        },
        validationSchema: Yup.object().shape({
            email: Yup.string().required('Email is required'),
            password: Yup.string().min(8, 'Password is too short').required('Password is required')
        }),
        onSubmit: ({email, password, rememberMe}) => {
            login(email, password, rememberMe)
        }
    })

    return (
        <form className={styles.loginForm} onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input name="email" value={values.email} type="email" autoFocus onBlur={() => {setFieldTouched('email', false, false)}} onChange={handleChange}/>
            {touched.email && errors.email && <div className={styles.error}>{errors.email}</div>}
            <label htmlFor="password">Password</label>
            <input name="password" value={values.password} type="password" autoFocus onBlur={() => {setFieldTouched('password', false, false)}} onChange={handleChange}/>
            {touched.password && errors.password && <div className={styles.error}>{errors.password}</div>}
            <label htmlFor="rememberMe">Remember Me</label>
            <input name="rememberMe" checked={values.rememberMe} type="checkbox" onChange={() => setFieldValue('rememberMe', !values.rememberMe)}/>
            <button>Log in</button>
        </form>
    )
}


export default connect<MapStateToPropsType, {}, {}, AppStateType>(mapStateToProps, {})(LoginOld)
