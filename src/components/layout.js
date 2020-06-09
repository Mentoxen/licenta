/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import { StateProvider } from "./auth/store"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <StateProvider>
      <Header siteTitle={data.site.siteMetadata.title} />
        <main>{children}</main>
        <footer className="footer pb-5 pt-5 mt-12 withBackgroundGray200">
          <div className="text-center">
            <p className="text-1xs">
              <strong className="withContentColor">Licenta:</strong>
              <strong className="withSecondaryColor"> Dascalu Iuliu - Daniel</strong>
            </p>
            <span>© {new Date().getFullYear()} </span>
          </div>
        </footer>
    </StateProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
