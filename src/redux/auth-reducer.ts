import {actions, ActionTypes} from "./action-creators";
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {AppStateType} from "./redux-store";
import {authAPI} from "../api/api";

let initialState = {
    id: 0,
    email: '',
    login: '',
    isAuth: false
}

type InitialStateType = {
    id: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean
}

export const authReducer = (state: InitialStateType = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case "SET-USER-DATA": {
            return {
                ...action.payload
            }
        }
        default: {
            return state
        }
    }
}

type ThunkType = ThunkAction<void, AppStateType, unknown, ActionTypes>

export const getAuthUserData = (): ThunkType => async (dispatch: ThunkDispatch<AppStateType, unknown, ActionTypes>) => {
    let response = await authAPI.getAuthUserData()
    if (response.data.resultCode === 0) {
        const {email, id, login} = response.data.data
        dispatch(actions.setUserData(id, email, login, true))
    }
}

export const login = (email: string, password: string, rememberMe: boolean): ThunkType => async (dispatch: ThunkDispatch<AppStateType, unknown, ActionTypes>) => {
    let response = await authAPI.login(email, password, rememberMe)
    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData())
    }
}

export const logout = (): ThunkType => async (dispatch: ThunkDispatch<AppStateType, unknown, ActionTypes>) => {
    let response = await authAPI.logout()
    dispatch(actions.setUserData(null, null, null, false))
}