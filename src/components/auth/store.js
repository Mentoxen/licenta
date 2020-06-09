import React, {createContext, useReducer} from "react";

const checkAuth = () => {
  const token = localStorage.getItem('token');
  console.log("token", !!token && token.length);
  return !!(token && token.length);
};
console.log(checkAuth())
const initialState = {
  isAuthenticated: checkAuth(),
  roles: []
};

const store = createContext(initialState);
const {Provider} = store;

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'authenticate':
      console.log("authenticate");
      return {
        ...state,
        isAuthenticated: true
      };
    case 'signOut':
      return {
        ...state,
        isAuthenticated: false
      };
    case 'setRoles':
      return {
        ...state,
        roles: action.payload
      };
    default:
      return state;
  }
};

const StateProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state)
  return <Provider value={{state, dispatch}}>{children}</Provider>
};

export {store, StateProvider, checkAuth};
