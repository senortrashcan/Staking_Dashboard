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
import React, { useEffect, useState } from "react";
import 'assets/css/stakingkiwi.css'; // Import the CSS file
// reactstrap components
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import { Connection, clusterApiUrl } from "@solana/web3.js";

function Solana() {
  const [version, setVersion] = useState(null); // State to store the version data

  useEffect(() => {
    // Function to fetch Solana data
    const fetchSolanaData = async () => {
      try {
        const connection = new Connection(clusterApiUrl("devnet"), "confirmed");
        const versionData = await connection.getVoteAccounts();
        setVersion(versionData); // Update the state with the fetched data
        console.log(versionData); // Log the data to the console
      } catch (error) {
        console.error("Error fetching Solana data:", error);
      }
    };

    fetchSolanaData(); // Call the function to fetch data
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
                    src="https://widget.staking.kiwi/?validator=&theme=dark"
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

export default Solana;