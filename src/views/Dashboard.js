/*!

=========================================================
* Black Dashboard React v1.2.2
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { useEffect, useState } from "react";// nodejs library that concatenates classes
import classNames from "classnames";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";

// reactstrap components
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

// core components
import {
  chartExample1,
  chartExample2,
  chartExample3,
  chartExample4,
} from "variables/charts.js";

// Load CoinGecko widget using useEffect


function Dashboard(props) {
  const [bigChartData, setbigChartData] = React.useState("data1");
  const setBgChartData = (name) => {
    setbigChartData(name);
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://widgets.coingecko.com/gecko-coin-price-chart-widget.js";
    script.async = true;
    document.body.appendChild(script);
  
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <div className="content">
        {/* CoinGecko Widgets Row */}
       <Row>
          <Col md="4">
            <div className="widget-container">
              <gecko-coin-price-chart-widget
                locale="en"
                transparent-background="true"
                dark-mode="true"
                outlined="true"
                coin-id="solana"
                initial-currency="usd"
              ></gecko-coin-price-chart-widget>
            </div>
          </Col>
          <Col md="4">
            <div className="widget-container">
              <gecko-coin-price-chart-widget
                locale="en"
                transparent-background="true"
                dark-mode="true"
                outlined="true"
                coin-id="avalanche-2"
                initial-currency="usd"
              ></gecko-coin-price-chart-widget>
            </div>
          </Col>
          <Col md="4">
            <div className="widget-container">
              <gecko-coin-price-chart-widget
                locale="en"
                transparent-background="true"
                dark-mode="true"
                outlined="true"
                coin-id="tether"
                initial-currency="usd"
              ></gecko-coin-price-chart-widget>
            </div>
          </Col>
        </Row>
        
       
      </div>
    </>
  );
}

export default Dashboard;
