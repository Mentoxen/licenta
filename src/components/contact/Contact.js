import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import ContactForm from "./ContactForm"
import ContactDetails from "./ContactDetails"

const Contact = () => {

  return(
    <Container className="pt-12">
      <Row>
        <Col lg={6}>
          <ContactDetails />
        </Col>
        <Col lg={6}>
          <ContactForm/>
        </Col>
      </Row>
    </Container>
  )
}

export default Contact
