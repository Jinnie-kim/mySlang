import { createContext, useEffect, useReducer } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase/config';

const GlobalContext = createContext();

const authReducer = (state, action) => {
  switch (action.type) {
    case 'login':
      return { ...state, user: action.payload };
    case 'logout':
      return { ...state, user: null };
    case 'isAuthReady':
      return { ...state, user: action.payload, isAuthReady: true };
    default:
      return state;
  }
};

const GlobalContextProvider = ({ children }) => {
  const [authState, dispatch] = useReducer(authReducer, {
    user: null,
    isAuthReady: false,
  });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      dispatch({ type: 'isAuthReady', payload: user });
    });
    return unsubscribe;
  }, []);

  return (
    <GlobalContext.Provider value={{ ...authState, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalContextProvider };
