import React, { useContext, useReducer} from 'react';

const StateContext = React.createContext();

const StateProvider = ({Reducer, initialState, children})=>{
    
    return(
        <StateContext.Provider value = {useReducer(Reducer, initialState)}>
            {children}
        </StateContext.Provider>
    )
}

const useStateValue = () => useContext(StateContext);

export { StateContext, StateProvider, useStateValue}