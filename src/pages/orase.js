import React from "react"
import Layout from "../components/layout"
import { Col, Container, Row } from "react-bootstrap"
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, Hits } from 'react-instantsearch-dom';
import Cities from "../components/cities/cities"

const searchClient = algoliasearch('MF4O1MIFAQ', 'a8029ba4c13af0353960c4dd7f5ecd6c');

const OrasePage = () => (
  <Layout>
    <Container className="pt-12">
      <InstantSearch searchClient={searchClient} indexName="orase">
        <SearchBox />
        <Hits hitComponent={Cities} />
        </InstantSearch>
      <Row>

      </Row>
    </Container>
  </Layout>
)

export default OrasePage
