import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <Row>
          <Col>
            <h2>Katalog broni palnej</h2>
          </Col>
          <Col>
            Amadeusz Durski (105904) grupa I kierunek Informatyka<br></br>
            (Wykorzystanie wzorców w technologiach internetowych)
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
