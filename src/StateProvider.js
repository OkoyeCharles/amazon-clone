import React, { createContext, useContext, useReducer } from 'react'

// Prepares The dataLayer
export const StateContext = createContext();

// Provide the dataLayer
export const StateProvider = ({ reducer, initialState, children}) => {
  return <StateContext.Provider value = {useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
};

// Pull Info from the dataLayer
export const useStateValue = () => useContext(StateContext);
