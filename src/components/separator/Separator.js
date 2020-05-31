import React from "react"

import { Col, Container, Row } from "react-bootstrap"
import SectionTitle from "../inc/SectionTitle"
import { Link, graphql, useStaticQuery } from "gatsby"
import { ORASE } from "../settings"

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
            <Link to={ORASE} className="btn btn-default-outline">{ctaText}</Link>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Separator;
