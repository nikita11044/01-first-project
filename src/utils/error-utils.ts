import {Dispatch} from 'redux'
import {CommonResponseType} from "../api/api";
import {actions} from "../redux/action-creators";

export const handleServerAppError = <D>(data: CommonResponseType<D>, dispatch: Dispatch) => {
    if (data.messages.length) {
        dispatch(actions.setAppError(data.messages[0]))
    } else {
        dispatch(actions.setAppError('Some error occurred'))
    }
    // dispatch(setAppStatusAC({status: 'failed'}))
}

export const handleServerNetworkError = (error: { message: string }, dispatch: Dispatch) => {
    dispatch(actions.setAppError(error.message ? error.message : 'Some error occurred'))
    // dispatch(setAppStatusAC({status: 'failed'}))
}