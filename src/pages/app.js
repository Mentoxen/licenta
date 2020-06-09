import React from "react"
import {
  BrowserRouter as Router,
} from "react-router-dom";
import Layout from "../components/layout"
import PrivateRoute from "../components/rivateRoute/PrivateRoute"

import Admin from "../components/admin"

const App = () => (
  <Layout>
    <Router>
      <PrivateRoute path="/app/admin" >
        <Admin />
      </PrivateRoute>
    </Router>
  </Layout>
)

export default App