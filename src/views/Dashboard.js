import React from "react";
import classNames from "classnames";
import { Line, Bar } from "react-chartjs-2";
import {
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Label,
  FormGroup,
  Input,
  Table,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

// Import chart data and options
import { chartExample1, chartExample2, chartExample3, chartExample4 } from "variables/charts.js";

function Dashboard(props) {
  const [bigChartData, setbigChartData] = React.useState("data1");

  const setBgChartData = (name) => {
    setbigChartData(name);
  };

  // Ensure chart data is valid and set up
  const getChartData = () => {
    return chartExample1[bigChartData] || { data: {}, options: {} };
  };

  return (
    <div className="content">
      <Row>
        <Col xs="12">
          <Card className="card-chart">
            <CardHeader>
              <Row>
                <Col className="text-left" sm="6">
                  <h5 className="card-category">Total Stake</h5>
                  <CardTitle tag="h2">*Updates every 10 Min.</CardTitle>
                </Col>
                <Col sm="6">
                  <ButtonGroup className="btn-group-toggle float-right" data-toggle="buttons">
                    <Button
                      tag="label"
                      className={classNames("btn-simple", { active: bigChartData === "data1" })}
                      color="info"
                      size="sm"
                      onClick={() => setBgChartData("data1")}
                    >
                      <span className="d-none d-sm-block">Accounts</span>
                      <span className="d-block d-sm-none"><i className="tim-icons icon-single-02" /></span>
                    </Button>
                    <Button
                      color="info"
                      size="sm"
                      tag="label"
                      className={classNames("btn-simple", { active: bigChartData === "data2" })}
                      onClick={() => setBgChartData("data2")}
                    >
                      <span className="d-none d-sm-block">Purchases</span>
                      <span className="d-block d-sm-none"><i className="tim-icons icon-gift-2" /></span>
                    </Button>
                    <Button
                      color="info"
                      size="sm"
                      tag="label"
                      className={classNames("btn-simple", { active: bigChartData === "data3" })}
                      onClick={() => setBgChartData("data3")}
                    >
                      <span className="d-none d-sm-block">Sessions</span>
                      <span className="d-block d-sm-none"><i className="tim-icons icon-tap-02" /></span>
                    </Button>
                  </ButtonGroup>
                </Col>
              </Row>
            </CardHeader>
            <CardBody>
              <div className="chart-area">
                <Line data={getChartData().data} options={getChartData().options} />
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col lg="4">
          <Card className="card-chart">
            <CardHeader>
              <h5 className="card-category">Total Shipments</h5>
              <CardTitle tag="h3"><i className="tim-icons icon-bell-55 text-info" /> 763,215</CardTitle>
            </CardHeader>
            <CardBody>
              <div className="chart-area">
                <Line data={chartExample2.data} options={chartExample2.options} />
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col lg="4">
          <Card className="card-chart">
            <CardHeader>
              <h5 className="card-category">Daily Sales</h5>
              <CardTitle tag="h3"><i className="tim-icons icon-delivery-fast text-primary" /> 3,500€</CardTitle>
            </CardHeader>
            <CardBody>
              <div className="chart-area">
                <Bar data={chartExample3.data} options={chartExample3.options} />
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col lg="4">
          <Card className="card-chart">
            <CardHeader>
              <h5 className="card-category">Completed Tasks</h5>
              <CardTitle tag="h3"><i className="tim-icons icon-send text-success" /> 12,100K</CardTitle>
            </CardHeader>
            <CardBody>
              <div className="chart-area">
                <Line data={chartExample4.data} options={chartExample4.options} />
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
      {/* Additional rows and components here */}
    </div>
  );
}

export default Dashboard;
