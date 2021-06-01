import {actions, ActionTypes} from "./action-creators";
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {AppStateType} from "./redux-store";
import {authAPI, securityAPI} from "../api/api";

let initialState = {
    id: 0,
    email: '',
    login: '',
    isAuth: false,
    captchaUrl: null
}

type InitialStateType = {
    id: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean
    captchaUrl: string | null
}

export const authReducer = (state: InitialStateType = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case "SET-USER-DATA": {
            return {
                ...action.payload,
                captchaUrl: null
            }
        }
        case "GET-CAPTCHA-URL-SUCCESS": {
            return {
                ...state,
                captchaUrl: action.url
            }
        }
        default: {
            return state
        }
    }
}

type ThunkType = ThunkAction<void, AppStateType, unknown, ActionTypes>

export const getAuthUserData = (): ThunkType => async (dispatch: ThunkDispatch<AppStateType, unknown, ActionTypes>) => {
    const response = await authAPI.getAuthUserData()
    if (response.data.resultCode === 0) {
        const {email, id, login} = response.data.data
        dispatch(actions.setUserData(id, email, login, true))
    }
}

export const login = (email: string, password: string, rememberMe: boolean, captcha: string | null): ThunkType => async (dispatch: ThunkDispatch<AppStateType, unknown, ActionTypes>) => {
    try {
        const response = await authAPI.login(email, password, rememberMe, captcha)
        if (response.data.resultCode === 0) {
            dispatch(getAuthUserData())
        } else if (response.data.resultCode === 10) {
            dispatch(getCaptchaUrlTC())
        }
    } catch (e) {

    }
}

export const logout = (): ThunkType => async (dispatch: ThunkDispatch<AppStateType, unknown, ActionTypes>) => {
    await authAPI.logout()
    dispatch(actions.setUserData(null, null, null, false))
}

export const getCaptchaUrlTC = (): ThunkType => async (dispatch: ThunkDispatch<AppStateType, unknown, ActionTypes>) => {
    const response = await securityAPI.getCaptchaUrl()
    const captchaUrl = response.data.url
    dispatch(actions.getCaptchaUrlSuccess(captchaUrl))
}