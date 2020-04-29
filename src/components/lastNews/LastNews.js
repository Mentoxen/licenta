import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby"
import { Col, Container, Row } from "react-bootstrap"
import SectionTitle from "../inc/SectionTitle"
import Slider from "react-slick"
import { articleSliderSettings } from "../settings"


const LastNews = ({sliderData}) => {

  const data = useStaticQuery(graphql`
    query {
      strapiUltimeleNoutati {
        title
        subtitle
      }
    }
  `)

  const {title, subtitle} = data.strapiUltimeleNoutati;

  return(

    <Container className="pt-12 section-articles-preview with-dots-as-line with-custom-arrows">
      <Row>
        <Col>
          <SectionTitle title={title} subtitle={subtitle} inverted={true} center={true} />
        </Col>
      </Row>
      <Slider {...articleSliderSettings}>
        {
          sliderData.map((article) => {
            return <div className="pl-4 pr-4 h-100" key={article.node.id}>
              <div className="h-100 article-content d-flex flex-direction-column">
                <img
                  src={article.node.articleImage.childImageSharp && article.node.articleImage.childImageSharp.fixed.src}
                  alt=""
                  className="img-fluid mb-4 w-100"
                />
                <div className="pl-3 pr-3 pb-5">
                  <h3 className="titles-base withContentColor mb-3 text-1xs">{article.node.title}</h3>
                  <p>{article.node.content}</p>
                </div>
                <Link className="btn btn-secondary-faded btn-small mt-auto mb-5 align-self-center" to={article.node.id}>Detalii</Link>
              </div>
            </div>
          })}
      </Slider>
    </Container>
  )
}

export default LastNews
