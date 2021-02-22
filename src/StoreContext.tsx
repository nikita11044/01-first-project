import React from "react";
import store, {AppStoreType} from "./redux/redux-store";


const StoreContext = React.createContext(store)

export type ProviderType = {
    store: AppStoreType,
    children: any
}

export const Provider = (props: ProviderType) => {
    return <StoreContext.Provider value={props.store}>
        {props.children}
    </StoreContext.Provider>
}

export default StoreContext