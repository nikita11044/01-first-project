import {AppStateType} from "../redux-store";
import {RequestStatusType} from "../app-reducer";

export const getAppStatus = (state: AppStateType): RequestStatusType => {
    return state.app.appStatus
}