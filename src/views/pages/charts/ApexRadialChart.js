import React from "react"
import { Card, CardHeader, CardTitle, CardBody } from "reactstrap"
import Chart from "react-apexcharts"

class ApexRadialCharts extends React.Component {
  state = {
    options: {
      colors: this.props.themeColors,
      plotOptions: {
        radialBar: {
          dataLabels: {
            name: {
              fontSize: "12px"
            },
            value: {
              color: "#162548",
              offsetX: +10,
              offsetY: -10,
              fontSize: "14px",
              font: "bold",
            },            
          },
          track: {
            dropShadow: {
              enabled: true,
              top: 2,
              left: 0,
              blur: 4,
              opacity: 0.15
            }
          }
        }
      },

      labels: [""],
      fill: {
        colors: ["#69ebec"],
        type: "gradient",
        gradient: {
          shade: "dark",
          type: "horizontal",
          shadeIntensity: 0.5,
          gradientToColors: ["#69EBEC"],
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100]
        }
      },
      stroke: {
        lineCap: "sharp"
      },
    },
    series: [35.4]
  }

  render() {
    return (
      <Chart
        options={this.state.options}
        series={this.state.series}
        type="radialBar"
        width={150}
        height={150}
        style={{ marginLeft: '-26px', marginTop: '-13px' }}
      />
    )
  }
}
export default ApexRadialCharts
