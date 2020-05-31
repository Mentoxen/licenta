import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'
import "../assets/style.scss";

const OrasTemplate = ({ data }) => {
  const {nume, imagine_oras, restaurants, id} = data.strapiOras;

  return (
    <Layout>
      <section className="inner-page">
        <div className="inner-page-banner" >
          {
            imagine_oras.map((imagine) => {
              return <img src={imagine.url} alt="" />
            })
          }
          <h1 className="section-title">{nume}</h1>
        </div>
        <div className="container pt-12">
          {
            restaurants.map((restaurant) => {
              return <Link to={`orase/${id}/${restaurant.nume}`}>{restaurant.nume}</Link>
            })
          }
        </div>
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
        nume
        id
      }
    }
  }
`
