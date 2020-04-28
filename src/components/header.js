import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Nav, Navbar } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/style.scss'

const Header = ({ siteTitle }) => (
  <header className="navigation">
    <Navbar fixed="top" className="container" collapseOnSelect expand="lg">
      <Navbar.Brand href="#ho1me">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link>More deets</Nav.Link>
          <Nav.Link>
            Dank memes
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
