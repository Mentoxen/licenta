import React from "react"
import { Tab, Tabs } from "react-bootstrap"
import TransportAutobuz from "./transportTypes/TransportAutobuz"
import TransportTaxi from "./transportTypes/TransportTaxi"

const TransportTabs = ({transportLocal, transportPrivat, urlId}) => {

  return (
    <Tabs defaultActiveKey="autobuz" id="uncontrolled-tab-example">
      <Tab eventKey="autobuz" title="Linii">
        <TransportAutobuz transport={transportLocal} />
      </Tab>
      <Tab eventKey="taxi" title="Taxi">
        <TransportTaxi transport={transportPrivat} urlId={urlId} />
      </Tab>
    </Tabs>
  )
}

export default TransportTabs
