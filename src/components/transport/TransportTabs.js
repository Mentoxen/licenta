import React from "react"
import { Tab, Tabs } from "react-bootstrap"
import TransportAutobuz from "./transportTypes/TransportAutobuz"

const TransportTabs = ({transportLocal, transportPrivat}) => {

  return (
    <Tabs defaultActiveKey="autobuz" id="uncontrolled-tab-example">
      <Tab eventKey="autobuz" title="Linii">
        <TransportAutobuz transport={transportLocal} />
      </Tab>
      <Tab eventKey="taxi" title="Taxi">
        taxi
      </Tab>
    </Tabs>
  )
}

export default TransportTabs
