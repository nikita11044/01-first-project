import {AppStateType} from "../redux-store";

export const getIsAuth = (state: AppStateType): boolean => {
    return state.auth.isAuth
}

export const getAuthorizedUserId = (state: AppStateType): number | null => {
    return state.auth.id
}

export const getCaptchaUrl = (state: AppStateType): string | null=> {
    return state.auth.captchaUrl
}

export const getLogin = (state: AppStateType): string | null => {
    return state.auth.login
}