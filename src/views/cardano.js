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
import React, { useEffect } from "react";
import 'assets/css/stakingkiwi.css'; // Import the CSS file
// reactstrap components
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";


function Cardano() {
  return (
    <React.Fragment>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <div className="text-center">
                  <h5 className="title">Cardano Staking</h5>
                  <p className="category">
                    *This Section is UNDER CONSTUCTION!
                  </p>
                </div>
              </CardHeader>
              <CardBody className="all-icons">
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </React.Fragment>
  );
}

export default Cardano;