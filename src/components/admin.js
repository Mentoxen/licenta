import React, { useEffect, useState } from "react"
import Layout from "../components/layout"
import RestaurantForm from "./forms/restaurantForm"
import { Tab, Tabs } from "react-bootstrap"
import TransportAutobuz from "./transport/transportTypes/TransportAutobuz"
import TransportTaxi from "./transport/transportTypes/TransportTaxi"
import useRestaurant from "./hooks/useRestaurant"

const Admin = () => {
  const {currentRestaurant, setCurrentRestaurant} = useRestaurant();

  return(
      <section className="inner-page">
        <div className="container">
          <div className="row">
            <div className="col">
              <h2>Bine ai venit, {localStorage.getItem('user')}</h2>
              <Tabs defaultActiveKey="Restaurant" id="uncontrolled-tab-example2">
                <Tab eventKey="Restaurant" title="Restaurant">
                  <RestaurantForm />
                </Tab>
                <Tab eventKey="taxi" title="Taxi">
                taxi
                </Tab>
              </Tabs>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Admin
