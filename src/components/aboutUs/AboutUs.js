import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Col, Container, Row } from "react-bootstrap"
import SectionTitle from "../inc/SectionTitle"

const AboutUs = () => {

  const data = useStaticQuery(graphql`
    query {
      strapiAboutUs {
        title
        content
        subtitle
        id
        aboutImage {
          childImageSharp {
            fluid {
              src
            }
          }
        }
      }
    }
  `)

  const { title, subtitle, content, aboutImage } = data.strapiAboutUs;

  return(
    <Container className="section-about-us pt-12">
      <Row>
        <Col lg={6}>
          <img src={aboutImage.childImageSharp.fluid.src} alt="" className="img-fluid" />
        </Col>
        <Col lg={6}>
          <SectionTitle title={title} subtitle={subtitle}  inverted={true} />
          <p className="mb-5">{content}</p>
          <a href="#" className="btn btn-secondary-faded">Citeste mai mult</a>
        </Col>
      </Row>
    </Container>
  )

}

export default AboutUs
