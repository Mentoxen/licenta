import React from "react"

import { Col, Container, Row } from "react-bootstrap"
import SectionTitle from "../inc/SectionTitle"

const Separator = () => {

  return(
    <section className="section-separator">
      <Container>
        <Row>
          <Col lg={10}>
            <SectionTitle defaultColor={true} inverted={true} title="Te-am convins ?" subtitle="Esti curios ce se gaseste intr-un oras? Cauta acum!" />
          </Col>
          <Col lg={2}>
            <a href="#" className="btn btn-default-outline">Cauta</a>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Separator;
