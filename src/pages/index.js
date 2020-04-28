import React from "react"
import { Link, graphql } from "gatsby"

import Hero from "../components/sliders/hero"
import Layout from "../components/layout"
import WhatWeGot from "../components/whatWeGot/WhatWeGot"
import AboutUs from "../components/aboutUs/AboutUs"
import Separator from "../components/separator/Separator"

export const pageQuery = graphql` 
  query IndexQuery {
    allStrapiArticle {
      edges {
        node {
          id
          title
          content
          articleImage {
            childImageSharp {
              fixed {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  }
`

const IndexPage = (data) => (
  <Layout>
    <Hero />
    <WhatWeGot/>
    <AboutUs />
    <Separator />
    {
      data.data.allStrapiArticle.edges.map((article) => {
        return <div key={article.node.id}>
          <h1><Link to={article.node.id}>{article.node.title}</Link></h1>
          <p>{article.node.content}</p>
          <img src={article.node.articleImage.childImageSharp.fixed.src} alt="" />
        </div>
      })}
  </Layout>
)

export default IndexPage
