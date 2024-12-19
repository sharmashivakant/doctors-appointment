import { createContext } from "react";
import {doctors} from '../assets/assets'

export const AppContext = createContext()

const AppContextProvider = (props) =>{

    const currencySymbol = '$'

    const value ={
        doctors,
        currencySymbol,
        // other state and methods here...
    }
    return(
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;