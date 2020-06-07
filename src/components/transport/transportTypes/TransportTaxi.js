import React from "react"
import ContactCard from "../../contact/ContactCard"
import {Link} from 'gatsby'

const TransportTaxi = ({transport, urlId}) => {

  return (
    <ul className="transport-list list-unstyled cards-wrapper row">
      {
        transport && transport.map((taxi, index) => {
          return (
            <li key={index} className="col-md-4">
              <div className="card">
                {taxi && taxi.photos.map((photo, index) => {
                  return <img src={photo.url} alt="" key={index} />
                })}
                <div className="card-body">
                  <div className="card-title">
                    {taxi.nume}
                  </div>
                  <ContactCard isAddress={true} data={taxi.contact.adresa} />
                  <ContactCard isEmail={true} data={taxi.contact.email} />
                  <ContactCard isUrl={true} data={taxi.contact.web} />
                  <Link to={`/orase/${urlId}/${taxi.nume}`} className="btn btn-secondary btn-full">Detalii</Link>
                </div>
              </div>
            </li>
          )
        })
      }
    </ul>
  )
}

export default TransportTaxi
