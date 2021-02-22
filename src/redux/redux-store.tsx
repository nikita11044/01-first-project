import {createStore, combineReducers} from 'redux'
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

const reducers = combineReducers({
    profileReducer: profileReducer,
    dialogReducer: dialogsReducer
})

type RootReducerType = typeof reducers
export type AppStateType = ReturnType<RootReducerType>

let store = createStore(reducers)
export type AppStoreType = typeof store

export default store;