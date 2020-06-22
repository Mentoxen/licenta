import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useContext } from "react"
import { Nav, Navbar } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/style.scss'
import { store } from "./auth/store"
import { navigate } from "@reach/router"

const Header = ({ siteTitle }) => {
  const {state, dispatch} = useContext(store);
  const logout = () => {
    console.log("logout");
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    dispatch({type: 'signOut'});
  }
  console.log(state.isAuthenticated)
  return(
    <header className="navigation">
      <Navbar fixed="top" className="container" collapseOnSelect expand="lg">
        <Navbar.Brand href="#ho1me">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            {!state.isAuthenticated ?
              <>
                <Nav.Link href='/register'>
                  <button className="btn btn-primary btn-small">
                    Register
                  </button>
                </Nav.Link>
                <Nav.Link href='/login'>
                  <button className="btn btn-secondary-faded btn-small">
                    Login
                  </button>
                </Nav.Link>
              </> :
              <Nav.Link>
                <button onClick={logout} className="btn btn-secondary-faded btn-small">
                  Logout
                </button>
              </Nav.Link>
            }
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
