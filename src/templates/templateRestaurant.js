import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import "../assets/style.scss";

const RestaurantTemplate = ({ data }) => {
  const {nume, banner} = data.strapiRestaurants;
  return (
    <Layout>
      <div className="container pt-12">
        <img src={ banner[0].url } alt="" className="img-fluid" />
        <h1>{nume}</h1>
      </div>
    </Layout>
  )
}

export default RestaurantTemplate

export const query = graphql`
  query strapiRestaurant($id: String!) {
    strapiRestaurants(nume: {eq: $id}) {
      nume
      banner {
        url
      }
    }
  }
`
