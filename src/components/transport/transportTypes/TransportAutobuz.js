import React from "react"
import bus from '../../../images/bus.png';

const TransportAutobuz = ({ transport }) => {

  return (
    <ul className="list-unstyled transport-list">
      {transport && transport.linie.map((linie, index) => {

        return (
          <li key={index}>
            <h2 className="card-title">{linie.nume_linie}</h2>
            <ul className="list-unstyled transport-statii">
              <li className="transport-icon-wrapper">
                <img src={bus} alt="" className="transport-icon" />
              </li>
            {
              linie.statii.map((linieTranport, index) => {
                return(
                  <li key={index}>{linieTranport.nume_statie} {linieTranport.ora_statie && <span>: {linieTranport.ora_statie}</span>}</li>
                )
              })
            }
            </ul>
          </li>
        )
      })}
    </ul>
  )
}

export default TransportAutobuz
