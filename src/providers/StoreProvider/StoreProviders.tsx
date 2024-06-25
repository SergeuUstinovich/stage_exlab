import { ReactNode } from "react";
import { Provider } from "react-redux";
import { createReduxStore } from "./config/store";

interface StoreProvidersProps {
    children?: ReactNode
}

function StoreProviders({children}: StoreProvidersProps) {

    const store = createReduxStore()

    return(
        <Provider store={store}>
            {children}
        </Provider>
    )
}

export default StoreProviders