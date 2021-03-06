import React from "react"
import { Link, graphql } from "gatsby"

import Hero from "../components/sliders/hero"
import Layout from "../components/layout"
import WhatWeGot from "../components/whatWeGot/WhatWeGot"
import AboutUs from "../components/aboutUs/AboutUs"
import Separator from "../components/separator/Separator"
import Testimonials from "../components/testimonials/Testimonials"
import LastNews from "../components/lastNews/LastNews"
import Contact from "../components/contact/Contact"
import Registration from "../components/auth/Registration"
import Login from "../components/auth/Login"
import { StateProvider } from "../components/auth/store"


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
              fixed (width: 280, height: 210){
                src
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
      <Testimonials />
      <LastNews sliderData={data.data.allStrapiArticle.edges} />
      <Contact />
      <Registration />
  </Layout>
)

export default IndexPage
