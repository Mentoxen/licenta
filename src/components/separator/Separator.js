import React from "react"

import { Col, Container, Row } from "react-bootstrap"
import SectionTitle from "../inc/SectionTitle"
import { graphql, useStaticQuery } from "gatsby"

const Separator = () => {

  const data = useStaticQuery(graphql`
    query {
      strapiSeparator {
        title
        subtitle
        ctaText
      }
    }
  `);

  const {title, subtitle, ctaText} = data.strapiSeparator;

  return(
    <section className="section-separator">
      <Container>
        <Row>
          <Col lg={10}>
            <SectionTitle
              defaultColor={true}
              inverted={true}
              title={title}
              subtitle={subtitle}
            />
          </Col>
          <Col lg={2}>
            <a href="#" className="btn btn-default-outline">{ctaText}</a>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Separator;
