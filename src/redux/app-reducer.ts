import {actions, ActionTypes} from "./action-creators";
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {AppStateType} from "./redux-store";
import {authAPI} from "../api/api";
import {getAuthUserData} from "./auth-reducer";

let initialState = {
    initialized: false
}

type InitialStateType = typeof initialState

export const appReducer = (state: InitialStateType = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case "SET-USER-DATA": {
            return {
                ...state,
                initialized: true
            }
        }
        default: {
            return state
        }
    }
}

type ThunkType = ThunkAction<void, AppStateType, unknown, ActionTypes>

export const initializeApp: ThunkType = () => (dispatch: ThunkDispatch<AppStateType, unknown, ActionTypes>) => {
    dispatch(getAuthUserData())
}