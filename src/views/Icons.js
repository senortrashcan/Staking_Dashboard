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
import React from "react";

// reactstrap components
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";

function Icons() {
  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <center>
                <h5 className="title">Solana Staking</h5>
                <p className="category">
                  *Please note we are still in the process of integrating our own interface. Your assets are safe.
                </p>
                </center>
              </CardHeader>
              <CardBody className="all-icons">
                <Row>
                  <Col className="font-icon-list col-xs-6 col-xs-6" lg="2" md="3" sm="4" align="center">
                    <div className="font-icon-detail" align="center">
                      <i className="tim-icons icon-alert-circle-exc" />
                      <p>icon-alert-circle-exc</p>
                      <iframe id="staking-kiwi-widget-0" scrolling="no" frameborder="0" allowtransparency="true" allowfullscreen="true" class="" style="position: static; visibility: visible; width: 472px; height: 302px" title="Staking Kiwi widget" src="https://widget.staking.kiwi/?validator=4WYZhk6CYCVEqpehJbv6w7wJUgW2nDjeVMPvsomy8mbM&theme=dark" ></iframe>
                    </div>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Icons;
