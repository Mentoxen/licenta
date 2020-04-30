import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import SectionTitle from "../inc/SectionTitle"
import WhatWeGotContent from "./WhatWeGotContent"
import { Container, Row } from "react-bootstrap"

const WhatWeGot = () => {
  const data = useStaticQuery(graphql`
    query {
      allStrapiWhatWeGotItems {
        edges {
          node {
            title
            icon {
              childImageSharp {
                fixed {
                  src
                }
              }
              id
            }
            Content
          }
        }
      }
      strapiSectionTitle {
        title,
        subtitle
      }
    }
  `);

  const {edges} = data.allStrapiWhatWeGotItems;
  const {title, subtitle } = data.strapiSectionTitle;

  return (
    <Container className="section-what-we-got">
      <SectionTitle title={title} subtitle={subtitle} center={true} />
      <Row>
        {
          edges.map((dataItem) => {
            const {id, title, Content, icon } = dataItem.node;
            return <WhatWeGotContent key={id} content={Content} title={title} icon={icon.childImageSharp && icon.childImageSharp.fixed.src} />
          })
        }
      </Row>
    </Container>
  )
}

export default WhatWeGot

