// Import react
import React from "react";
// Import components
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";

// Define no match page
function NoMatch() {
  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          {/* create Jumbotron to display 404 Page Not found */}
          <Jumbotron>
            <h1 className="text-center">404 Page Not Found</h1>
            <h1 className="text-center">
              <span role="img" aria-label="Face With Rolling Eyes Emoji">
                🙄
              </span>
            </h1>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  );
}

export default NoMatch;
