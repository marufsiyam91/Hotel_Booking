/* eslint-disable react/prop-types */
import { createContext, useReducer } from "react";

export const TourContext = createContext();

const initialValue = {
    sortBy: ''
}


const reducer = (state, action) => {
    switch (action.type){
        case 'sortify':
            return{
                ...state,
                sortBy: action.payload
            }
    }

}



const TourContextProvider = ({children}) => {
    const {state, dispatch} = useReducer(reducer, initialValue)
    return (
        <TourContext.Provider value={{state, dispatch}}>
            {children}
        </TourContext.Provider>
    )
}

export default TourContextProvider