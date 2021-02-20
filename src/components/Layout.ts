import { createElement as h, Fragment } from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./Header"
import Footer from "./Footer"
import "../styles/index.scss"

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

  return h(
    Fragment,
    null,
    h(Header, { siteTitle: data.site.siteMetadata.title }),
    h(
      "div",
      { className: "container" },
      h("main", { className: "container-main" }, children),
      h(Footer, { siteTitle: data.site.siteMetadata.title })
    )
  )
}

export default Layout
