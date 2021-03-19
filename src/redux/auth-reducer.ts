let initialState = {
    id: 0,
    email: '',
    login: '',
    isAuth: false
}

type InitialStateType = typeof initialState

export const authReducer = (state: InitialStateType = initialState, action: ActionTypes) => {
    switch (action.type) {
        case "SET-USER_DATA": {
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

export const setData = (userID: number, email: string, login: string) => ({type: 'SET-USER_DATA', data: {userID, email, login}} as const)
export type SetDataActionType = ReturnType<typeof setData>

type ActionTypes = SetDataActionType