import React from "react"
import { Link } from "gatsby"
import { TabPane } from "react-bootstrap"

const RenderRestaurants = ({restaurants, urlId}) => {
  const textPreview = (str) => str.length > 100 ? str.substring(0, 100) + "..." : str;

  return (
    <ul className="list-unstyled cards-wrapper row">
      {
        restaurants && restaurants.map((restaurant) => {
          return (
            <li key={restaurant.id} className="col-md-4">
              <div className="card">
                <img src={restaurant.banner[0].url} className="img-fluid" alt="" />
                <div className="card-body">
                  <ul className="list-unstyled card-tags">
                    {restaurant.tags && restaurant.tags.map((tag) => {
                      return <li>
                        {tag.tag}
                      </li>
                    })}
                  </ul>
                  <h2 className="card-title">{restaurant.nume}</h2>
                  <div className="card-description">
                    {textPreview(restaurant.descriere)}
                  </div>
                  <Link className="btn btn-secondary btn-small btn-full"
                        to={`orase/${urlId}/${restaurant.nume}`}> Detalii</Link>
                </div>
              </div>
            </li>
          )
        })
      }
    </ul>
  )
}

export default RenderRestaurants;
