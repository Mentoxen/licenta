import { Col } from "react-bootstrap"
import { Link } from "gatsby"
import React from "react"

const Cities = ({ hit }) => {
  return (
    <Col lg={4}>
      {hit.imagine_oras.map((image) => {
        return <img src={image.url} className="img-fluid" alt="" />
      })}
      <h2>{hit.nume}</h2>
      <Link className="btn btn-secondary-faded btn-small mt-auto mb-5 align-self-center" to={`orase/${hit.id}`}>Detalii</Link>
    </Col>
  )
}

export default Cities;
