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


function Icons() {
  useEffect(() => {
    // Create script element
    const script = document.createElement('script');
    script.src = "https://widget.staking.kiwi/js/widget.min.js";
    script.async = true;
    script.onload = () => {
      // Script has loaded and is ready to use
      console.log('Staking widget script loaded');
    };

    // Append script to the body
    document.body.appendChild(script);

    // Cleanup function to remove the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []); // Empty dependency array ensures this effect runs only once after initial render

  return (
    <React.Fragment>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <div className="text-center">
                  <h5 className="title">Solana Staking</h5>
                  <p className="category">
                    *Please note we are still in the process of integrating our own interface. Your assets are safe.
                  </p>
                </div>
              </CardHeader>
              <CardBody className="all-icons">
                <div className="iframe-container">
                  <iframe
                    id="staking-kiwi-widget-0"
                    scrolling="no"
                    frameBorder="0"
                    allowTransparency="true"
                    allowFullScreen
                    className="staking-widget-iframe"
                    title="Staking Kiwi widget"
                    src="https://widget.staking.kiwi/?validator=4WYZhk6CYCVEqpehJbv6w7wJUgW2nDjeVMPvsomy8mbM&theme=dark"
                  ></iframe>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </React.Fragment>
  );
}

export default Icons;