import React from "react"
import { Col, Row } from "react-bootstrap"

const SectionTitle = ({title, subtitle, center = false, inverted = false, defaultColor = false}) => {

  return <Row>
    <Col className={`${center ? 'text-center' : ''}`}>
      <h2 className={`${!inverted ? `section-title` : `section-title-inverted`} ${defaultColor ? `withDefaultColor` : ''}`}>{title}</h2>
      <p className={`${!inverted ? `section-content` : `section-content-inverted`} ${defaultColor ? `withDefaultColor` : ''}`}>{subtitle}</p>
    </Col>
  </Row>
}

export default SectionTitle
