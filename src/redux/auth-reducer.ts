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

type InitialStateType = typeof initialState

export const authReducer = (state: InitialStateType = initialState, action: ActionTypes) => {
    switch (action.type) {
        case "SET-USER-DATA": {
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        }
        default: {
            return state
        }
    }
}

type ThunkType = ThunkAction<void, AppStateType, unknown, ActionTypes>

export const isAuthorized = (): ThunkType => {
    return (dispatch: ThunkDispatch<AppStateType, unknown, ActionTypes>) => {
        authAPI.isAuthorized()
            .then(response => {
                if (response.data.resultCode === 0) {
                    const {email, id, login} = response.data.data
                    dispatch(actions.setData(id, email, login))
                }
            })
    }
}