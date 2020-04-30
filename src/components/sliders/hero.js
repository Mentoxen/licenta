import React from "react"
import Slider from "react-slick";
import { Col, Container, Row } from "react-bootstrap"
import img from '../../images/slider-image.png';
import { graphql, useStaticQuery } from "gatsby"
import "slick-carousel/slick/slick.css";
import { heroSliderSettings } from "../settings"
import HeroSliderItem from "../sliders-items/heroSliderItem"

const Hero = ()  => {
  const data = useStaticQuery(graphql`
    query {
      allStrapiHeroSlides {
        edges {
          node {
            id
            title
            subtitle
            content
          }
        }
      }
    }
  `);

  return(
    <section className="section-hero with-dots-as-line">
      <Container>
        <Row className="row row-eq-height">
          <Col lg="5" className="d-flex align-items-center pb-5">
            <div className="slick-fix">
              <Slider {...heroSliderSettings} >
                {
                  data.allStrapiHeroSlides.edges.map((slideData) => {
                    const {subtitle, title, content, id } = slideData.node;
                    return <HeroSliderItem key={id} title={title} subtitle={subtitle} content={content} />
                  })
                }
              </Slider>
            </div>
          </Col>
          <Col className="col-lg-5 offset-lg-1">
            <img src={img} className="img-fluid" alt="" />
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Hero
