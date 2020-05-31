import React from "react"
import { Link } from "gatsby"

const Cities = ({ hit }) => {
  return (
    <>
      {hit.imagine_oras.map((image) => {
        return <img src={image.url} className="img-fluid" alt="" />
      })}
      <h2 className="section-title text-1md mb-5">{hit.nume}</h2>
      <Link className="btn btn-secondary-faded btn-small mt-auto mb-5 align-self-center" to={`orase/${hit.id}`}>Detalii</Link>
    </>
  )
}

export default Cities;
