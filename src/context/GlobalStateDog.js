import { useGlobalState } from "./GlobalState";
import React, { createContext, useReducer, useContext, useEffect } from 'react';


//   creates a global state for the dog profile that we are on based on who is logged in 
  const initialDogState = {
    dogs: []}
  
  const GlobalStateDogContext = createContext(initialDogState);
  const DispatchStateDogContext = createContext(undefined)
  
  export const GlobalProvider = ({ children }) => {
    
    const [dogState, dogDispatch] = useReducer(
      (dogState, newValue) => ({ ...dogState, ...newValue }),
      initialDogState,
    );

    return (
      <GlobalStateDogContext.Provider value={dogState}>
        <DispatchStateDogContext.Provider value={dogDispatch}>
          {children}
        </DispatchStateDogContext.Provider>
      </GlobalStateDogContext.Provider>
    )
  }
  
  export const useGlobalState = () => [
    useContext(GlobalStateDogContext),
    useContext(DispatchStateDogContext)
  ];