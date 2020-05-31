import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import "../assets/style.scss";

const OrasTemplate = ({ data }) => (
  <Layout>
    {console.log(data)}
    <h1>{data.strapiOras.nume}</h1>
  </Layout>
)

export default OrasTemplate

export const query = graphql`
  query OrasTemplate($id: String!) {
    strapiOras(id: {eq: $id}) {
      nume
    }
  }
`