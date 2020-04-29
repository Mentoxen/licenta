import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Col, Container, Row } from "react-bootstrap"
import SectionTitle from "../inc/SectionTitle"
import TestimonialsSliderItem from "../sliders-items/testimonialsSliderItem"
import { heroSliderSettings } from "../settings"
import Slider from "react-slick";

const Testimonials = () => {

  const data = useStaticQuery(graphql`
      query {
      strapiTestimonials {
        title
        subtitle
        testimonailImage {
          childImageSharp {
            fluid {
              src
            }
          }
        }
      }
      allStrapiTestimonialItems {
        edges {
          node {
            ocupation
            name
            content
            authorImage {
              childImageSharp {
                fluid {
                  src
                }
              }
            }
          }
        }
      }
    }
  `)

  const { title, subtitle, testimonailImage } = data.strapiTestimonials;
  const { edges } = data.allStrapiTestimonialItems;

  return(
    <Container className="pt-12">
      <Row>
        <Col lg={6}>
          <img src={testimonailImage && testimonailImage.childImageSharp.fluid.src} alt="" className="img-fluid" />
        </Col>
        <Col lg={6}>
          <SectionTitle title={title} subtitle={subtitle} inverted={true} />
          <div className="slick-fix with-dots-as-line">
            <Slider {...heroSliderSettings}>
              {
                edges.map((testimonialsData, index) => {
                  const { ocupation, name, content, authorImage} = testimonialsData.node;

                  return <TestimonialsSliderItem
                    key={index}
                    ocupation={ocupation}
                    name={name}
                    content={content}
                    image={authorImage.childImageSharp.fluid.src }
                  />
                })
              }
            </Slider>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Testimonials
