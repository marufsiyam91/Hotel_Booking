/* eslint-disable react/prop-types */
import { createContext, useReducer,  } from "react";

export const TourContext = createContext();

const initialValue = {
    user: false
}

const reducer = (state, action) => {
    switch(action.type){
        case 'isUser':
            return{
                ...state,
                user: true,
            };
        case 'userLogout':
            return{
                ...state,
                user:false,
            };
        case 'storeUser':
            return {
                ...state,
                user: true,
            }

    }
}



const TourContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialValue)
    return (
        <TourContext.Provider value={{state, dispatch}}>
            {children}
        </TourContext.Provider>
    )
}

export default TourContextProvider