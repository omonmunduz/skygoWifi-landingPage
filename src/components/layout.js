/*
 *
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

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
    <>
      <div
        style={{
          margin: `0 auto`,
          width: "100vw",
        }}
      >
        <main>{children}</main>
        <footer
          className="bg-indigo-600  p-5 flex justify-center"
        >
         <p className="text-white text base font-extrabold"> © {new Date().getFullYear()}, SkyGo All Rights Reserved </p>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
