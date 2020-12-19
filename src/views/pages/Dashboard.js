import React from "react"
import { Row, Col } from "reactstrap"
import ApexAreaChart from "./ApexAreaCharts"
import ApexRadialCharts from "./../../components/@vuexy/charts/ApexRadarChart"

let $primary = "#7367F0",
  $success = "#28C76F",
  $warning = "#FF9F43"

let themeColors = [$primary, $success, $warning]

class Dashboard extends React.Component{
  render(){
    return (
      <React.Fragment>
        <Row className="match-height">
            <Col lg="8" md="6" sm="12">
              <Row className="match-height property-chart">
                <Col lg="8" md="6" sm="12">
                  <ApexAreaChart themeColors={themeColors} />
                </Col>
                <Col lg="4" md="6" sm="12" className="price-left">
                  <Row className="match-height">
                    <Col lg="9" md="6" sm="12">
                      <ApexRadialCharts className="circle-chart"/>
                      circle chart
                      <p><b>Change in dwelling<br/> value</b></p>
                      <span>Three months</span> <br/>
                      <span>Three months</span> <br/>
                      <span>Avg. annular growth past decade</span> <br/><br/>

                      <p><b>Median<br/>value</b></p>
                      <span>dwelling</span><br/>
                      <span>Median house </span> <br/>



                    </Col>
                      aaa
                    <Col lg="3" md="6" sm="12">

                    </Col>

                  </Row>
                </Col>
              </Row>
            </Col>
            <Col lg="4" md="6" sm="12">
              aaa
            </Col>
        </Row>
      </React.Fragment>
    )
  }
}

export default Dashboard