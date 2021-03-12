import {createStore, combineReducers} from 'redux'
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import usersReducer from "./users-reducer";

const reducers = combineReducers({
    profileReducer: profileReducer,
    dialogReducer: dialogsReducer,
    usersReducer: usersReducer
})

type RootReducerType = typeof reducers
export type AppStateType = ReturnType<RootReducerType>

let store = createStore(reducers)
export type AppStoreType = typeof store

// @ts-ignore
window.store = store

export default store;