import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { Card, CardHeader, CardBody, CardTitle, Row, Col, ButtonGroup, Button } from "reactstrap";
import { generateChartData } from "variables/charts.js"; // Import correct function

function Dashboard(props) {
  const [bigChartData, setBigChartData] = useState("data1");
  const [chartData, setChartData] = useState({ data: {}, options: {} });

  const setBgChartData = (name) => {
    setBigChartData(name);
  };

  // Fetch data when component loads
  useEffect(() => {
    async function fetchData() {
      const data = await generateChartData(); // Wait for data to load
      setChartData(data); // Set the fetched data to chartData state
    }
    fetchData();
  }, []);

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
                      Accounts
                    </Button>
                  </ButtonGroup>
                </Col>
              </Row>
            </CardHeader>
            <CardBody>
              <div className="chart-area">
                {/* Render chart only when chartData is available */}
                <Line data={chartData.data} options={chartData.options} />
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Dashboard;