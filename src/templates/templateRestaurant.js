import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import "../assets/style.scss";
import ContactCard from "../components/contact/ContactCard"

const RestaurantTemplate = ({ data }) => {
  const {nume, banner, descriere, tags, orar, Contact} = data.strapiRestaurants;
  console.log(data)
  return (
    <Layout>
      <section className="inner-page">
        <div className="inner-page-product-banner">
          <img src={ banner[0].url } alt="" className="img-fluid" />
          <h1 className="section-title">{nume}</h1>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              {descriere}
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <h2 className="card-title">Tags</h2>
                  <ul className="list-unstyled card-tags">
                    {tags && tags.map((tag) => {
                      return <li>{tag.tag}</li>
                    })}
                  </ul>
                </div>
              </div>

              <div className="card">
                <div className="card-body">
                  <h2 className="card-title">Orar</h2>
                  <ul className="list-unstyled card-orar">
                    {
                      orar && orar.map((program) => {
                        return <li><span>{program.Zile}:</span> {program.ora}</li>
                      })
                    }
                  </ul>
                </div>
              </div>

              <div className="card">
                <div className="card-body">
                  <h2 className="card-title">Contact</h2>
                  <ContactCard data={Contact.adresa} isAddress={true} />
                  <ContactCard data={Contact.email} isEmail={true} />
                  <ContactCard data={Contact.phone} isPhone={true} />
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default RestaurantTemplate

export const query = graphql`
  query strapiRestaurant($id: String!) {
    strapiRestaurants(nume: {eq: $id}) {
      nume
      descriere
      banner {
        url
      }
      orar {
        Zile
        ora
      }
      tags {
        tag
      }
      Contact {
        adresa
        email
        phone
      }
    }
  }
`
