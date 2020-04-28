import React from "react"
import { Col } from "react-bootstrap"

const WhatWeGotContent = ({title, content, icon }) => {

  return(
    <Col lg={4} className="mb-5">
      <div className="item">
        <img src={icon} className="icon" alt="" />
        <h3 className="title">{title}</h3>
        <p className="content">{content}</p>
      </div>
    </Col>
  )
}

export default WhatWeGotContent
