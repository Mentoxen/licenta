// import ...
import React, { Component, useContext } from "react"
import { navigate } from "gatsby"
import { store } from "../auth/store"
import {
  Route,
  Redirect
} from "react-router-dom";

const PrivateRoute = ({ children, ...rest }) => {
  const {state} = useContext(store)
  console.log(rest)

  return (
    <Route
      {...rest}
      render={() =>
        state.isAuthenticated ? (
          children
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
}

export default PrivateRoute