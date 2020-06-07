import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import "../assets/style.scss";
import { Col, Container, Nav, NavItem, Row, Tab, TabContainer, TabContent, TabPane, Tabs } from "react-bootstrap"
import RenderRestaurants from "../components/render/RenderRestaurants"
import TransportTabs from "../components/transport/TransportTabs"

const OrasTemplate = ({ data }) => {
  const {nume, imagine_oras, restaurants, id, transport, transport_privats} = data.strapiOras;

  return (
    <Layout>
      <section className="inner-page">
        <div className="inner-page-banner" >
          {
            imagine_oras && imagine_oras.map((imagine, index) => {
              return <img src={imagine.url} key={index} alt="" />
            })
          }
          <h1 className="section-title">{nume}</h1>
        </div>

        <TabContainer id="left-tabs-example" defaultActiveKey="first">
          <Container>
            <Row>
              <Col sm={3}>
                <Nav variant="pills" className="flex-column">
                  <NavItem>
                    <Nav.Link eventKey="first">Locuri</Nav.Link>
                  </NavItem>
                  <Nav.Item>
                    <Nav.Link eventKey="second">Transport</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col sm={9}>
                <TabContent>
                  <TabPane eventKey="first">
                      <RenderRestaurants restaurants={restaurants} urlId={id} />
                  </TabPane>
                  <TabPane eventKey="second">
                    <TransportTabs transportLocal={transport} urlId={id} transportPrivat={transport_privats} />
                  </TabPane>
                </TabContent>
              </Col>
            </Row>
          </Container>
        </TabContainer>

      </section>
    </Layout>
  )
}

export default OrasTemplate

export const query = graphql`
  query OrasTemplate($id: String!) {
    strapiOras(id: {eq: $id}) {
      id
      nume
      imagine_oras {
        url
      }
      restaurants {
        id
        nume
        descriere
        banner {
          url
        }
        tags {
          tag
        }
      }
      transport {
        linie {
          nume_linie
          statii {
            nume_statie
            ora_statie
          }
        }
      }
      transport_privats {
        id
        nume
        descriere
        photos {
          url
        }
        contact {
          adresa
          email
          web
        }
        phone {
          number
          provider
        }
      }
    }
  }
`
