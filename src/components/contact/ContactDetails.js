import React from "react"
import SectionTitle from "../inc/SectionTitle"
import { graphql, useStaticQuery } from "gatsby"

const ContactDetails = () => {

  const data = useStaticQuery(graphql`
    query {
      allStrapiContactDetails {
        edges {
          node {
            Type
            Info
            icon {
              childImageSharp {
                fixed(width: 32, height: 32) {
                  src
                }
              }
            }
          }
        }
      }
    }
  `)


  const { edges } = data.allStrapiContactDetails;
  console.log(edges)

  return (
    <div className="contact-details">
      <SectionTitle
        subtitle="Contact"
        title="Ai mai multe intrebari? Suntem disponibili"
        inverted={true}
      />

      <ul className="list-unstyled">
        {
          edges.map((contactItems, index) => {
            const { Type, Info, icon } = contactItems.node;

            return(
              <li className="d-flex align-items-center mb-5" key={index}>
                <img className="mr-4" src={icon && icon.childImageSharp.fixed.src} alt="" />
                <div>
                  <h3 className="titles-base withSecondaryColor">{Type}</h3>
                  <span>{Info}</span>
                </div>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default ContactDetails
