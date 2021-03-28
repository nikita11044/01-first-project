import {createStore, combineReducers, applyMiddleware} from 'redux'
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import usersReducer from "./users-reducer";
import {authReducer} from "./auth-reducer";
import thunkMiddleware from "redux-thunk"

const reducers = combineReducers({
    profileReducer: profileReducer,
    dialogReducer: dialogsReducer,
    usersReducer: usersReducer,
    authReducer: authReducer
})

type RootReducerType = typeof reducers
export type AppStateType = ReturnType<RootReducerType>

let store = createStore(reducers, applyMiddleware(thunkMiddleware))
export type AppStoreType = typeof store

// @ts-ignore
window.store = store

export default store;