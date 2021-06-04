import {actions, ActionTypes} from "./action-creators";
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {AppStateType} from "./redux-store";
import {getAuthUserData} from "./auth-reducer";

export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

let initialState = {
    appStatus: 'loading' as RequestStatusType,
    error: null as string | null
}

type InitialStateType = typeof initialState

export const appReducer = (state: InitialStateType = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case "SET-APP-STATUS": {
            return {
                ...state,
                appStatus: action.appStatus
            }
        }
        case "SET-APP-ERROR": {
            return {
                ...state,
                error: action.error
            }
        }
        default: {
            return state
        }
    }
}

type ThunkType = ThunkAction<void, AppStateType, unknown, ActionTypes>

export const initializeApp = (): ThunkType => (dispatch: ThunkDispatch<AppStateType, unknown, ActionTypes>) => {
    let promise = dispatch(getAuthUserData())
    Promise.all([promise]).then(() => dispatch(actions.setAppStatus('succeeded')))
}