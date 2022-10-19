import { createContext, useReducer } from 'react';

const GlobalContext = createContext();

const authReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const GlobalContextProvider = ({ children }) => {
  const [authState, dispatch] = useReducer(authReducer, {
    user: null,
  });
  return <GlobalContext.Provider value={{}}>{children}</GlobalContext.Provider>;
};

export { GlobalContext, GlobalContextProvider };
