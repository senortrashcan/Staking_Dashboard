

import React, { useEffect, useState } from "react";
import 'assets/css/stakingkiwi.css'; // Import the CSS file
// reactstrap components
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import { address, createSolanaRpc } from "@solana/kit";

function Solana() {
  const [voteAccounts, setVoteAccounts] = useState(null); // State to store the vote accounts data

  useEffect(() => {
    // Function to fetch Solana vote accounts data
    const fetchVoteAccounts = async () => {
      try {
        const rpc_url = "https://api.devnet.solana.com";
        const rpc = createSolanaRpc(rpc_url);

        let votePubkey = address("5ZWgXcyqrrNpQHCme5SdC5hCeYb2o3fEJhF7Gok3bTVN");

        let voteAccountsData = await rpc
          .getVoteAccounts({
            votePubkey,
          })
          .send();

        setVoteAccounts(voteAccountsData); // Update the state with the fetched data
        console.log(voteAccountsData); // Log the data to the console
      } catch (error) {
        console.error("Error fetching vote accounts data:", error);
      }
    };

    fetchVoteAccounts(); // Call the function to fetch data
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
              <CardBody>
                <div>
                  <h6>Vote Accounts Data:</h6>
                  {voteAccounts ? (
                    <pre>{JSON.stringify(voteAccounts, null, 2)}</pre> // Display the vote accounts data
                  ) : (
                    <p>Loading...</p> // Show a loading message while data is being fetched
                  )}
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