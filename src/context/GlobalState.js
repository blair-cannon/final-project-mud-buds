import React, {
    createContext,
    useReducer,
    useContext,
  } from 'react';
  
  import jwtDecode from 'jwt-decode'
  
  let user = JSON.parse(localStorage.getItem('user'));
  let savedDogs = JSON.parse(localStorage.getItem('mydogs'));
  let savedConversations = JSON.parse(localStorage.getItem('myconversations'));

  
  const initialState = {
    currentUser: user ? jwtDecode(user.access) : null,
    currentUserToken: user ? user.access : null,
    dogs: savedDogs ? savedDogs : [],
    conversations: savedConversations ? savedConversations : [],
  }
  
  const GlobalStateContext = createContext(initialState);
  const DispatchStateContext = createContext(undefined)
  
  export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(
      (state, newValue) => ({ ...state, ...newValue }),
      initialState
    );
  
    return (
      <GlobalStateContext.Provider value={state}>
        <DispatchStateContext.Provider value={dispatch}>
          {children}
        </DispatchStateContext.Provider>
      </GlobalStateContext.Provider>
    )
  }
  
  export const useGlobalState = () => [
    useContext(GlobalStateContext),
    useContext(DispatchStateContext)
  ];
  