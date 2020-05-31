import React from "react"
import Layout from "../components/layout"
import { Container, Row } from "react-bootstrap"
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, Hits } from 'react-instantsearch-dom';
import Cities from "../components/cities/cities"

const searchClient = algoliasearch('MF4O1MIFAQ', 'a8029ba4c13af0353960c4dd7f5ecd6c');

const OrasePage = () => (
  <Layout>
    <Container className="pt-12">
      <h1 className="title-hero mt-12 text-center">Cauta un oras</h1>
      <InstantSearch searchClient={searchClient} indexName="orase">
        <SearchBox />
        <Hits hitComponent={Cities} />
        </InstantSearch>
    </Container>
  </Layout>
)

export default OrasePage
