import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import "../assets/style.scss";
import ContactCard from "../components/contact/ContactCard"

const TaxiTemplate = ({ data }) => {
  const {nume, descriere, contact, photos, phone, pret} = data.strapiTransportPrivats;

  return (
    <Layout>
      <section className="inner-page">
        <div className="inner-page-product-banner">
          <img src={photos[0].url} alt="" className="img-fluid" />
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
                  <h2 className="card-title">Contact</h2>
                  <ContactCard isAddress={true} data={contact.adresa} />
                  <ContactCard isEmail={true} data={contact.email}/>
                  <ContactCard isUrl={true} data={contact.web}/>
                  {
                    phone && phone.map((number, index) => {
                      return <ContactCard isPhone={true} data={number.number} key={index} />
                    })
                  }
                </div>
              </div>

              <div className="card">
                <div className="card-body">
                  <div className="card-title">Tarife</div>
                  <p>Pret zi: <strong className="font-weight-bold withContentColor">{pret.zi}</strong></p>
                  <p>Pret noapte: <strong className="font-weight-bold withContentColor">{pret.noapte}</strong></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default TaxiTemplate

export const query = graphql`
  query strapiTaxi($id: String!) {
    strapiTransportPrivats(nume: {eq: $id}) {
      id
      nume
      descriere
      contact {
        adresa
        email
        web
      }
      phone {
        number
        provider
      }
      photos {
        url
      }
      pret {
        noapte
        zi
      }
    }
  }
`
