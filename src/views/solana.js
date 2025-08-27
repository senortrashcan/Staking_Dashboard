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
import 'assets/css/stakingkiwi.css';
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";

function Solana() {
  const [chainInfo, setChainInfo] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSolscanData = async () => {
      try {
        const requestOptions = {
          method: "GET",
          headers: {"token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjcmVhdGVkQXQiOjE3NTU1NzgyNzgyNzAsImVtYWlsIjoiaG5sOTMyNEBnbWFpbC5jb20iLCJhY3Rpb24iOiJ0b2tlbi1hcGkiLCJhcGlWZXJzaW9uIjoidjIiLCJpYXQiOjE3NTU1NzgyNzh9.vwUQFT0CpjSI2tx3Lp2sGCSG0Ffurg4a8da6f2RZye0"}
        };

        const res = await fetch("https://public-api.solscan.io/chaininfo", requestOptions);
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);

        const data = await res.json();
        setChainInfo(data);
        console.log("Solscan chain info:", data);
      } catch (err) {
        console.error("Error fetching Solscan data:", err);
        setError(err.message);
      }
    };

    fetchSolscanData();
  }, []);

  return (
    <React.Fragment>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <div className="text-center">
                  <h5 className="title">Solana Chain Info (via Solscan API)</h5>
                </div>
              </CardHeader>
              <CardBody>
                {error && <p style={{ color: "red" }}>Error: {error}</p>}
                {chainInfo ? (
                  <pre>{JSON.stringify(chainInfo, null, 2)}</pre>
                ) : (
                  <p>Loading...</p>
                )}
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </React.Fragment>
  );
}

export default Solana;
